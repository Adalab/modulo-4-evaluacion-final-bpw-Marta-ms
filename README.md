# Bandas de música internacionales favoritas 🎸​🎙️​

Esta es una API que contiene información sobre bandas de música internacionales. Como se trata de una API de música favorita, podrás comprobarla, añadir el nuevo grupo que hayas descubierto y eliminar el que ya no te guste.

## Tecnologías utilizadas 👩🏻‍💻

    - Nodo.js
    - banco de trabajo mysql
    - cartero

## ¿Cómo utilizar la API?

Clona este repositorio:
git clone + https://github.com/Adalab/modulo-4-evaluacion-final-bpw-Marta-ms.git

Dependencias que debes tener antes de usar esta API:

**npm install**

cors
express JS
dotenv

## Mostrar todas las bandas de música

Método: GET
Utilice la ruta: http://localhost:5001/api/music

## Mostrar banda elegida

Método: GET
Utilice la ruta: http://localhost:5001/api/music/:id

## Agregar una nueva banda favorita

Método: POST
Utilice la ruta: http://localhost:5001/api/music
Información importante: Para poder añadir una nueva banda debes introducir esta estructura del body:
{
"name": "The Smiths",
"country": "United Kingdom",
"genre": "Rock"
}

## Modificar porque ese ya no es el nombre de la banda

Método: PUT
Utilice la ruta: http://localhost:5001/api/music/:id
introducir esta estructura del body:
{
"name": "The Smiths",
"country": "United Kingdom",
"genre": "Alternative Rock"
}

## Borrar porque ya no me gusta esa música.

Método: DELETE
Utilice la ruta: http://localhost:5001/api/music/:id
