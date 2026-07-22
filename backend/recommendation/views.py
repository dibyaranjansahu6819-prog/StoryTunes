from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from .serializers import RecommendationSerializer
from .services import RecommendationService
from music.serializers import SongSerializer


class PublicRecommendationAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = RecommendationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        playlist = RecommendationService.generate_public(
            serializer.validated_data
        )

        return Response(
            SongSerializer(playlist, many=True).data
        )


class RecommendationAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = RecommendationSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        playlist = RecommendationService.generate(
            request.user,
            serializer.validated_data
        )

        print("========== PLAYLIST ==========")
        print("Count:", len(playlist))
        for song in playlist:
            print(song.id, song.title)
        print("==============================")

        return Response(
            SongSerializer(playlist, many=True).data
        )