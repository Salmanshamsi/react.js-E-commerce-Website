import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Cart from './componenets/Cart';
import LoginModal from './componenets/LoginModal';



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
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
