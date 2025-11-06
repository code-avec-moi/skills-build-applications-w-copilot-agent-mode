"""octofit_tracker URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os
from django.contrib import admin
from django.urls import path, include
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .views import router

CODESPACE_NAME = os.environ.get('CODESPACE_NAME')
def make_url(component):
    if CODESPACE_NAME:
        return f"https://{CODESPACE_NAME}-8000.app.github.dev/api/{component}/"
    return f"http://localhost:8000/api/{component}/"

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': make_url('users'),
        'teams': make_url('teams'),
        'activities': make_url('activities'),
        'leaderboard': make_url('leaderboard'),
        'workouts': make_url('workouts'),
    })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', api_root),
]

