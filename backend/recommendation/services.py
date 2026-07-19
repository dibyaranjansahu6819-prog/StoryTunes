from ai_engine.services import StoryAI
from .engine import RecommendationEngine


class PlaylistService:

    @staticmethod
    def generate(story):

        analysis = StoryAI.analyze(story.content)

        songs = RecommendationEngine.recommend(analysis)

        return songs