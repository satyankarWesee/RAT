from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.get_remote_tools, name='get_remote_tools'),
]
# urlpatterns = [
#     path('test/', views.test_view),
# ]