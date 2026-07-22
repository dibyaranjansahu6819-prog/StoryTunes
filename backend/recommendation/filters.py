from music.models import Song


class SongFilters:

    @staticmethod
    def apply(data):

        queryset = Song.objects.all()

        if data.get("language"):
            queryset = queryset.filter(
                language__name__iexact=data["language"]
            )

        if data.get("genre"):
            queryset = queryset.filter(
                genre__name__iexact=data["genre"]
            )

        if data.get("singer"):
            queryset = queryset.filter(
                singer__name__icontains=data["singer"]
            )

        if data.get("emotion"):
            queryset = queryset.filter(
                mood__icontains=data["emotion"]
            )

        return queryset