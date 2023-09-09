from django.shortcuts import render
import random
# Create your views here.
from django.http import HttpResponse
from django.template import loader
from django.http import JsonResponse
from .services import *
import random
import json
# Create your views here.
def index(request):
    template = loader.get_template('index.html')   
    list_game = get_listgame()
    image_path = '/static/logo.png'
    logo = '/static/logo.ico'

    json_bone = """
    {{
        "id": {id},
        "developer": "{developer}",
        "mobile": true,
        "title": "{title}",
        "type": "game",
        "image": "{path}",
        "url": "/games/{html_name}",
        "slug": "{slug}",
        "name": "{name}"
    }}"""
    json_games = []
    big_list = []
    game_to_show = []
    leng = len(list_game)
    for i in range (1,146):
        while True:
            game = list_game[random.randint(1,leng - 1)]
            if game in game_to_show:
                continue
            game_to_show.append(game)
            break
    randombig = []
    for i in range(1,30):
        randombig.append(random.randint(1,145))
    counter = 0
    for game in game_to_show:
        json_game = json_bone.format(id=game["id"],developer='gamehtml5',title=game['title'],path=game['picture'],html_name=game['html_name'],slug=game['html_name'],name=game['name'])
        if counter in randombig:
            big_list.append(json.loads(json_game))
        else:
            json_games.append(json.loads(json_game))
        counter = counter + 1
    context = {
        "games": json_games,
        "1" : big_list[0],
        "2" : big_list[1],
        "3" : big_list[2],
        "4" : big_list[3],
        "5" : big_list[4],
        "6" : big_list[5],
        "7" : big_list[6],
        "8" : big_list[7],
        "9" : big_list[8],
        "10" : big_list[9],
        "11" : big_list[10],
        "12" : big_list[11],
        "13" : big_list[12],
        "14" : big_list[13],
        "15" : big_list[14],
        "16" : big_list[15],
        "17" : big_list[16],
        "image_path" : image_path,
        "logo" : logo
    }
    return HttpResponse(template.render(context))  

def listgame(request):
    print(get_listgame())
    return HttpResponse(get_listgame())
def search_game(request):
    search_term = request.GET.get("search_term", "")
    print(search_term)

    if request.method == "GET":
        
        search_game = search_listgame(search_term)
        data = list(search_game)
        return JsonResponse({"search_game": data})