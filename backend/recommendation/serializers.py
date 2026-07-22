from rest_framework import serializers


class RecommendationSerializer(serializers.Serializer):

    MODE_CHOICES = [
        ("story", "Story"),
        ("prompt", "Prompt"),
        ("emotion", "Emotion"),
        ("genre", "Genre"),
        ("language", "Language"),
        ("singer", "Singer"),
        ("mixed", "Mixed"),
    ]

    mode = serializers.ChoiceField(
        choices=MODE_CHOICES
    )

    story = serializers.CharField(
        required=False,
        allow_blank=True
    )

    prompt = serializers.CharField(
        required=False,
        allow_blank=True
    )

    emotion = serializers.CharField(
        required=False,
        allow_blank=True
    )

    singer = serializers.CharField(
        required=False,
        allow_blank=True
    )

    genre = serializers.CharField(
        required=False,
        allow_blank=True
    )

    language = serializers.CharField(
        required=False,
        allow_blank=True
    )