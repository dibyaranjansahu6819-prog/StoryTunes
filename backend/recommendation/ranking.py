class SongRanking:

    EMOTION_WEIGHT = 35
    KEYWORD_WEIGHT = 25
    LANGUAGE_WEIGHT = 15
    GENRE_WEIGHT = 10
    SINGER_WEIGHT = 10
    POPULARITY_WEIGHT = 5

    @classmethod
    def calculate_score(cls, song, data):

        score = 0

        # Emotion
        emotion = data.get("emotion")
        if emotion:
            if hasattr(song, "mood") and song.mood:
                if emotion.lower() in song.mood.lower():
                    score += cls.EMOTION_WEIGHT

        # Language
        language = data.get("language")
        if language:
            if hasattr(song, "language") and song.language:
                if song.language.name.lower() == language.lower():
                    score += cls.LANGUAGE_WEIGHT

        # Genre
        genre = data.get("genre")
        if genre:
            if hasattr(song, "genre") and song.genre:
                if song.genre.name.lower() == genre.lower():
                    score += cls.GENRE_WEIGHT

        # Singer
        singer = data.get("singer")
        if singer:
            if hasattr(song, "singer") and song.singer:
                if singer.lower() in song.singer.name.lower():
                    score += cls.SINGER_WEIGHT

        # Popularity
        if hasattr(song, "popularity"):
            score += min(song.popularity, 100) * (
                cls.POPULARITY_WEIGHT / 100
            )

        return score

    @classmethod
    def rank(cls, queryset, data):

        ranked = []

        for song in queryset:

            score = cls.calculate_score(song, data)

            ranked.append(
                {
                    "song": song,
                    "score": score,
                }
            )

        ranked.sort(
            key=lambda x: x["score"],
            reverse=True,
        )

        return ranked