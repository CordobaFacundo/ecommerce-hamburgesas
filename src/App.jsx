import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Cuerpo from './components/Cuerpo/Cuerpo';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index path='/' element={<ItemListContainer saludo="Bienvenidos!!"/>} />
          <Route path='/detalle/:id' element={<ItemDetailContainer/>} />
          {/* <Cuerpo/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
