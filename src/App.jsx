import Bg from './components/bg.jsx';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import Menus from './components/menus/menus.jsx'
import Gallery from './components/gallery/gallery.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Footer from './components/footer/footer';
import { counterContext } from './components/context/context.js';
import ScrollToTop from './components/scrollToTop/scrollToTop.jsx'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState,useContext ,memo} from 'react';


function App() {

  return (
      <div className='main dark:text-white text-black  min-h-dvh'>
        <ScrollToTop />
        <Bg />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menus />} />
          <Route path='/about Us' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default memo(App);
