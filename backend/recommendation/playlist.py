class PlaylistGenerator:

    @staticmethod
    def create(ranked_songs):

        playlist = []

        for item in ranked_songs[:20]:
            playlist.append(item["song"])

        return playlist