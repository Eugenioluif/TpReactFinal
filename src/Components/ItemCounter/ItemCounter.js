import { useState } from "react"
import './ItemCounter.css'

const ItemCounter = ({stock = 0, initial = 1, onAdd}) =>{
    const [quantity, setQuantity] = useState (initial)

    const increment = () => {
        if(quantity < stock) {
        setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return (
        <div>
            <div>
                <button onClick={decrement} className='SumaResta'>-</button>
                <button onClick={increment} className='SumaResta'>+</button>
                <h2>Cantidad: {quantity}</h2>
            </div>
            <div>
                <button onClick={() => onAdd(quantity)} className='BtnAgregarCarro'>Agregar al Carrito</button>
            </div>
        </div>
        
        
    )
}

export default ItemCounter;
