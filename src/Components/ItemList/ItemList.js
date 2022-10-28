import './ItemList.css';
import { memo } from 'react'
import Item from '../Item/Item'


const ItemList = ({products}) => {
    return(
    <div>
        <div>
        <h1 className='titulo'>Compra y Venta de Autos Usados</h1>
        </div>
        <div>
            <div className='elementos'>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        </div>
        
    </div>
    
    )
}

export default memo(ItemList)
