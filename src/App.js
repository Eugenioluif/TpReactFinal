import './App.css';
import ListContainer from './Components/ListContainer/ListContainer';
import NavBar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/context'
import ScrollToTop from "react-scroll-to-top";
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Checkout/Checkout';

function App() {
 
  return (
    <div className='App'>
      
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ListContainer/>} />
          <Route path='/category/:categoryid' element={<ListContainer/>}/>
          <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='*' element= {<h1> 404 PAGE NOT FOUND </h1>}/>
        </Routes> 
      </BrowserRouter>
      </CartContextProvider>
      <ScrollToTop smooth color="#000" />
      
    </div>
  );
}

export default App;
