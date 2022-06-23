import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart/Cart';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CartContextProvider } from './contexts/cartContext';

function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index path='/' element={<ItemListContainer saludo="Bienvenidos!!" />} />
            <Route path='categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            {/* <Cuerpo/> */}
          </Routes>
          <ToastContainer />
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
