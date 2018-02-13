Modulo 3:
---

### JavaScript: sentencia, expresión, variable, función, objeto y DOM 


> Ampliar la siguiente aplicación Web (muestra la fecha y la hora):

```HTML
 <!DOCTYPE html><html>
<head>
  <title>Date</title>
  <meta charset="UTF-8">
</head>
<body>
  <h1 id="h1"></h1>
  <h2 id="h2">La fecha y la hora son:</h2>
  <div id="fecha"></div>

 <script type="text/javascript">
  var fecha = new Date();
  var msj;

  if      (fecha.getHours() < 7)  { msj = "Buenas noches";}
  else if (fecha.getHours() < 12) { msj = "Buenos días";}
  else if (fecha.getHours() < 21) { msj = "Buenas tardes";}
  else                                          { msj = "Buenas noches";}

  document.getElementById("h1").innerHTML    = msj;
  document.getElementById("fecha").innerHTML = fecha;
</script>
</body>
</html>
```

Incluyendo los siguientes elementos: 
 
1. El nombre de la persona que hace la entrega debajo del titulo `<h1>`
2. Un bloque `<div>` debajo de la fecha y la hora y las instrucciones JavaScript necesarias para que muestre en dicho bloque el contenido de las siguientes propiedades DOM  en líneas separadas, que comiencen por el nombre de la propiedad(es) mostrada(s):

	a. Contenido de innerHTML de elemento identificado por id="h2"
	b. Contenido de outerHTML de elemento identificado por id="h1"
	c. Contenido de de la propiedad global: location.href
	d. Contenido de de la propiedad global: location
	e. Contenido de de las propiedades globales: screen.width y screen.heigth

## Entrega:

El texto general está en fuente **Fira** y los párrafos de la _moraleja_ están con fuente **Roboto**.

- [Vista Previa](https://garciagarturo.github.io/moocHTML5/mod_03/fecha.html)

---

.
.
.
.
.
.

---

> **Arturo García**:
[mi LinkedIn](https://linkedin.com/in/garciagarturo)
/ [mi correo](http://www.google.com/recaptcha/mailhide/d?k=01EB2NAIZ_2uEkjscDfJ-bHw==&c=p_0f-7ykHrzq1gLxRsjytRf7dlTywPveTBibi7Svqi8=)
