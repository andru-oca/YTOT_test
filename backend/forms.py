from django import forms
from .models import Destinos

class DestinosForm(forms.ModelForm):
    class Meta:
            model = Destinos
            fields = '__all__'


class DestinosFormConfirmar(forms.ModelForm):
    class Meta:
            model = Destinos
            fields = ['id', 'destino', 'detalle', 'imagen']     

      