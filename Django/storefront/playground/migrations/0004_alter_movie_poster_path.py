# Generated by Django 5.0.3 on 2024-03-28 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0003_movie'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='poster_path',
            field=models.CharField(max_length=500),
        ),
    ]
