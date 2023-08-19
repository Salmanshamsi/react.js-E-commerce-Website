import './App.css'
import Cart from './Components/cart/Cart';
import Home from './secssions/home.jsx/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './secssions/About/About';
import Contact from './secssions/Contact/Contact';
import Shop from './secssions/Shop/Shop';
import Login from './Authantication/login/Login';
import RegForm from './Authantication/Reg-form/RegForm';
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Dashboard from './secssions/Dashboard/Dashboard';



function App() {
  return (
    <div>
      <Cart />
      
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/signup' element={<RegForm/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profilecard' element={<ProfileCard />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
