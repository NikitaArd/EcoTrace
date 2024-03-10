from django.urls import path

from .views import (
    index,
    learn_more
)

app_name = 'main'
urlpatterns = [
    path('', index, name='index'),
    path('learn-more/', learn_more, name='learn-more'),
]
