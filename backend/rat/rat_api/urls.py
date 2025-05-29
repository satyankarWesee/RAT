from django.urls import path
from . import views

urlpatterns = [
    path('api/remote-tools/', views.get_remote_tools, name='get_remote_tools'),
]
