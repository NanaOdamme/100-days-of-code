from django.contrib.auth import authenticate
from django.shortcuts import render, redirect
from django.db import IntegrityError
from .models import AddUser
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


#use api

def movies_page(request):
    return render(request, 'movies.html')