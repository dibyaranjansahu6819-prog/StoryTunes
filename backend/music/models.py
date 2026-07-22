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

    album = models.CharField(
        max_length=200,
        blank=True
    )

    release_year = models.PositiveIntegerField(
        blank=True,
        null=True
    )

    duration = models.PositiveIntegerField(
        help_text="Duration in seconds"
    )

    mood = models.CharField(
        max_length=100
    )

    spotify_url = models.URLField(
        blank=True,
        null=True
    )

    youtube_url = models.URLField(
        blank=True,
        null=True
    )

    youtube_video_id = models.CharField(
        max_length=20,
        blank=True,
        help_text="Example: dQw4w9WgXcQ"
    )

    album_cover = models.URLField(
        blank=True,
        null=True
    )

    popularity = models.IntegerField(
        default=50
    )

    is_active = models.BooleanField(
        default=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-popularity", "title"]

    def __str__(self):
        return self.title


class Playlist(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    story = models.ForeignKey(
        "stories.Story",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )

    title = models.CharField(
        max_length=200
    )

    songs = models.ManyToManyField(
        Song
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.title
class ListeningHistory(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="listening_history"
    )

    song = models.ForeignKey(
        Song,
        on_delete=models.CASCADE,
        related_name="history"
    )

    listened_at = models.DateTimeField(
        auto_now_add=True
    )

    duration_played = models.PositiveIntegerField(
        default=0,
        help_text="Seconds listened"
    )

    def __str__(self):
        return f"{self.user.username} - {self.song.title}"