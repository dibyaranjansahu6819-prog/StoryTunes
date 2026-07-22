import re

STOPWORDS = {
    "the", "a", "an", "and", "or", "but", "if", "to", "of",
    "in", "on", "at", "for", "with", "is", "are", "was",
    "were", "be", "been", "being", "i", "you", "he", "she",
    "it", "we", "they", "my", "your", "our", "their"
}


def extract_keywords(text):
    words = re.findall(r"\b[a-zA-Z]{3,}\b", text.lower())

    keywords = []

    for word in words:
        if word not in STOPWORDS and word not in keywords:
            keywords.append(word)

    return keywords