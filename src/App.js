
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Modal from './components/Modal';


function App() {
  return (
    <div id="wrapper">

      <BrowserRouter>
      <div>

      <Navbar />

    <Routes>
      <Route exact path='/' element={<ProductList />} />
      <Route path='/details' element={<Details />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/default' element={<Default />} />
      
      </Routes>

      <Modal/>
      </div>
      </BrowserRouter>
    </div>
         
  
  );
}

export default App;
