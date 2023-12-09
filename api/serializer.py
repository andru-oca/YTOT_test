from rest_framework import serializers
from .models import Destinos


class DestinosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Destinos
        fields = '__all__'