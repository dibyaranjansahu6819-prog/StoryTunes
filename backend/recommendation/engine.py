from music.models import Song


class RecommendationEngine:

    @staticmethod
    def recommend(analysis):

        language = analysis["language"]

        emotion = analysis["emotion"][0]["label"]

        queryset = Song.objects.filter(
            language__name__iexact=language,
            mood__icontains=emotion,
        )

        return queryset