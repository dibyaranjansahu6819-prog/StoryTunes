from django.db import models
from django.conf import settings


class RecommendationHistory(models.Model):

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="recommendations"
    )

    story = models.ForeignKey(
        "stories.Story",
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    prompt = models.CharField(
        max_length=300,
        blank=True
    )

    detected_emotion = models.CharField(
        max_length=100,
        blank=True
    )

    detected_language = models.CharField(
        max_length=100,
        blank=True
    )

    detected_keywords = models.JSONField(
        default=list,
        blank=True
    )

    playlist = models.ForeignKey(
        "music.Playlist",
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.user.username} - {self.detected_emotion}"