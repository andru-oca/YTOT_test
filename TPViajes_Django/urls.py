"""
URL configuration for TPViajes_Django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
from django.conf  import settings
from django.contrib.staticfiles.urls import static



from rest_framework.documentation import include_docs_urls

from .views import Home, DestinosViajes, Ofertas, Asistencia, Actividades, Buscado, Contacto, Staff, Terminos, Defensa, Bariloche

from  usuarios.views import Login


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', Home.as_view(),name="index"),
    path('destinos/', DestinosViajes.as_view(),name="destinos"),
    path('ofertas/', Ofertas.as_view(),name="ofertasurl"),
    path('asistencia/', Asistencia.as_view(),name="asistenciaurl"),
    path('actividades/', Actividades.as_view(),name="actividadesurl"),
    path('buscado/', Buscado.as_view(),name="buscadourl"),
    path('contacto/', Contacto.as_view(),name="contactourl"),
    path('staff/', Staff.as_view(),name="staffurl"),
    path('terminos/', Terminos.as_view(),name="terminosurl"),
    path('defensa/', Defensa.as_view(),name="defensaurl"),
    path('bariloche/', Bariloche.as_view(),name="barilocheurl"),
    path('api/', include('api.urls')),
    path('docs/', include_docs_urls(title='API Doc')),
    path('backend/', include('backend.urls')),
    path("accounts/login/", Login.as_view(),name="login"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

