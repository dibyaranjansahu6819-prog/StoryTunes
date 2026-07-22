from django.urls import path
from .views import (
    RecommendationAPIView,
    PublicRecommendationAPIView,
)

urlpatterns = [
    path(
        "",
        RecommendationAPIView.as_view(),
        name="recommendation",
    ),

    path(
        "public/",
        PublicRecommendationAPIView.as_view(),
        name="public-recommendation",
    ),
]