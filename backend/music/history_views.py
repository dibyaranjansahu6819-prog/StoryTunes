from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import ListeningHistory
from .serializers import ListeningHistorySerializer


class ListeningHistoryAPIView(APIView):

    permission_classes = [IsAuthenticated]

    def get(self, request):

        history = ListeningHistory.objects.filter(
            user=request.user
        ).order_by("-listened_at")

        serializer = ListeningHistorySerializer(
            history,
            many=True
        )

        return Response(serializer.data)