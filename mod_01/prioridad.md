```html
<!doctype html>
<html>
	<head>
		<meta charset="utf­8">
		<title>Herencia</title>
		<style>
			#caja .cabecera h1 {color:red;} 		/*= 0111*/
			#caja header h1 {color:yellow;}			/*= 0102*/
			.cabecera h1 {color:green;}					/*= 0011*/
			header h1 {color:pink;}							/*= 0002*/
			h1 {color:purple;}									/*= 0001*/
		</style>
	</head>
	<body>
		<div id="caja">
			<header class="cabecera">
				<h1 style="color: black;">Cabecera: header</h1>
			</header>
		</div>
	</body>
</html>
```

### Explicación

A - Estilo inline (dentro de un elemento HTML).
B - Número de ID's
C - Número de clases
D - Número de marcas HTML

> style="color: black"								= 1000
> \#caja .cabecera h1 {color:red;} 		= 0111
> \#caja header h1 {color:yellow;}		= 0102
> .cabecera h1 {color:green;}					= 0011
> header h1 {color:pink;}							= 0002
> h1 {color:purple;}									= 0001

**El ganador es el Negro 1000**
