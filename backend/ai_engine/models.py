from django.db import models
from stories.models import Story


class StoryAnalysis(models.Model):

    story = models.OneToOneField(
        Story,
        on_delete=models.CASCADE,
        related_name="analysis"
    )

    detected_language = models.CharField(
        max_length=30,
        blank=True
    )

    dominant_emotion = models.CharField(
        max_length=50,
        blank=True
    )

    detected_genre = models.CharField(
        max_length=100,
        blank=True
    )

    keywords = models.JSONField(
        default=list
    )

    timeline = models.JSONField(
        default=list
    )

    analyzed = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.story.title