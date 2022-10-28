import './listcontainer.css';
import ItemList from '../ItemList/ItemList'
import { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import {getDocs, collection, where , query} from 'firebase/firestore'
import {db} from '../../Service/Firebase/index'


const ListContainer = () =>{
  const [products,setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const {categoryid} = useParams ();


  useEffect (() => {
    setLoading(true)

      const collectionRef = categoryid 
                  ? query(collection(db, 'products'), where('category', '==', categoryid))
                  : collection(db, 'products')
    

      getDocs(collectionRef).then (response =>{
        
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
          setProducts (productsAdapted)
      })
                
        .finally(() => {
        setLoading(false)
        })

    }, [categoryid])

    if(loading && true) {
      return <h1>Cargando productos...</h1>
    }

    return (
      <div className='CartaProductos'>
        <ItemList products={products}/>      
      </div>
    )

  }


export default ListContainer;