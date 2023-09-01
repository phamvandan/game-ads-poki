from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # path('games/<str:subpath>', games_views.index, name='games_index'),
    # path('search', search_views.index, name='search_index')

    ]