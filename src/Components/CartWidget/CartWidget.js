import cat from './assets/carrito.png'
import './CartWidget.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import { CartContext } from '../../context/context'

const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity() 
    return (
    
        <Link to='/cart' className='cuadrocarrito'>
            <div className='BotonCarro'>
                <div>
                    <img src={cat} alt='cat'/>
                </div>
                <div className='number'>
                    {totalQuantity}
                </div>
            </div>
            
        </Link>
    
    );
}

export default CartWidget