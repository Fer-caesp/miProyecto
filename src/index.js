import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting} from "./Greeting";
import { Navbar } from "./Navbar";
const root = ReactDOM.createRoot(document.getElementById('root'));


/* la etiqueta vacia es  un fragment para no repetir el div en cada componente */
root.render(
    <> 
        {/* Los comentarios tipo JS deben ir entre llaves */}
        <Greeting/>
        <Navbar
            nombre={"Juan Marco"}
            ciudad = {"Monterrey"}
            direccion={{
                colonia : undefined,
                noCasa : undefined
            }}
        />
        <Navbar
            nombre={"Pepe Madero"}
            ciudad = {"Santa Catarina"}
            direccion={{
                colonia : "Pedro de alba",
                noCasa : 222
            }}
        />
    </>
);