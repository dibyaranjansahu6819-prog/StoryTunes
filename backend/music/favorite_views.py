from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from accounts.models import Profile
from .models import Song
from .serializers import SongSerializer


class FavoriteAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        profile = request.user.profile

        serializer = SongSerializer(
            profile.favorite_songs.all(),
            many=True
        )

        return Response(serializer.data)

    def post(self, request):

        song = Song.objects.get(
            id=request.data["song_id"]
        )

        profile = request.user.profile

        profile.favorite_songs.add(song)

        return Response(
            {
                "message": "Song added to favorites."
            }
        )

    def delete(self, request):

        song = Song.objects.get(
            id=request.data["song_id"]
        )

        profile = request.user.profile

        profile.favorite_songs.remove(song)

        return Response(
            {
                "message": "Song removed from favorites."
            }
        )