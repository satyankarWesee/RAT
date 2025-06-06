from django.urls import path
from . import views

urlpatterns = [
    path('system-ips/', views.system_ips, name='system_ips'),
    path('system-ips/<str:ip_address>/', views.system_ip_detail, name='system_ip_detail'),
]
# urlpatterns = [
#     path('test/', views.test_view),
# ]