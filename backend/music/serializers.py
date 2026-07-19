from rest_framework import serializers
from .models import Song


class SongSerializer(serializers.ModelSerializer):

    singer = serializers.StringRelatedField()
    genre = serializers.StringRelatedField()
    language = serializers.StringRelatedField()

    class Meta:
        model = Song
        fields = "__all__"