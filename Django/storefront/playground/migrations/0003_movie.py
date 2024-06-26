# Generated by Django 5.0.3 on 2024-03-28 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('playground', '0002_alter_adduser_email'),
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('overview', models.TextField()),
                ('release_date', models.DateField()),
                ('poster_path', models.CharField(max_length=255)),
            ],
        ),
    ]
