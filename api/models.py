from django.db import models
from django.contrib import admin
from import_export import resources
from import_export.admin import ImportExportModelAdmin


# Create your models here


class Destinos(models.Model):
    id=models.AutoField(primary_key=True)
    destino = models.CharField(max_length=50, verbose_name="Destino")
    detalle = models.CharField(max_length=200,verbose_name="Detalle")
    premio = models.CharField(max_length=10,verbose_name="Premio")
    detalle_dias = models.CharField(max_length=50,verbose_name="Estadía")
    cobertura = models.CharField(max_length=20,verbose_name="Cobertura")
    imagen = models.ImageField(upload_to='imgDestinos/',verbose_name="Photo")
    
    class Meta:
        # Especifica el nombre de la tabla en la base de datos
        db_table = 'destinos'

    def __str__(self):
        return self.destino        
    
    def delete(self, using=None, keep_parents=False):
        # Borra el Archivo Físico (jpg del disco)
        self.imagen.delete(self.imagen.name)
        super().delete()


class DestinosResource(resources.ModelResource):
    class Meta:
        model = Destinos

        
class DestinosAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    search_fields = ['destino']
    list_display = ('destino', 'detalle', 'premio', 'detalle_dias', 'cobertura', 'imagen')
    resource_class = DestinosResource


