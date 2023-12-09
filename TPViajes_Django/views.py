from django.shortcuts import render
from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = "index.html"

class DestinosViajes(TemplateView):
    template_name = "destinos.html"    

class Ofertas(TemplateView):
    template_name = "ofertas.html"        

class Asistencia(TemplateView):
    template_name = "asistencia.html"      

class Actividades(TemplateView):
    template_name = "actividades.html"      

class Buscado(TemplateView):
    template_name = "buscado.html"      

class Contacto(TemplateView):
    template_name = "contacto.html"       

class Staff(TemplateView):
    template_name = "quienessomos.html"   

class Terminos(TemplateView):
    template_name = "terminos.html"       

class Defensa(TemplateView):
    template_name = "leydefensa.html"       

class Bariloche(TemplateView):
    template_name = "bariloche.html"      

