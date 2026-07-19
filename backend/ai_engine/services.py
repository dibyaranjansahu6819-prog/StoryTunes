from .language import detect_language
from .keywords import extract_keywords
from .emotion import detect_emotion


class StoryAI:

    @staticmethod
    def analyze(text):

        language = detect_language(text)

        emotion = detect_emotion(text)

        keywords = extract_keywords(text)

        return {
            "language": language,
            "emotion": emotion,
            "keywords": keywords,
        }
        