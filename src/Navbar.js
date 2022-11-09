import './estilosNavbar.css'
export function Navbar({nombre, ciudad, direccion}){
    var estilos = {background:'#000', padding: '20px', color:'#fff'}
    
    return <>
        <ul>
            <li style={estilos}>
                Hola {nombre} de {ciudad} en la colionia {direccion.colonia?direccion.colonia:"N/A"}, en la casa con el número #{direccion.noCasa?direccion.noCasa:"N/A"}
            </li>
            <li className='estilasho'>
                Hola {nombre} de {ciudad} en la colionia {direccion.colonia?direccion.colonia:"N/A"}, en la casa con el número #{direccion.noCasa?direccion.noCasa:"N/A"}
            </li>
        </ul>
        </>
}