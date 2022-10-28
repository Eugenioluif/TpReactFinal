import {Link} from 'react-router-dom';
import './ItemDetail.css';
import ItemCounter from '../ItemCounter/ItemCounter'
import { CartContext } from '../../context/context'
import { useState, useContext } from 'react'

const ItemDetail = ({id,name,img,category,price,stock,detail}) => {

    const [quantityToAdd, setQuantityToAdd] = useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityToAdd(quantity)

        const productToAdd = {
            id, name, price, quantity
        }

        addItem(productToAdd)
  
    }

    return(
        <div className='contenedorDetalles'>
            <article className='CardItem'>
                <header className='CategDetail'>
                    <h2 className='Nombr'>{name}</h2>
                    <h2 className='Categ'>Categoria: {category}</h2>
                    <h2 className='Deta'>Detalles: {detail}</h2>
                </header>
                <div className='parent'>
                        <img src={img} alt={name}/> 
                </div>                
                <section>
                    <p className='pric'> Precio: $ {price}</p>
                </section>
                <footer>
                {
                quantityToAdd === 0 ? (<ItemCounter onAdd={handleOnAdd} stock={stock} />) 
                :
                (<Link className='botondeCompra' to='/cart'>Finalizar Compra</Link>)}
                </footer>
            </article>
            
        </div>
    )
}

export default ItemDetail