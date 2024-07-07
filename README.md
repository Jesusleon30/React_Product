## Pasos para poder subir imagenes en local

Instalamos pillos

```jsx
pip install Pillow
```

Dentro de mi core.urls, colocamos

```python
# Configuración para servir archivos de medios durante el desarrollo
from django.conf import settings
from django.conf.urls.static import static
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

Creo mi modelo:

```python
from django.db import models

# Create your models here.
class ProductoModel (models.Model):
   nombre = models.CharField(max_length=100)
   precio = models.IntegerField()
   image = models.ImageField(upload_to="productos/", blank=True, null=True)
```

Actualizo mi serializer, para que me devuelva la ruta completa

```python
class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductoModel
        fields = '__all__'

        def get_photo_url(self, obj):
            request = self.context.get('request')
            photo_url = obj.fingerprint.url
            return request.build_absolute_uri(photo_url)
```

Ahora en todas mis vistas que quiera que se me devuelva el serializer con la url, uso lo siguiente

```python
# Lo nuevo que añadimos es el context={'request': req}
ProductoSerializer(data=req.data, context={'request': req})
```