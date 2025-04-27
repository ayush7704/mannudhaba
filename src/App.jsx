import Bg from './components/bg.jsx';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import Menus from './components/menus/menus.jsx'
import Gallery from './components/gallery/gallery.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Cart from './components/cart/cart.jsx';
// import gsap from 'gsap';
import Footer from './components/footer/footer';
import { globalContext } from './components/context/context.js';
import ScrollToTop from './components/scrollToTop/scrollToTop.jsx'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState, useContext, memo, useRef } from 'react';


function App() {
  const [siteLoaded, setSiteLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => { setSiteLoaded(true); }

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }
    return () => { window.removeEventListener("load", handleLoad); }
  }, []);

  const { Notification, ItemRemovingModal, itemBeingRemoved } = useContext(globalContext)
  return (
    <main className='main dark:text-white text-black  min-h-dvh'>
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
        {siteLoaded && <Notification />}
        {itemBeingRemoved && <ItemRemovingModal itemBeingRemovingValues={itemBeingRemoved} />}
      </div>
    </main>
  )
}

export default memo(App);
