
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Head from './Component/Navbar/Head';
import Gallery from './Pages/Gallery';
// import Product from '../Product'
import { useState } from 'react';
import Table from './Pages/Table';
import Address from './Pages/Address';
import PageNotFound from './Pages/PageNotFound';

function App() {
  const [cart, setCart] = useState([])
  // const [war, setWar] = useState(false)
  const addToCart = (data) => {
    let isPresent = false
    cart.forEach((product) => {
      if (product.id === data.id)
        isPresent = true
    })
    if (isPresent) {
      // setWar(true)
      alert('item is alreay present in your cart')
      return
    }
    else {
      alert('item added sucessfully')
    }
    setCart([...cart ,{...data , quantity:1} ])
  }


  
  return (
    <div >

      <BrowserRouter>
        <Head size={cart.length} login='login'></Head>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>

          <Route path='/menu' element={<Menu addToCart={addToCart} cart={cart}></Menu>} ></Route>
          <Route path='/cart' element={<Cart cart={cart} ></Cart>}></Route>
          <Route path='/about' element={<About cart={cart}></About>}></Route>
          <Route path='/contact' element={<Contact cart={cart}></Contact>}></Route>
          <Route path='/Gallery' element={<Gallery cart={cart}></Gallery>}></Route>
          <Route path='/login' element={<Login cart={cart}></Login>}></Route>
          <Route path='/signup' element={<Signup></Signup>}></Route>
          <Route path='/table' element={<Table cart={cart}></Table>}></Route>

          <Route path='/address' element={<Address></Address>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>

      
      
    </div>
  );
}

export default App;

