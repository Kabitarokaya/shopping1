import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Footer from './Components/Footer'
import SingleProduct from './pages/SingleProduct'
import CategoryProduct from './pages/CategoryProduct'

const App = () => {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords
      // console.log(latitude, longitude);
      const url = `https://nominatim.openstreetmap.org?lat=${latitude}&lon=${longitude}&format=json`
      try {
        const location = await axios.get(url)
        const exactLocation = location.data.address
        setLocation(exactLocation);
        setOpenDropdown(false)
        //  console.log(exactLocation);
      } catch (error) {
        console.log(error);
      }
    })
  }
  useEffect(() => {
    getLocation()
  }, [])
  return (
    <>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path='/category/:category' element={<CategoryProduct/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart  location ={location} getLocation={getLocation}/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
