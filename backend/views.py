from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Destinos
from .forms import DestinosForm, DestinosFormConfirmar
# from django.contrib.auth.decorators import login_required


# from django.contrib.auth import authenticate

# Create your views here.
# @login_required
def inicio(request):
    return render(request, 'paginas/inicio.html')

# @login_required
def destinos(request):
    destinos = Destinos.objects.all()
    return render(request, 'destinos/grid.html', {'destinos': destinos})


# @login_required
def nuevo(request):
    formulario = DestinosForm(request.POST or None, request.FILES or None)
    if formulario.is_valid():
        formulario.save()
        return redirect('destinosurl')
    return render(request, 'destinos/new.html', {'formulario':formulario})

def editar(request, id):
    destino = Destinos.objects.get(id=id)
    formulario = DestinosForm(request.POST or None, request.FILES or None, instance=destino)

    if formulario.is_valid() and request.POST:
       formulario.save()    
       return redirect('destinosurl') 
    return render(request, 'destinos/edit.html', {'formulario':formulario })

def baja(request, id):
    destino = Destinos.objects.get(id=id)
    destino.delete()
    return redirect('destinosurl')

def bajaConfirmar(request, id):
    destino = Destinos.objects.get(id=id)
    formulario = DestinosFormConfirmar(request.POST or None, request.FILES or None, instance=destino)

    if formulario.is_valid() and request.POST:
        destino.delete()
        return redirect('destinosurl') 
    return render(request, 'destinos/delete.html', {'formulario':formulario })

def previewdestinos(request):
    destinos = Destinos.objects.all()
    return render(request, 'destinos/previewdestinos.html', {'destinos': destinos})    
    # return render(request, 'destinos/previewdestinos.html')  