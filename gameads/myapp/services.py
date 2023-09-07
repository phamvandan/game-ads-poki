from .models import Game

def get_listgame():
    listgame = Game.objects.all().values()
    return listgame

def get_subpath_html_name(subpath):
    print(subpath)
    game = Game.objects.filter(html_name=subpath).values()
    if game.count() == 1:
        return game
    return None
def search_listgame(query_param):
    if query_param != "":
        listgame = Game.objects.filter(name__icontains=query_param).values()
        return listgame
    return None
