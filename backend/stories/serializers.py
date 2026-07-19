from rest_framework import serializers
from .models import Story


class StorySerializer(serializers.ModelSerializer):

    author = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = Story
        fields = "__all__"