from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Song, ListeningHistory
from .serializers import SongSerializer
from .serializers_history import ListeningHistorySerializer


class SongListView(generics.ListAPIView):

    queryset = Song.objects.all()

    serializer_class = SongSerializer


class ListeningHistoryListView(generics.ListAPIView):

    serializer_class = ListeningHistorySerializer

    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return (
            ListeningHistory.objects.filter(
                user=self.request.user
            )
            .select_related(
                "song",
                "song__singer",
                "song__genre",
                "song__language",
            )
            .order_by("-listened_at")
        )