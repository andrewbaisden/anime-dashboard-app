from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets
from .models import Anime, AnimeDetails
from .serializers import AnimeSerializer, AnimeDetailsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db import connection


class AnimeViewSet(viewsets.ModelViewSet):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer


class AnimeDetailsViewSet(viewsets.ModelViewSet):
    queryset = AnimeDetails.objects.all()
    serializer_class = AnimeDetailsSerializer


class JoinedTablesView(APIView):
    def get(self, request):
        try:
            with connection.cursor() as cursor:
                cursor.execute("""
                SELECT * FROM api_anime
                INNER JOIN api_animedetails ON api_anime.anime_id = api_animedetails.anime_id;
                """)
                columns = [col[0] for col in cursor.description]
                data = [dict(zip(columns, row)) for row in cursor.fetchall()]
                return Response(data)

        except OperationalError as e:
            # Log the exception or handle it appropriately
            return Response({"error": f"Database error: {e}"}, status=500)
