from django.urls import path

from .views import (
    index,
    learn_more
)

urlpatterns = [
    path('', index, name='index'),
    path('learn-more/', learn_more, name='lear-more'),
]
