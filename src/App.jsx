import Bg from './components/bg.jsx';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import Menus from './components/menus/menus.jsx'
import Gallery from './components/gallery/gallery.jsx'
import About from './components/aboutus/aboutUs.jsx'
import Cart from './components/cart/cart.jsx';
import PageNotFound from './components/pageNotFound.jsx';
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


  useEffect(() => {
    const pageHeading = document.querySelector(".pageHeading")
    const nav = document.querySelector(".maintopNavbar")
    const pageHeadingBottom = Boolean(pageHeading) ? pageHeading.getBoundingClientRect().bottom : 200
    const imgRandor = () => {      
      document.documentElement.style.setProperty(`--navHeight`, `${nav.getBoundingClientRect().height}px`)
      document.documentElement.style.setProperty(`--pageHeadingBottom`, `${pageHeadingBottom}px`)
    }
    window.addEventListener('resize', imgRandor)
    document.querySelector('.nav-logo').addEventListener('load', imgRandor)
    document.documentElement.style.setProperty(`--navHeight`, `${nav.getBoundingClientRect().height}px`)
    document.documentElement.style.setProperty(`--pageHeadingBottom`, `${pageHeadingBottom}px`)
    return () => {
      document.querySelector('.nav-logo').removeEventListener('load', imgRandor)
      window.removeEventListener('resize', imgRandor)
    }
  }, [])

  const { Notification, notificationState, ItemRemovingModal, itemBeingRemoved } = useContext(globalContext)
  return (
    <section>
      <Navbar />
      <Bg />
      <div className="fixed h-full w-full backdrop-blur-[--blur] pointer-events-none" />
      <main className='main mx-auto'>
        <ScrollToTop />

        <div className="relative z-1 dark:text-white text-black">
          <Routes>
            <Route path='/' element={< Home />} />
            <Route path='/menu' element={<Menus />} />
            <Route path='/about' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>

        <>
          {siteLoaded && notificationState && <Notification />}
          {itemBeingRemoved && <ItemRemovingModal itemBeingRemovingValues={itemBeingRemoved} />}
        </>
      </main>
      <section className={"backdrop-blur-[--blur] dark:text-white text-black"}>
        <Footer />
      </section>
    </section>
  )
}

export default memo(App);
