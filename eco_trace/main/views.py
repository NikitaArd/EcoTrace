from django.shortcuts import render


def index(request):
    # TODO: May be interesting to add popover with tips or interesting information about CO2 emissions to buttons. User hover the Start Quiz button after that popover shows tip or interesting info.
    return render(request, 'index.html')

def learn_more(request):
    return render(request, 'learn-more.html')