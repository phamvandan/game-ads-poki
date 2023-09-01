from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from .services import *
import random
# Create your views here.
def index(request):
    template = loader.get_template('index.html')   
    # list_game = get_listgame()

    # all_game = [subset for subset in list_game]
    # context = {
    #     "best_game": random.sample(all_game, 20),
    #     "editor_game": random.sample(all_game, 20),
    #     "exclusive" : random.sample(all_game, 6),
    #     "footer_game" : list_game[1:6],

    # }
    # return HttpResponse(template.render(context))  
    return HttpResponse(template.render())

def listgame(request):
    print(get_listgame())
    return HttpResponse(get_listgame())