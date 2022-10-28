import {Input ,IconoValidacion,LeyendaError} from '../Form/elementosFormulario'
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const CompInput = ({placeholder,type,leyendaError,name,expresionRegular,estado,cambiarEstado}) => {
  
  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value});
  }

  const validacion = () => {
    if (expresionRegular){
      if (expresionRegular.test(estado.campo)){
        cambiarEstado({...estado, valido: 'true'});
      }else {
        cambiarEstado({...estado, valido: 'false'});
      }
    }
  }

  return (
    <div>
      
        <Input 
            placeholder={placeholder} 
            type={type} 
            id={name} 
            value={estado.campo}
            onChange={onChange}
            onBlur={validacion}
            valido={estado.valido}
        />
        <IconoValidacion
          icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle}
          valido={estado.valido}
        />
        <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
    </div>
  )
}




 export default CompInput ;