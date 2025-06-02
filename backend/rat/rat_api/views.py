from django.shortcuts import render
from .models import RemoteTool
from django.http import JsonResponse
from django.http import HttpResponse
 
def get_remote_tools(request):
    try:
        tools = RemoteTool.objects.values('ip_address', 'os_name', 'status')
        data = list(tools)
        return JsonResponse(data, safe=False, status=200)
    except Exception as e:
        return JsonResponse(
            {"error": "Failed to retrieve data. Please try again later."},
            status=500
        )

def test_view(request):
    return HttpResponse("OK")