from django.db import models
from django.conf import settings


class Genre(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Language(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Singer(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Song(models.Model):

    title = models.CharField(max_length=250)

    singer = models.ForeignKey(
        Singer,
        on_delete=models.CASCADE,
        related_name="songs"
    )

    genre = models.ForeignKey(
        Genre,
        on_delete=models.CASCADE,
        related_name="songs"
    )

    language = models.ForeignKey(
        Language,
        on_delete=models.CASCADE,
        related_name="songs"
    )

    duration = models.PositiveIntegerField()

    mood = models.CharField(max_length=100)

    spotify_url = models.URLField(
        blank=True,
        null=True
    )

    youtube_url = models.URLField(
        blank=True,
        null=True
    )

    album_cover = models.URLField(
        blank=True,
        null=True
    )

    popularity = models.IntegerField(
        default=0
    )

    def __str__(self):
        return self.title

class Playlist(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    story = models.ForeignKey(
        "stories.Story",
        on_delete=models.CASCADE
    )

    title = models.CharField(max_length=200)

    songs = models.ManyToManyField(Song)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title