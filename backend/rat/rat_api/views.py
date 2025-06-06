from django.shortcuts import render
from .models import RemoteTool, SystemAudit
from django.http import JsonResponse
from django.http import HttpResponse
 
    
def system_ips(request):
    try:
        tools = SystemAudit.objects.values('ip_address')
        data = list(tools)
        return JsonResponse(data, safe=False, status=200)
    except Exception as e:
        return JsonResponse(
            {"error": "Failed to retrieve data. Please try again later."},
            status=500
        )
    
def system_ip_detail(request, ip_address):
    try:
        tool = SystemAudit.objects.filter(ip_address=ip_address).values().first()
        if tool:
            return JsonResponse(tool, safe=False, status=200)
        else:
            return JsonResponse(
                {"error": f"No data found for IP address {ip_address}"},
                status=404
            )
    except Exception as e:
        return JsonResponse(
            {"error": "Failed to retrieve data. Please try again later."},
            status=500
        )

    