import './Button.css';
import {NavLink} from 'react-router-dom';

const Button = () => {
    return(
        <div className='contenedorBotonera' >
            <NavLink className={({isActive})=> isActive ? 'Activado' : 'Botonera'} to={`category/Nafta`}>Nafta</NavLink>
            <NavLink className={({isActive})=> isActive ? 'Activado' : 'Botonera'} to={`category/Gasoil`} >Gasoil</NavLink>
            <NavLink className={({isActive})=> isActive ? 'Activado' : 'Botonera'} to={`category/GNC`}>GNC</NavLink>
        </div>
        
    )
}

export default Button;