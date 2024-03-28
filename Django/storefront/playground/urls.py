from django.urls import path
from . import views

#URLConf
urlpatterns = [
    path('signup/', views.sign_up, name='sign_up'),
    path('login/', views.user_login, name='user_login'),
    path('index/', views.mainpage, name='mainpage'),
    path('games/', views.game_page, name='game_page'),
    path('movies/', views.movies_page, name='movies_page'),

]