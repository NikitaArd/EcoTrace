from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def learn_more(request):
    return render(request, 'learn-more.html')