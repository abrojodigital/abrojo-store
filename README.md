# Coderhouse Comisión 48650 React Js

## E-Commerce en React - Bersier Pablo Martín

*Video resumen del funcionamiento de Abrojo-Store*****[![Video resumen Abrojo-Store](https://img.youtube.com/vi/tqFvd7_1Op0/0.jpg)](https://www.youtube.com/watch?v=tqFvd7_1Op0)

Este proyecto es el trabajo final de la cursada.

El proyecto utiliza react-bootstrap como framework de estilos.

También se utiliza react-router-dom para manejar las rutas.

A fines de ejemplo, el checkout permite generar un pdf de cada pedido, para lo cual se utiliza react-pdf

***Es necesario instalar***

* react-router-dom
* react-bootrstrap
* react-router-bootstrap
* react-pdfreact-pdf
* react-firebase

Este proyecto es el trabajo final de la cursada del curso de React de Coderhouse.

El proyecto utiliza React-bootstrap para manejar los estilos gráficos y Firebase/Firestore para administrar los datos de Productos y Pedidos.

## Firebase / Firestore

*Los datos están alojados en documentos de Firebase/Firestore.

###### products

Contiene los datos de los productos

{ id, categoryId, title, description, img, price, stockBySize:{S, M, L, XL} }

###### orders

Contiene los datos de los pedidos

{ id, buyer: {name, phone, address, email}, items:{id, title, price, quantity, size}, date, total }

###### categories

Contiene los datos de las categorías { id, name, description }

---

Para acceder al Checkout del carrito será necesario loguearse al sistema. A tal fin, se implementa un context que utiliza Firebase Authentication.
