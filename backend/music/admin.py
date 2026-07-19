from django.contrib import admin
from .models import Genre, Language, Singer, Song, Playlist

admin.site.register(Genre)
admin.site.register(Language)
admin.site.register(Singer)
admin.site.register(Song)
admin.site.register(Playlist)