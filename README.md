# Coderhouse Comisión 48650 React Js

## E-Commerce en React - Bersier Pablo Martín

Este proyecto es el avance del trabajo final de la cursada.

El proyecto utiliza react-bootstrap como framework de estilos.

También se utiliza react-router-dom para manejar las rutas.

A fines de ejemplo, el checkout permite generar un pdf de cada pedido, para lo cual se utiliza react-pdf

Los datos están alojados en documentos de Firebase/Firestore. Los mismos son Categories, Products y Orders.

***Instalar***

react-router-dom

react-bootrstrap

react-router-bootstrap

react-pdf
=========

Este proyecto es el trabajo final de la cursada del curso de React de Coderhouse.

El proyecto utiliza React-bootstrap para manejar los estilos gráficos y Firebase/Firestore para administrar los datos de Productos y Pedidos.

## Firebase / Firestore
*** products *** Contiene los datos de los productos {id, categoryId, title, description, img, price, stockBySize {S, M, L, XL} }
*** orders *** Contiene los datos de los pedidos {id, buyer: {name, phone, address, email}, items:{id, title, price, quantity, size}, date, total }
*** categories *** Contiene los datos de las categorías {id, name, description }


