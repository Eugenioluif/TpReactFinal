import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../Service/Firebase'

const ItemDetailContainer = ({setCart}) => {
    const [product,setProduct] = useState()

    const {productId} = useParams()
    

  useEffect (() => {
    const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data} 

            setProduct(productAdapted)})
  }, [productId])

    return(
        <div>
            <ItemDetail {...product}  setCart={setCart}/>
        </div>
    )

}

export default ItemDetailContainer