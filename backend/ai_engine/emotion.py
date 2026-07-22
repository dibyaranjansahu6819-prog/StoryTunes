POSITIVE = {
    "happy",
    "joy",
    "love",
    "excited",
    "success",
    "win",
    "smile",
    "hope",
    "beautiful",
    "friend"
}

NEGATIVE = {
    "sad",
    "cry",
    "breakup",
    "pain",
    "lonely",
    "depressed",
    "hurt",
    "loss",
    "heartbroken"
}

MOTIVATION = {
    "dream",
    "goal",
    "fight",
    "strong",
    "motivation",
    "gym",
    "work",
    "achieve",
    "success"
}


def detect_emotion(text):
    text = text.lower()

    positive = sum(word in text for word in POSITIVE)
    negative = sum(word in text for word in NEGATIVE)
    motivation = sum(word in text for word in MOTIVATION)

    scores = {
        "positive": positive,
        "negative": negative,
        "motivation": motivation,
    }

    emotion = max(scores, key=scores.get)

    return {
        "emotion": emotion,
        "scores": scores,
    }