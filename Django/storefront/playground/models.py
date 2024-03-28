from django.db import models

# Create your models here.
class AddUser(models.Model):
    username = models.CharField(max_length=150)
    email = models.EmailField(max_length=255)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.username
    

class Movie(models.Model):
    title = models.CharField(max_length=255)
    overview = models.TextField()
    release_date = models.DateField()
    poster_path = models.CharField(max_length=1000)