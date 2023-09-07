from django.urls import path

from . import views
from . import game_site

urlpatterns = [
    path('', views.index, name='index'),
    path('search', views.search_game, name='search_game'),
    path('listgame', views.listgame, name='listgame'),
    path('games/<str:subpath>', game_site.index, name='games_index'),
    # path('search', search_views.index, name='search_index')

    ]