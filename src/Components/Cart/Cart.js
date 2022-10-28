import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/context'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'
import carrotriste from './assets/Carrito-triste.png'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <div className='NoItemsVisibles'>
                <h1 className='NoItems'>No hay items en el Carro</h1>
                <img src={carrotriste} alt='carrotriste'></img>
                <div>
                    <Link to='/' className='ButtonVolver'> Volver</Link>
                </div>
            </div>
        )
    }

    return (     
        <div className='PageCart'>
            <h1>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carro</button>
            <Link to='/checkout' className='ButtonCheck'>Checkout</Link>
        </div>
    )
}

export default Cart