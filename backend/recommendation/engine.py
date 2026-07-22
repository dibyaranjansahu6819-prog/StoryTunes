from .filters import SongFilters
from .ranking import SongRanking
from .playlist import PlaylistGenerator


class RecommendationEngine:

    @staticmethod
    def recommend(data):

        print("\n========== RECOMMENDATION DATA ==========")
        print(data)

        queryset = SongFilters.apply(data)

        print("\n========== FILTERED SONGS ==========")
        print("Count:", queryset.count())

        for song in queryset:
            print(song.title, "|", song.mood)

        ranked = SongRanking.rank(
            queryset,
            data,
        )

        print("\n========== RANKED SONGS ==========")
        print(ranked)

        playlist = PlaylistGenerator.create(
            ranked
        )

        print("\n========== FINAL PLAYLIST ==========")
        print("Count:", len(playlist))

        for song in playlist:
            print(song.title)

        print("===================================\n")

        return playlist