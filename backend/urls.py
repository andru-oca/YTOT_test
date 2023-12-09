from django.urls import path, include
# from django.contrib.auth.views import logout_then_login, login
# from django.contrib.auth import authenticate, login
from . import views


urlpatterns = [
    path("", views.inicio, name="iniciourl"),
    path("destinos/", views.destinos, name="destinosurl"),
    path("destinos/new/", views.nuevo, name="newsurl"),
    path("destinos/delete/<int:id>", views.bajaConfirmar, name="deletesurl"),
    path("destinos/update/<int:id>", views.editar, name="updatesurl"),
    path("previewdestinos/", views.previewdestinos, name="previewdestinos"),

    # path("accounts/", include("django.contrib.auth.urls")),
    # path("", login, {"template_name": "login.html"}, name="login"),
]
