import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import '../ItemList/ItemList.css';

const Item = ({id, name, img, price}) => {
    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={img} className='imagenes'/>
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                    <Card.Text> {price}</Card.Text>
                    <Link to={`/detail/${id}`} className='botonCompra'>DETALLE</Link>
                </Card.Body>
            </Card> 
        </div>

            
    )}

export default Item;