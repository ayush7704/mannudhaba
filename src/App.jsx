import Bg from './components/bg.jsx';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import Menus from './components/menus/menus.jsx'
import Gallery from './components/gallery/gallery.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Cart from './components/cart/cart.jsx';
import gsap from 'gsap';
import Footer from './components/footer/footer';
import { counterContext } from './components/context/context.js';
import ScrollToTop from './components/scrollToTop/scrollToTop.jsx'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, useContext, memo, useRef } from 'react';


function App() {
  // useEffect(() => {
  //   window.addEventListener('load', () => {
  //     setTimeout(() => {
  //       document.querySelector('.alert').style.zIndex = '-5'
  //     }, 1500);
  //   })
  // }, [])


  const { Fixed, fixedMsg, setfixedMsg } = useContext(counterContext)
  return (
    <main className='main dark:text-white text-black  min-h-dvh'>
      <div className='grid alert top-0 left-0 justify-center items-center h-screen fixed z-[-5] w-screen bg-[#000000c4]'>
        <h1 className='text-lg'>we are under development</h1>
      </div>
      <ScrollToTop />
      <Bg />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menus />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
      <div>
        <Fixed messege={fixedMsg} />
      </div>
    </main>
  )
}

export default memo(App);
