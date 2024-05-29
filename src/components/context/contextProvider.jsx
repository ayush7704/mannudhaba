import { counterContext } from "./context";
import { useState } from "react";

function Fixed() {
  return (
    <div className='fixed z-10 dark:bg-white dark:text-black capitalize left-1/2 -translate-x-1/2 inline-block bottom-8 bg-black text-white px-5 py-3 rounded-[8px] dark:shadow-[0px_0px_7px_1px_white] shadow-[0px_0px_7px_1px_black]'>number copied!</div>
  )
}

function PageHeading({ heading,mode }) {
  return (
    <div className='flex items-center py-5 px-5'>
      {/* return btn  */}
      <div className='text-3xl capitalize inline-flex w-[40px] h-[40px] items-center justify-center cursor-pointer dark:hover:shadow-[4px_0px_5px_-2px_black] dark:bg-[linear-gradient(to_right,_#8c609c,_#291c26,_black)]  bg-[linear-gradient(to_right,_#d9b2d6,_#f4eef6,_#f8fafc)] hover:shadow-[3px_0px_5px_-2px_black] rounded-full dark:text-white transition-all duration-300' style={{ userSelect: 'none' }} onClick={() => { window.history.back() }}> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={mode === 'dark' ? 'white' : 'black'} fill="none" className='dark:drop-shadow-[4px_1px_1px_black] drop-shadow-[3px_0px_1px_black]'>
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99996 17C8.99996 17 4.00001 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg> </span></div>
      <h3 className='text-2xl ml-4 capitalize font-semibold' style={{ textShadow: '2px 1px 3px #3b3b3b94' }}>{heading}</h3>
    </div>
  )
}

function ContextProvider({ children }) {
  const [value, setvalue] = useState('dark')
  return (
    <counterContext.Provider value={{ value, setvalue, Fixed ,PageHeading}}>
      {children}
    </counterContext.Provider>
  )
}

export default ContextProvider