from .models import Game

def get_listgame():
    listgame = Game.objects.all().values()
    return listgame