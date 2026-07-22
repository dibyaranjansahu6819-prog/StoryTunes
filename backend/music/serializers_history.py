from rest_framework import serializers

from .models import ListeningHistory
from .serializers import SongSerializer


class ListeningHistorySerializer(serializers.ModelSerializer):

    song = SongSerializer(read_only=True)

    class Meta:
        model = ListeningHistory
        fields = [
            "id",
            "song",
            "listened_at",
            "duration_played",
        ]