from django.urls import path
from .views import SongListView
from .history_views import ListeningHistoryAPIView
from .favorite_views import FavoriteAPIView

urlpatterns = [

    path(
        "songs/",
        SongListView.as_view(),
        name="songs",
    ),
    path(
    "history/",
    ListeningHistoryAPIView.as_view(),
    name="listening-history",
),
path(
    "favorites/",
    FavoriteAPIView.as_view(),
    name="favorites",
),
]