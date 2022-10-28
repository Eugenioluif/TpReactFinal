import { useState, useContext } from "react"
import { CartContext } from "../../context/context"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../Service/Firebase'
import  Form  from '../Form/Form'
import './Checkout.css'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer:  {
                    name: '',
                    apellido: '',
                    email: ''
                },
                items: cart,
                total
            }
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }

    return (
        <div className="CheckOut">
            <h1>Confirmación del Pedido</h1>
            <Form />
            <button onClick={createOrder} className='CrearPedido'>Crear Pedido</button>
        </div>   
    )
}

export default Checkout