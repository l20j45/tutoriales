
```ad-info
icon: bootstrap
title: sobresescribiendo algunas partes de el framework
~~~sass

// Reescribir colores de bootstrap
$negro : #000000;
$blanco: #ffffff;
$morado: #a435f0;
$gris: #f8f9fb;
$grisOscuro : #6a6f73;
$naranja: #b4690e;

//Tipógrafia
$fuente-headings: 'Kaisei HarunoUmi',
serif;
$fuente-Textos: Arial,
Helvetica,
sans-serif;

//Sobre escritura de variables de boostrap
$headings-font-family: $fuente-headings;
$headings-font-weight: 700;
$h2-font-size:3rem;
$h3-font-size:2.6rem;

//Sobre escritura de colores

$secondary:$naranja;
$success: $morado;
$light: $gris;
$dark:$negro;

//Formularios
$input-border-color: $dark;
$input-border-radius:1rem;
// enlaces
$nav-link-color:$grisOscuro;
$nav-link-hover-color:$dark;
$nav-link-font-weight: 700;
$nav-link-font-size: .9rem;


//Botones

$btn-border-radius: 0;
$btn-font-weight:700;

//cards

$card-spacer-x:0;
$card-border-radius:0;
$card-border-width:0;

// habilitar css-grid

$enable-cssgrid:true;

// $primary: $verde;
// $secondary: $gris;
// $headings-font-family: 'Poppins',
// sans-serif;
// $headings-font-weight: 700;
// $font-family-sans-serif: 'Poppins',
// sans-serif;
// $font-size-root: 62.5%;
// $spacer:5rem;
// $font-size-base: 1.8rem;
// $h2-font-size:3.6rem;
// $h3-font-size:3rem;
// modificador del diplay


//Mixins


// importar bootstrap
@import '../../node_modules/bootstrap/scss/bootstrap.scss';

~~~

```

esta es la estructura de como tengo esta parte

![](https://i.imgur.com/FXdwNS7.png)

este es el archivo _custom y se llama asi

```ad-info
icon: bootstrap 
title: llamada del archivo custmo
~~~sass
@use '../custom'as *;
~~~

```

