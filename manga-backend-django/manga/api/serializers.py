from rest_framework import serializers
from .models import Anime, AnimeDetails


class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = '__all__'


class AnimeDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnimeDetails
        fields = '__all__'
