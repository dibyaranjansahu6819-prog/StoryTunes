from .language import detect_language
from .keywords import extract_keywords
from .emotion import detect_emotion


class StoryAI:

    EMOTION_MAP = {
        "positive": "Love",
        "negative": "Sad",
        "motivation": "Motivation",
    }

    @staticmethod
    def analyze(text):

        language = detect_language(text)

        emotion_result = detect_emotion(text)

        detected_emotion = emotion_result["emotion"]

        emotion = StoryAI.EMOTION_MAP.get(
            detected_emotion,
            detected_emotion,
        )

        keywords = extract_keywords(text)

        return {
            "language": language,
            "emotion": emotion,
            "keywords": keywords,
        }