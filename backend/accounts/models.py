from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass


class Profile(models.Model):

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        related_name="profile"
    )

    favorite_songs = models.ManyToManyField(
        "music.Song",
        blank=True,
        related_name="liked_by"
    )

    favorite_playlists = models.ManyToManyField(
        "music.Playlist",
        blank=True,
        related_name="liked_by"
    )

    total_recommendations = models.PositiveIntegerField(default=0)

    total_songs_played = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.user.username