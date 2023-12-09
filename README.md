
![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/image-4.png)


 ![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/web.png)



# Proyecto.
- [Proyecto](#proyecto)
  - [Acerca del Proyecto.](#acerca-del-proyecto)
  - [Características.](#características)
  - [Carpetas del Proyecto.](#carpetas-del-proyecto)
  - [Páginas del Proyecto.](#páginas-del-proyecto)
  - [Diseño del Logo, Icono y favicon.](#diseño-del-logo-icono-y-favicon)
  - [Menú del Sitio.](#menú-del-sitio)
  - [Footer](#footer)
    - [WhatsApp](#whatsapp)
  - [Iframe.](#iframe)
    - [Cotización Dolar.](#cotización-dolar)
    - [Ley de Defensa al Consumidor.](#ley-de-defensa-al-consumidor)
    - [Google Maps, Oficinas.](#google-maps-oficinas)
  - [FontAwesome, Google Fonts.](#fontawesome-google-fonts)
  - [Código js para el Funcionamiento Carousel Ofertas.](#código-js-para-el-funcionamiento-carousel-ofertas)
  - [Formulario de Contacto.](#formulario-de-contacto)
  - [Código de Validación de Formulario de Contacto.](#código-de-validación-de-formulario-de-contacto)
  - [Código para Consumir API del Convertidor de Monedas.](#código-para-consumir-api-del-convertidor-de-monedas)
  - [Banderas - HTTP API](#banderas---http-api)
  - [Recursos Utilizados.](#recursos-utilizados)
  - [Metodología de Trabajo.](#metodología-de-trabajo)
  - [Vista de Páginas del Proyecto.](#vista-de-páginas-del-proyecto)
      - [Index.html](#indexhtml)
      - [Bariloche.html](#barilochehtml)
      - [Actividades.html](#actividadeshtml)
      - [Asistencia.html](#asistenciahtml)
      - [Buscado.html](#buscadohtml)
      - [Contacto.html](#contactohtml)
      - [Leydefensa.html](#leydefensahtml)
      - [Destinos.html](#destinoshtml)
      - [Ofertas.html](#ofertashtml)
      - [Quienessomos.html](#quienessomoshtml)
      - [Terminos.html](#terminoshtml)
  - [Integrantes del Grupo.](#integrantes-del-grupo)
  - [Detalle de Tareas.](#detalle-de-tareas)
          - [Detalles aportados por cada integrante.](#detalles-aportados-por-cada-integrante)



##  Acerca del Proyecto.
Apliación Web para Agencia de Viajes y Turismo. 

Desarrollo realizado como Trabajo Práctico para el Curso Codo a Codo 2023 - Desarrollo Full Stack Python. (PYTHON-FRONT END 2023 2)


##   Características. 

Desarrollado en páginas HTML, con Framework de CSS y Javascript. No se Utilizó ningún Famework como Bootstrap, Materialize,Tailwind.

Para la Maquetación de la estructura HTML se utilizó CSS Grid y Flexbox.


<p align="center"> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> 
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>  
 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>  
 </p>



##  Carpetas del Proyecto.
    Viajes/
          assets/
              css/
                ... Archivos.css
              ico/
                ... Archivos.ico
              js/
                ... Archivos Javascript.js

          img/
            asistencia/ 
            banner/
            bariloche/
            form/
            otrasOfertas/
            Quienes/
            ... Imágenes del proyecto

    ...páginas.html


           
## Páginas del Proyecto. 

    Viajes/
           index.html/
                bariloche.html
           actividades.html
           asistencia.html
           buscado.html           
           contacto.html
           leydefensa.html
           destinos.html
           ofertas.html
           quienessomos.html
           terminos.html

## Diseño del Logo, Icono y favicon. 

[![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/looka.png)](https://looka.com/)

Para el diseño del Logo e Icono del Sitio, de utilizó el recurso de la Empresa Looka, que brinda una gran variedad de opciones de diseño para la gestión de Logo Brand y demás accesorios. (Ver Recursos).
Para la utilización hay que registrarse.


## Menú del Sitio. 

 ![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/menu.png)

- <i class="fa fa-fw fa-home"></i> [Home (index.html)](#indexhtml)
- <i class="fa fa-fw fa-globe"></i> [Destinos (destinos.html)](#destinoshtml)
- <i class="fa fa-fw fa-dollar"></i>[Ofertas (ofertas.html)](#ofertashtml)
- <i class="fa fa-fw fa-solid fa-suitcase"></i> [Asistencia al Viajero (asistencia.html)](#asistenciahtml)
- <i class="fa fa-solid fa-car"></i> [Actividades (actividades.html)](#actividadeshtml)
- <i class="fa fa-fw fa-regular fa-eye nav-icon"></i> [Lo más Buscado (buscado.html)](#buscadohtml)
- <i class="fa fa-fw fa-regular fa-address-book nav-icon"></i> [Contacto (contacto.html)](#buscadohtml)
- <i class="fa fa-fw fa-solid fa-user-plus"></i> [Staff (quienessomos.html)](#quienessomoshtml)
- <i class="fa fa-fw fa-brands fa-whatsapp nav-icon-ws"></i> [Whatsapp](#whatsapp)
  
```javascript
newmenu.js
const toggleMenuOpen = () => document.body.classList.toggle("open");
```
## Footer 

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/footer.png)

    Opciones a Redes
  - <i class="fa fa-facebook-square"></i> Facebook
  - <i class="fa fa-twitter-square fa"></i> Twitter
  - <i class="fa fa-youtube-square"></i> YouTube
  - <i class="fa fa-brands fa-instagram"></i> Instagram
  - Links web
    - [Quienes Somos](staff.html)
    - [Contactenos](contacto.html)
    - [Términos y Condiciones](terminos.html)
    - [Ley de Defens del Consumidor](leydefensa.html)
    - [Data Digital](https://www.afip.gob.ar/960/formulario-960/)
    - [Google Maps]()
  

### WhatsApp  

```HTML
<a href="https://api.whatsapp.com/send?phone=5491143804444&text=Hola%20,te%20asesoramos%20por
                  %20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal." target="_blank">
<i class="fa fa-fw fa-brands fa-whatsapp"></i>
<span>WhatsApp</span>
```
## Iframe.
### Cotización Dolar.

Se utilizó a API gratuita que brinda la pàgina "Dolar Hoy".

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/dolar.png)

````HTML
<iframe
        style="width:320px;height:260px;border-radius:10px;box-shadow:2px 4px 4px rgb(0 0 0 / 25%);display:flex;justify-content:center;border:1px solid #bcbcbc"
        src="https://dolarhoy.com/i/cotizaciones/dolar-blue" frameborder="0">
</iframe>
````




### Ley de Defensa al Consumidor.

````HTML
<iframe class="defensa" src="http://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/638/texact.htm"
            frameborder="0">
</iframe>
````
### Google Maps, Oficinas. 

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/google.png)

**
````HTML

<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.513227816231!2d-58.381184823463755!3d-34.59118145683763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccab148ca3c39%3A0x8d4a567e30e56289!2sAv.%20del%20Libertador%20336%2C%20C1001ABQ%20CABA!5e0!3m2!1ses!2sar!4v1695333476270!5m2!1ses!2sar"
        width="300" height="225" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
</iframe>
````       
## FontAwesome, Google Fonts. 

<!-- - [Font Awesome](https://fontawesome.com/search) -->
  [![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/font-1.png)]((https://fontawesome.com/search))
```javascript

<scrip src="https://kit.fontawesome.com/7e5b2d153f.js" crossorigin="anonymous"></script>
```    
- [![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/googlefonts.png)](https://fonts.google.com/)
```CSS
@import url("https://fonts.googleapis.com/css2?family=Public+Sans&display=swap");
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:400");

```

## Código js para el Funcionamiento Carousel Ofertas.

```javascript
$(function(){
  // DOM Ready - do your stuff 
  $('.flickity-carousel').flickity({
    // options
    cellAlign: 'center',
    wrapAround: true
  });
});
```

## Formulario de Contacto.

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/contacto.png)


## Código de Validación de Formulario de Contacto.

```javascript

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresionRegular = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    comentario: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

const envioExitoso = {
    nombre: true,
    apellido: true,
    email: true,
    telefono: true,
    comentario: true
}

const validacion = (e) =>{
    switch (e.target.name){
        case 'nombre':
            // validacionTotal(expresionRegular.nombre, e.target, 'nombre');
            if(expresionRegular.nombre.test(e.target.value)){
                document.getElementById('wrap-nombre').classList.remove('wrap-formulario-incorrecto');
                document.getElementById('wrap-nombre').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-nombre .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-nombre').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-nombre').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-nombre .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
      
        break;

        case 'apellido':
            if(expresionRegular.apellido.test(e.target.value)){
                document.getElementById('wrap-apellido').classList.remove('wrap-formulario-incorrecto');
                document.getElementById('wrap-apellido').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-apellido .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-apellido').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-apellido').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-apellido .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
        
        break;

        case 'email':
            if(expresionRegular.email.test(e.target.value)){
                document.getElementById('wrap-email').classList.remove('wrap-formulario-incorrecto');
                // document.getElementById('wrap-apelido').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-email .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-email').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-email').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-email .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
            
        break;
        case 'telefono':
            if(expresionRegular.telefono.test(e.target.value)){
                document.getElementById('wrap-telefono').classList.remove('wrap-formulario-incorrecto');
                document.getElementById('wrap-telefono').classList.add('wrap-formulario-correcto');
                document.querySelector('#wrap-telefono .formulario-error').classList.remove('formulario-error-activo');
                envioExitoso[e.target.name] = true;
            }else {
                document.getElementById('wrap-telefono').classList.add('wrap-formulario-incorrecto');
                document.getElementById('wrap-telefono').classList.remove('wrap-formulario-correcto');
                document.querySelector('#wrap-telefono .formulario-error').classList.add('formulario-error-activo');
                envioExitoso[e.target.name] = false;
            }
            
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validacion);
    input.addEventListener('blur', validacion);

    });

// Evitar que se envie el formulario antes de ser completado
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');
    if(envioExitoso.nombre && envioExitoso.apellido && envioExitoso.email && envioExitoso.telefono && envioExitoso.comentario && terminos.checked ){
        formulario.reset();

        document.getElementById('mensaje-exito').classList.add('mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('mensaje-exito').classList.remove('mensaje-exito-activo');
        }, 4000);
    
    }else{
        document.getElementById('formulario-mensaje').classList.add('formulario-mensaje-activo');
        setTimeout(() => {
            document.getElementById('formulario-mensaje').classList.remove('formulario-mensaje-activo');
        }, 3000)
    }
});

```

## Código para Consumir API del Convertidor de Monedas. 

[![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/exchange.png)](https://www.exchangerate-api.com/)


Exchange Rate API, Tipos de cambio globales
Las 161 monedas principales utilizadas en 200 países.


Solicitudes de conversión de pares
Documentación para el punto final Pair ExchangeRate-API.

Guía de uso
Para utilizar Conversión de a Pares, simplemente proceder como se detalla a continuación y luego envíe una solicitud GET.

• Reemplazar `API-KEY` por la clave API que se obtiene al registrarse en la web ExchangeRate.

• Reemplazar `USD` por el código que desea utilizar como moneda base.

• Reemplazar `ARS` por el código que desea utilizar como moneda de destino.

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/convert.png)

````HTML

GET https://v6.exchangerate-api.com/v6/{API-KEY}/pair/USD/ARS
````

```json

Ejemplo de Respuesta jSon.

{
	"result": "success",
	"documentation": "https://www.exchangerate-api.com/docs",
	"terms_of_use": "https://www.exchangerate-api.com/terms",
	"time_last_update_unix": 1585267200,
	"time_last_update_utc": "Fri, 27 Mar 2020 00:00:00 +0000",
	"time_next_update_unix": 1585270800,
	"time_next_update_utc": "Sat, 28 Mar 2020 01:00:00 +0000",
	"base_code": "USD",
	"target_code": "ARS",
	"conversion_rate": 280.80
}
```

Código desarrollado para Consumir API, ExchangeRate-API (convert.js)


````javascript

const lista = document.querySelectorAll("form select"),
monedaOrigen = document.querySelector(".desde select"),
monedaDestino = document.querySelector(".destino select"),
clickBtn = document.querySelector("form button");

for (let i = 0; i < lista.length; i++) {
    // La lista de paises esta en paises.js
    for(let codigoMoneda in listaPaises){
        // USD = monedaOrigen por default y ARS = monedaDestino por default
        let selected = i == 0 ? codigoMoneda == "USD" ? "selected" : "" : codigoMoneda == "ARS" ? "selected" : "";
        // Crea tag con el código de moneda texto y valor
        let optionTag = `<option value="${codigoMoneda}" ${selected}>${codigoMoneda}</option>`;
        // Inserta Tag
        lista[i].insertAdjacentHTML("beforeend", optionTag);
    }
    lista[i].addEventListener("change", e =>{
        buscaBanderas(e.target); // Carga Bandera
    });
}

function buscaBanderas(element){
    for(let codigoPais in listaPaises){
        if(codigoPais == element.value){ 
            let imgTag = element.parentElement.querySelector("img"); 
            imgTag.src = `https://flagcdn.com/48x36/${listaPaises[codigoPais].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    buscaCambio();
});

clickBtn.addEventListener("click", e =>{
    e.preventDefault(); // Para evitar que se envie el formulario
    buscaCambio();
});

const banderaIcon = document.querySelector("form .icon");
banderaIcon.addEventListener("click", ()=>{
    // Cambia monedas y Banderas de origen a destino y viceversa
    let tempCode = monedaOrigen.value; 
    monedaOrigen.value = monedaDestino.value; 
    monedaDestino.value = tempCode; 
    buscaBanderas(monedaOrigen); 
    buscaBanderas(monedaDestino); 
    buscaCambio(); 
})

function buscaCambio(){
    // Obtiene el Valor del Cambio
    const importe = document.querySelector("form input");
    const tipoCambioTxt = document.querySelector("form .cambio");
    let importeMoneda = importe.value;
    // Valor por Default = 1
    if(importeMoneda == "" || importeMoneda == "0"){
        importe.value = "1";
        importeMoneda = 1;
    }
    tipoCambioTxt.innerText = "Obteniendo cambio...";
    let url = `https://v6.exchangerate-api.com/v6/{API-KEY}/latest/${monedaOrigen.value}`;
    // Obtiene la respuesta de la api y pasa a jSon 
    fetch(url).then(response => response.json()).then(result =>{
        let coefCambio = result.conversion_rates[monedaDestino.value];
        let totalCalculado = (importeMoneda * coefCambio).toFixed(2); // calcula Importe Total, Coeficiente por Importe
        tipoCambioTxt.innerText = `${importeMoneda} ${monedaOrigen.value} = ${totalCalculado} ${monedaDestino.value}`;
    }).catch(() =>{ // Captura errores de la Api
        tipoCambioTxt.innerText = "Error, Hubo un Problema!!!";
    });
}
````

paises.js

````javascript
let listaPaises = {
                    "AED" : "AE",
                    "AFN" : "AF",
                    "XCD" : "AG",
                    "ALL" : "AL",
                    "AMD" : "AM",
                    "ANG" : "AN",
                    "AOA" : "AO",
                    "AQD" : "AQ",
                    ....
                    ....
} 
````

## Banderas - HTTP API

Imágenes de banderas de países a través de CDN (HTTP API).

Imágenes de banderas de países para incrustar en su sitio web o descargar mediante programación para mantener actualizadas las banderas de sus proyectos.


```HTML
<!-- Insertar em Web -->
<img
  src="https://flagcdn.com/16x12/ar.png"
  srcset="https://flagcdn.com/32x24/ar.png 2x,
    https://flagcdn.com/48x36/ar.png 3x"
  width="16"
  height="12"
  alt="Argentina">
```

```HTML
<!-- Descargar -->
https://flagcdn.com/16x12/ar.png

```

## Recursos Utilizados.

- [Banderas de Paises - HTTP API](https://flagpedia.net/download/api)

- [Códigos de Colores HTML](https://htmlcolorcodes.com/es/)
- [Conceptos Básicos de flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- [CSS Grid Layout](https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout)
- [CSS](https://www.w3schools.com/css/default.asp)
- [Documentación Oficial Codo a Codo 2023](https://aulasvirtuales.bue.edu.ar/)
- [Dolar Hoy](https://dolarhoy.com/cotizaciones).
- [Exchange Rate API](https://www.exchangerate-api.com/)
- [Expresiones Regulares.](https://regexr.com/)
- [Flags of the World](https://flagpedia.net/)
- [Flickity](https://flickity.metafizzy.co)
- [Google Maps](https://developers.google.com/maps/get-started?hl=es-419)
- [HTML](https://www.w3schools.com/html/default.asp)

- [JavaScript](https://www.w3schools.com/js/default.asp)

- [Javascript - Manz.dev](https://lenguajejs.com/javascript/)
 - [jQuery](https://blog.jquery.com/2020/05/04/jquery-3-5-1-released-fixing-a-regression/)
- [LenguajeHTML.com](https://lenguajehtml.com/html/)
- [Link WhatsApp](https://help.sirena.app/es/articles/3380678-como-crear-un-link-con-tu-numero-de-whatsapp)
- [Looka - Logo Maker](https://looka.com/)
- [Owl Carousel v2.3.4](https://github.com/OwlCarousel2/)


  
## Metodología de Trabajo.
- Armado de Grupo de WhatsApp para mantenernos en contacto.
- Propuestas de Temas del Sitio Web a Desarrollar( Viajes, Turismo, Vinoteca, Bar).
- Tema Votado = Viajes y Turismo.
- En primera instancia, se maquetó el sitio utilizando CSS Grid y Flexbox.

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/maqueta.png)

- Una vez definida la  estructura, comenzamos a definir las opciones/items del Sitio y se hizo en primera instancia el menú de navegación y el footer y el main de pa página index.html
<br>  
- Para que cada uno de los integrantes pudiera trabajar, se confeccionó  página base donde se incluia el menú y el pie de página (ambos por iframe, para poder hacer cambios en caso de ser nacerario, ara la entrega final se remplazaron los iframe del menú y del footer por el código correspondiente).
<br>  
- Mediante WhatsApp y reuniones por meet, coordinamos el avance del proyecto y cada uno de los integrantes se propuso para cada parte del mismo.
<br>  

- Creamos una Cuenta en GitHub, para que los integrantes suban el código y el responsable del proyecto, se encargaba se juntarlo para ir generando la versión final.
<br>  
- Cada vez que se armaba la versión, se compartía por GitHub y también se podía visualizar en el Hosting.
<br>  
- Para que el desarrollo y mantenimiento futuro sea más amigable, decidimos que las nuevas Clases CSS que se debían definir para las nuevas páginas, se incluyeran en un nuevo archivo. Originalmente se creo main.css y styles.css (que después incluirían a todas).
<br>
- Cada vez que se incorporaba in item nuevo al Sitio, se mostraba y se hacían las observaciones correspondientes (Diseño, colores, formas, etc.)
<br>


  
```CSS
@import url("./main.css");
@import url("./tarjetas.css");
@import url("./defensa.css");
@import url("./newfooter.css");
@import url("./star.css");
@import url("./actividades.css");
@import url("./monedas.css");
@import url("./quienes.css");
@import url("./lugares.css");
@import url("./asistencia.css");
@import url("./travel.css");
@import url("./ofertas.css");
@import url("./flickity.min.css");
@import url("./buscado.css");
@import url("./newmenu.css");
@import url("./destinos.css");
@import url("./contacto.css");
```

##  Vista de Páginas del Proyecto.

####  Index.html

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pageindex.png)

####  Bariloche.html 
![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/bariloche.png)

#### Actividades.html
![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pageactividades.png)

#### Asistencia.html
![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pageasistencia.png)

#### Buscado.html
![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pagebuscado.png)

#### Contacto.html
![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pagecontacto.png)

#### Leydefensa.html

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pagedefensa.png)

#### Destinos.html

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pagedestinos.png)

#### Ofertas.html

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pageofertas.png)

#### Quienessomos.html

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/staff.png)

#### Terminos.html

![Alt text](http://delgadojordan.com.ar/viajes/ReadmeImg/pageterminos.png)


## Integrantes del Grupo.
- Cintia C.
- María Regina M.
- Valeria M.
- Alejandro D.J.


## Detalle de Tareas.
###### Detalles aportados por cada integrante.

- Cintia:
- [Ofertas](#ofertashtml)
- <p style='text-align: justify;'> 
  Página con display-grid/grid-template para ordenar el contenido del main.
  Como inicio un título, el carrousel  con las ofertas y como cierre las tarjetas de ofertas con el mismo template de las definidas en el index, de forma tal de mantener una coherencia entre las páginas del sitio. </p>
    <br>
  <p style='text-align: justify;'>   
  En la versión mobile, se muetran las ofertas en columna, para una mejor visualización.
  En el Sidebar de la página, agregó información que explica el detalle de las ofertas, cada una con su título. </p>
  <br>
 

  Para el carrousel, usó la librería [Flickity](#recursos-utilizados), que a su vez utiliza [jQuery](#recursos-utilizados).

  <br>
  <p style='text-align: justify;'> 
  jQuery se consume desde 
 
  ````javascript
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script
    ````
   <p style='text-align: justify;'> 
  Flickity necesita respetar una estructura que consta de un elemento contenedor de todo el carousel (en este caso un div que tiene la clase “flickity-carousel”… y luego por cada slide del carousel otro div con la clase “carousel-cell”. 
  </p>
  <br>
 
  También utiliza un archivo javascript aparte [ofertasCarrousel.js](#código-js-para-el-funcionamiento-carousel-ofertas), que inicializa el carrousel. 
  <br>

  <p style='text-align: justify;'>
  Finalmente para las imágenes del carousel se utilizaron imágenes estableciéndolas como background-image, y para algunas promociones del carousel use imágenes diferentes para mobile y Tablet/desktop. 
  </p>
  <br>
    <p style='text-align: justify;'>
  Archivo de estilos asociado: ofertas.css
  </p>
  <hr> 
- María Regina
  <p style='text-align: justify;'>
  Se genera código de html y css con sus respectivas importaciones. Se adapta código responsive para plantilla elegida. 
  </p>
  <br>
- [Actividades](#actividadeshtml)
   <p style='text-align: justify;'>
  <b>Actividades:</b> a los contenedores del sidebar, se le modifica el tipo de fuente, se le aplican sombras, y aplicamos bordes y un fondo gradiente. 
  </p>
  <br>
  <p style='text-align: justify;'>
  Al main se le da la adaptación a la plantilla original según necesidades, adaptando fotos, fuentes, botones, márgenes, etc. 
  Se mantuvo el estilo de las tarjetas para dar coherencia entre las páginas del sitio.
  
  </p>
  <br>
  <p style='text-align: justify;'>
  Archivo de estilos asociado: actividades.css
  </p>
  <br>
- [Lo más Buscado](#banderas---http-api)


 
  <p style='text-align: justify;'>  
  <b>Lo más buscado</b>: en el sidebar hay contenedores con fotos, borde circulares acordes y un texto adaptado rotado, en el main se aplicaron fotos, transparencias, bordes circulares, sombras y una transformación de rotación sobre eje X y sobre eje Y para generar efecto. 
  </p>
  <br>
    <p style='text-align: justify;'>
  Archivo de estilos asociado: buscado.css
  </p>
<hr>

- Valeria
- [Contactenos](#contactohtml)

   <p style='text-align: justify;'>
  En primer lugar, me centré en la estructura que queria darle al formulario con sus respectivas validaciones. Para ello, consideré primordial que cada sección del formulario  estuviese dentro de un div con una clase, de modo que se pudieran aplicar validaciones en cada campo.
    </p>
  <br>
     <p style='text-align: justify;'>
  El formulario está compuesto por los siguientes campos: (nombre, apellido, email, teléfono), se incluyó un campo  a través de la etiqueta textarea en el que el usuario pueda escribir texto y dejar su opinión con respecto a la página web.  
  Cada uno de  los campos está estructurado de manera que se pueda arrojar un mensaje de error cada vez que el usuario lo complete de manera incorrecta. Esto gracias a una constante con expresiones regulares.
     <p style='text-align: justify;'>
       </p>
  <br>
  <p style='text-align: justify;'>
  Se aplicó pseudo-clases al botón para cambiarlo de color al posicionarse sobre el.
  El formulario está diseñado para que muestre un mensaje de error si se envía sin completer todos los campos, y un mensaje de envío exitoso cuando se complete de manera correcta. Dicho mensaje se encuentra oculto y solo se muestra al momento de ejecutar la validación.
  </p>
  <br>
  <p style='text-align: justify;'>
  Se utilizó flexbox, flex direction column  para posicionar los elementos debajo del otro. 
  </p>
  <br>
  <p style='text-align: justify;'>
  Archivo de estilos asociado: contacto.css

  Archivo Javascript asociado: [formulario.js](#código-de-validación-de-formulario-de-contacto)

  </p>
  <br>
- [Destinos](#destinoshtml)
 
  <p style='text-align: justify;'>
  Se utilizó una estrucctura de trajetas, las cuales están posicionadas a través de grid grid-template-colums: 1fr 1fr de modo que se coloque dos por cada fila.
  </p>
  <br>
  <p style='text-align: justify;'>
  Se aplicaron estilos css para adaptar el contenido de las tarjetas y un botón que muestra un cupón de descuento, cual posee una pseudo-clase y opacidad.
  </p>
  <br>
  <p style='text-align: justify;'>
  Archivo de estilos asociado: destinos.css
  </p>
  <hr>
- Alejandro.
- [Maqueta html]()
  <p style='text-align: justify;'>
  Diseño de la estructura base del sitio utilizando CSS Grid y Flexbox. Básicamente tiene un Header, Footer, Main, Sidebar Izquierdo y Sidebar Derecho.
  </p>
  <br>

  Diseño del Logo, Icono y favicon utilizando [Looko.](#diseño-del-logo-icono-y-favicon)
  <br>
  <p style='text-align: justify;'>
  Archivo de estilos asociado: main.css
  </p>
 
- [Menú](#menu-del-sitio)
  <p style='text-align: justify;'>
  Diseño de menú horizontal responsive.
  </p>
  <p style='text-align: justify;'>
  Archivo de estilos asociado: newmenu.css
  </p>
  
  Archivo jaavscript asociado: [newmenu.js](#menu-del-sitio)
  </p>
  <br>
- [Footer](#footer)
  <p style='text-align: justify;'>

  Diseño del footer responsive con Iframe [Google Maps](#google-maps-oficinas), y link a redes Sociales además de Link a [Contactenos](#contactohtml), [Términos y Condiciones](#terminoshtml), [Quienes Somos](#quienessomoshtml) y [Ley de Defensa al Consumidor](#ley-de-defensa-al-consumidor).
  </p>
  <p style='text-align: justify;'>
  Archivo de estilos asociado: newmenu.css
  </p>
  
  Archivo jaavscript asociado: [newmenu.js](#menu-del-sitio)
  </p>
  <br>  
- [Index](#indexhtml)
  <p style='text-align: justify;'>
   Diseño responsive de página index.html con el título de "Nuestras Recomendaciones".
   Diseño de tarjetas/promociones de Lugares turísticos.
   <br>  

   Archivo de estilos asociado: tarjetas.css, star.css, main.css
   <br> 

   En el Sidebar, se agregaron promociones y la API, [Exchange Rate API](#código-para-consumir-api-del-convertidor-de-monedas), Tipos de cambio globales.
   </p>
   <br>  

- [Exchange Rate API](#código-para-consumir-api-del-convertidor-de-monedas)   
   
   Diseño de Formulario para consumo de la API, [Función javascript](#código-para-consumir-api-del-convertidor-de-monedas)
  
    Archivo de estilos asociado: monedas.css
    Archivo Javascript asociado: convert.js
 <br>  

- [Iframe DolarHoy](#cotización-dolar)
  <br>  
- [Asistencia al viajero](#asistenciahtml)
  Página responsive con detalle de la asistencia en viaje y el sidebar, publicidad.
  Archivo de estilos asociado: asistencia.css
  <br>  
- [Quienes Somos](#quienessomoshtml)
  Página responsive con 2 carrousel que despliegan los integrantes del Staff.
  En el Sidebar, Fotos de las oficinas de la empresa.
  Archivo de estilos asociado: quienes.css, owl.carousel.min.css  
  
  Codigo Asociado al Carrousel, [Owl Carousel v2.3.4](https://github.com/OwlCarousel2/)

  ```Javascript
  <script>
    $(".slider").owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 1100, //2000ms = 2s;
      autoplayHoverPause: true,
      responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false,
            // loop:false
        }
    }      
    });
  </script>
  ```

- [Términos y condiciones](#terminoshtml)
  Página responsive, con texto relacionado con los términos y condiciones de los servicios prestados por la Empresa de Viajes y Turismo.
  En el Sidebar, hay publicidad. 
  <br>
  
  Archivo de estilos asociado: main.css
  <br>

- [Ley de Defensa al Consumidor](#ley-de-defensa-al-consumidor)
  Página con Iframe que muestra la Ley de defensa al Consumidor.
  En le Sidebar, publicidad.

  ```html
    <iframe class="defensa" src="http://servicios.infoleg.gob.ar/infolegInternet/anexos/0-4999/638/texact.htm"
            frameborder="0"></iframe>
  ```
   Archivo de estilos asociado: defensa.css  

- [Bariloche](#barilochehtml)
  Página responsive con galería de Fotos de Bariloche, vinculada con la página index.html
  En le Sidebar, publicidad.

   Archivo de estilos asociado: lugares.css    
  <br>
- Diseño, Armado y realización del Archivo README.
     