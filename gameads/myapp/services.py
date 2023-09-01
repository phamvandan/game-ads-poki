from .models import Game

def get_listgame():
    listgame = Game.objects.all().values()
    print(listgame)
    return listgame