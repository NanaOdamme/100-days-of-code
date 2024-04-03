from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(['GET'])
def getData(request):
    games = [
        {'name': 'Final Frontier', 'year': 2013, 'link': 'https://www.crazygames.com/', 'image': '/static/images/final_frontier.jpg'},
        {'name': 'Space Odyssey', 'year': 2020, 'link': 'https://www.crazygames.com/', 'image': '/static/images/space_odyssey.jpg'},
        {'name': 'Galactic Quest', 'year': 2015, 'link': 'https://www.crazygames.com/', 'image': '/static/images/galactic_quest.jpg'},
        {'name': 'Flip', 'year': 2015, 'link': 'https://www.crazygames.com/', 'image': '/static/images/flip.jpg'},
        {'name': 'PinBall', 'year': 2024, 'link': 'https://www.crazygames.com/', 'image': '/static/images/pinball.jpg'},
        {'name': 'Puzzle Man', 'year': 2011, 'link': 'https://www.crazygames.com/', 'image': '/static/images/puzzle_man.jpg'},
    ]
    return Response(games)

