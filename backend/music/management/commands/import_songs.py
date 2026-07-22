import csv

from django.core.management.base import BaseCommand

from music.models import (
    Song,
    Singer,
    Genre,
    Language,
)


class Command(BaseCommand):

    help = "Import songs from CSV"

    def add_arguments(self, parser):
        parser.add_argument("csv_file", type=str)

    def handle(self, *args, **options):

        csv_file = options["csv_file"]

        with open(csv_file, newline="", encoding="utf-8") as file:

            reader = csv.DictReader(file)

            count = 0

            for row in reader:

                singer, _ = Singer.objects.get_or_create(
                    name=row["singer"]
                )

                genre, _ = Genre.objects.get_or_create(
                    name=row["genre"]
                )

                language, _ = Language.objects.get_or_create(
                    name=row["language"]
                )

                Song.objects.get_or_create(

                    title=row["title"],

                    defaults={

                        "singer": singer,

                        "genre": genre,

                        "language": language,

                        "album": row["album"],

                        "duration": int(row["duration"]),

                        "mood": row["mood"],

                        "youtube_video_id": row["youtube_video_id"],

                        "album_cover": row["album_cover"],

                        "popularity": int(row["popularity"]),

                    },
                )

                count += 1

        self.stdout.write(

            self.style.SUCCESS(

                f"{count} songs imported successfully."

            )

        )