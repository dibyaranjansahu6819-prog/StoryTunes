from rest_framework import serializers
from .models import Song, ListeningHistory


class SongSerializer(serializers.ModelSerializer):

    singer = serializers.StringRelatedField()
    genre = serializers.StringRelatedField()
    language = serializers.StringRelatedField()

    class Meta:
        model = Song
        fields = "__all__"


class ListeningHistorySerializer(serializers.ModelSerializer):

    song = SongSerializer()

    class Meta:
        model = ListeningHistory
        fields = "__all__"