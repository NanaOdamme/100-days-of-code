from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.db import IntegrityError
from .models import AddUser
from .models import Movie
from django.db.models import Q
from django.conf import settings
import requests

#index request
def mainpage(request):
    return render(request, 'index.html')


#signup data
def sign_up(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        if AddUser.objects.filter(username=username).exists():
            return render(request, 'signup.html', {'error_message': 'Username already exists'})

        try:
            new_user = AddUser(username=username, email=email, password=password)
            new_user.save()

            return redirect('user_login')
        except IntegrityError:
            return render(request, 'signup.html', {'error_message': 'Error creating user'})

    return render(request, 'signup.html')


#login data
def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        try:
            
            if AddUser.objects.filter(username=username, password=password).exists():
                return redirect('mainpage')
            else:
                return render(request, 'login.html', {'error_message': 'Invalid username or password'})

        except IntegrityError:
            return render(request, 'login.html', {'error_message': 'Error logging in'})

    return render(request, 'login.html')

#use games api
def game_page(request):
    api_url = 'http://localhost:8000/'
    response = requests.get(api_url)
    
    if response.status_code == 200:
        games = response.json()
    else:
        games = []
    context = {'games': games}
    return render(request, 'games.html', context)


#use  tmdb api
def get_movies(page=1):
    url = f'https://api.themoviedb.org/3/discover/movie?api_key={settings.TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&page={page}'
    response = requests.get(url)
    data = response.json()
    return data['results']


def movies_page(request):
    page = request.GET.get('page', 1)
    search_query = request.GET.get('search', '')
    
    if search_query:
        # Filter movies based on search query
        movies_data = Movie.objects.filter(title__icontains=search_query)
    else:
        # If no search query provided, fetch all movies
        movies_data = Movie.objects.all()

    
    for movie_data in movies_data:
            Movie.objects.create(
                title=movie_data.title,
                overview=movie_data.overview,
                release_date=movie_data.release_date,
                poster_path=f"https://image.tmdb.org/t/p/w500/{movie_data.poster_path}"
            )
    
    
    return render(request, 'movies.html', {'movies': movies_data, 'page': int(page)})
