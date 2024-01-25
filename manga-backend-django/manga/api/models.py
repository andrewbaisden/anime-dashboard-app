from django.db import models


class Anime(models.Model):
    id = models.AutoField(primary_key=True)
    anime_id = models.CharField(max_length=10, null=True)
    anime_name = models.CharField(max_length=100, null=True)
    anime_release = models.CharField(max_length=10, null=True)

    def __str__(self):
        return self.anime_name


class AnimeDetails(models.Model):
    id = models.AutoField(primary_key=True)
    anime_id = models.CharField(max_length=10, null=True)
    anime_genre = models.CharField(max_length=50, null=True)
    anime_rating = models.IntegerField(null=True)

    def __str__(self):
        return self.anime_id
