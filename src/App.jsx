import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemdetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
   return (
    <div className='App'>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemID' element={<ItemListContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <ItemdetailContainer />
      <ItemCount initial={1} stock={10} onAdd={(quality) => console.log('Cantidad agregada ', quantity)}/>
      
    </div>
  );
}

export default App;
