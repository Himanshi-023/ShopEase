import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home  from './pages/Home';
import  Contact from './pages/Contact'
import Products from './pages/Products'
import ErrorPage from './pages/ErrorPage';
import Cart from './pages/Cart';
import SinglePage from './pages/SinglePage';
import Header from './Components/Header';
import About from './pages/About';
import Footer from './Components/Footer';


const App :React.FC = () => {
  
  return (
    <div className=' overflow-hidden'>
     <Router>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products"  element={<Products/>}/>
        <Route path="/Contact"  element={<Contact/>}/>
        <Route path="/SinglePage/:id"  element={<SinglePage/>}/>     
        <Route path="/Cart"  element={<Cart/>}/>
        <Route path="/About"  element={<About/>}/>
        <Route path="*"  element={<ErrorPage/>}/>
      </Routes>
     </Router>

     <Footer/>
    </div>
  )
}

export default App