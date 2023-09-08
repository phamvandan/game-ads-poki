# from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .services import *
import random
from django.http import JsonResponse

# Create your views here.
def index(request, subpath):
    list_game = get_listgame()

    all_game = [subset for subset in list_game]
    game = get_subpath_html_name(subpath)
    if game is not None:
        template = loader.get_template("game-site.html")
        context = {
            'title': game[0]['title'],
            'source': game[0]['source'],
            'image': game[0]['picture'],
            'name': game[0]['name'],
            'description': game[0]['description'],
            'html_name': game[0]['html_name'],
            "a": random.sample(all_game, 1)[0],
            "b": random.sample(all_game, 1)[0],
            "relate_game": random.sample(all_game, 55)
        }
        return HttpResponse(template.render(context))  
    else:
        return HttpResponse("Error")  
    
def search_game(request):
    search_term = request.GET.get("search_term", "")
    print(search_term)

    if request.method == "GET":
        
        search_game = search_listgame(search_term)
        data = list(search_game)
        return JsonResponse({"search_game": data})