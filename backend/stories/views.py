from rest_framework import generics, permissions
from .models import Story
from .serializers import StorySerializer


class StoryListCreateView(generics.ListCreateAPIView):

    serializer_class = StorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Story.objects.filter(author=self.request.user)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class StoryDetailView(generics.RetrieveUpdateDestroyAPIView):

    serializer_class = StorySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Story.objects.filter(author=self.request.user)