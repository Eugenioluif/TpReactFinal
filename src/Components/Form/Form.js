import CompInput from '../Input/Input';
import { useState } from "react";
import {Formulario,MensajeError,Boton,MensajeExito} from './elementosFormulario'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Form = () => {

    const [nombre,cambiarNombre] = useState({campo:'', valido:null });
    const [apellido,cambiarApellido] = useState({campo:'', valido:null });
    const [email1,cambiarEmail1] = useState({campo:'', valido:null });
    const [email2,cambiarEmail2] = useState({campo:'', valido:null });
    const [formularioValido, cambiarFormularioValido] = useState(null);


    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
      apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const validarEmails = () => {
      if(email1.campo.length > 0){
        if(email1.campo !== email2.campo){
          cambiarEmail1((prevState) => {
            return {...prevState, valido: 'false'}
          });
        } else {
          cambiarEmail2((prevState) => {
            return {...prevState, valido: 'true'}
          });
        }
      }
    }

    const onSubmit = (e) => {
      e.preventDefault();
  
      if(
        nombre.valido === 'true' &&
        apellido.valido === 'true' &&
        email2.valido === 'true' &&
        email1.valido === 'true'  
      )
        {
        cambiarFormularioValido(true);
  
      } else {
        cambiarFormularioValido(false);
      }
    }

  
  return (
    
    <Formulario action="" onSubmit={onSubmit}>
      <CompInput
          estado={nombre}
          cambiarEstado={cambiarNombre}
          placeholder='Ingrese Nombre'
          type='text'
          name='nombre'
          leyendaError='Debe completar el Nombre y no debe incluir números'
          expresionRegular={expresiones.nombre}
      />

      <CompInput
          estado={apellido}
          cambiarEstado={cambiarApellido}
          placeholder='Ingrese Nombre'
          type='text'
          name='apellido'
          leyendaError='Debe completar el Apellido y no debe incluir números'
          expresionRegular={expresiones.apellido}
      />
      
      
      <CompInput
          estado={email1}
          cambiarEstado={cambiarEmail1}
          placeholder='Ingrese Email'
          type='text'
          name='email1'
          leyendaError='Debe completar el Email'
          expresionRegular={expresiones.correo}
      />


      <CompInput
          estado={email2}
          cambiarEstado={cambiarEmail2}
          placeholder='Ingrese Email'
          type='text'
          name='email2'
          leyendaError='Debe validar el Email'
          expresionRegular={expresiones.correo}
          funcion={validarEmails}

      />
      {formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
        <Boton type="submit">Validar Datos</Boton>
				{formularioValido === true && <MensajeExito>Validado exitosamente!</MensajeExito>}

    </Formulario>
  );  

}

 export default Form;