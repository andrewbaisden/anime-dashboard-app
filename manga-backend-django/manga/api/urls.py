from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AnimeViewSet, AnimeDetailsViewSet, JoinedTablesView


router = DefaultRouter()
router.register(r"anime", AnimeViewSet)
router.register(r"anime-details", AnimeDetailsViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("joinedtables/", JoinedTablesView.as_view(), name="joined-tables"),
]
