import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Cart from './componenets/Cart';
import LoginModal from './componenets/LoginModal';
import Collections from './screens/Collections';
import Reviews from './screens/Reviews';
import Contact from './screens/Contact';



function App() {
  return (
    <div>
      <div className='flex flex-row-reverse'>
        <Cart/>
      </div>
      <div>
        <LoginModal/>
      </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/reviews' element={<Reviews/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
