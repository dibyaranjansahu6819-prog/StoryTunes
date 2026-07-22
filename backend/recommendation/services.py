from ai_engine.services import StoryAI
from .engine import RecommendationEngine
from .models import RecommendationHistory

from music.models import Playlist
from accounts.models import Profile


class RecommendationService:

    @staticmethod
    def generate(user, data):

        mode = data["mode"]
        input_text = ""

        if mode == "story":
            input_text = data.get("story", "")
            analysis = StoryAI.analyze(input_text)
            data.update(analysis)

        elif mode == "prompt":
            input_text = data.get("prompt", "")
            analysis = StoryAI.analyze(input_text)
            data.update(analysis)

        playlist_songs = RecommendationEngine.recommend(data)

        # Create a playlist for this recommendation
        playlist = Playlist.objects.create(
            user=user,
            title=f"{mode.title()} Recommendation"
        )

        playlist.songs.set(playlist_songs)

        # Save recommendation history
        RecommendationHistory.objects.create(
            user=user,
            prompt=input_text,
            detected_emotion=data.get("emotion", ""),
            detected_language=data.get("language", ""),
            detected_keywords=data.get("keywords", []),
            playlist=playlist,
        )

        # Update profile statistics
        profile = Profile.objects.get(user=user)
        profile.total_recommendations += 1
        profile.save()

        return playlist_songs

    @staticmethod
    def generate_public(data):

        mode = data["mode"]

        if mode == "story":
            analysis = StoryAI.analyze(data.get("story", ""))
            data.update(analysis)

        elif mode == "prompt":
            analysis = StoryAI.analyze(data.get("prompt", ""))
            data.update(analysis)

        return RecommendationEngine.recommend(data)