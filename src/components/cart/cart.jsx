import { memo, useContext, useEffect, useRef, useState } from 'react'
import { globalContext } from '../context/context'
import { Menulink } from '../home/home.jsx'
import Form from '../form/form.jsx'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Cart = memo(() =>{
  let cartmenubtn = useRef(null)
  let summ = 0;
  let [sum, setsum] = useState()

  const { mode, menucard, setmenucard, PageHeading, addToCartItemValue, CartIcon, setItemBeingRemoved, recalculate_cssVars } = useContext(globalContext)

  useEffect(() => {
    document.title = 'Mannu Dhaba Cart';
    recalculate_cssVars()
  }, [])

  // form subtotal start
  useEffect(() => {
    addToCartItemValue.map((a, b) => {
      summ += a.price * a.quantity
    })
    setsum(summ)
  }, [addToCartItemValue])
  // form subtotal end

  // for item quantity start
  const qty = ({ qnt, heading, variety }) => {
    let newmenucard = menucard.map((e, ind) => {
      if (e.heading === heading && e.variety === variety) {
        return { ...e, quantity: qnt === '-' ? (e.quantity > 1 ? e.quantity - 1 : 1) : e.quantity + 1 };
      }
      return e
    })
    setmenucard(newmenucard)
  }

  useGSAP(() => {
    gsap.utils.toArray('.cartItemWrapper').forEach(element => {
      gsap.fromTo(element,
        {
          y: 20
        },
        {
          y: 0,
          duration: 1, ease: 'power1',
          scrollTrigger: {
            trigger: element,
            start: 'top 95%',
            end: 'top 95%',
            // markers:true       
          }
        })
    })
  }, { dependencies: [addToCartItemValue.length] })

  return (
    <div>       
      <section className={`relative cartPage ${addToCartItemValue.length < 1 ? "h-[calc(100svh_-_var(--navHeight))]" : ""}`}>
        <PageHeading heading={' your cart'} />
        <div className={`${addToCartItemValue.length < 1 ? "h-[calc(100%_-_var(--navHeight))] grid place-content-center" : "min-h-[calc(100svh_-_var(--navHeight))] p-5"}`}>
          {addToCartItemValue.length < 1 ? <div>
            <p className='flex justify-center mb-4'>
              <NavLink to={'/menu'}>
                <CartIcon color={mode === 'dark' ? 'white' : 'black'} classes={`w-[2.925rem] h-[2.925rem] drop-shadow-md`} />
              </NavLink>
            </p>
            <h3 className='relative flex flex-wrap justify-between capitalize text-lg px-3 pb-6 text-center [textShadow:0.125rem_0.0625rem_1rem_#3b3b3b94]'> <div className='grow order-1 md:order-[0]'>add items in the cart to order.</div>
            </h3>
            <div className='flex justify-center'>
              <Menulink value='Return To Menu' reff={cartmenubtn} />
            </div>
          </div>
            :
            <div className="flex max-lg:flex-col max-lg:items-center lg:items-start lg:flex-wrap sm:w-[90%] lg:w-[82%] justify-center items-start gap-6 mx-auto py-7">
              {/* cart start  */}
              <div className="lg:w-[65%] sm:max-lg:w-[75%] flex-1 grid gap-3">
                {addToCartItemValue.map((menu, index) => (
                  <div key={menu.heading + index} className="cartItemWrapper relative">
                    <div key={menu.heading + index} className='flex overflow-hidden cartItem ar-one-sans relative sm:p-[0.9375rem] p-[0_0.9375rem_0.9375rem] rounded-lg items-center border flex-wrap justify-center backdrop-blur-[500px] shadow-xl hover:shadow-2xl transition-all duration-200 dark:bg-black bg-white max-sm:w-[75%] max-[420px]:w-[95%] max-[520px]:w-[80%] max-sm:mx-auto sm:text-[1rem] text-[0.98rem]'>
                      {/* remove btn start */}
                      <div onClick={() => { setItemBeingRemoved({ heading: menu.heading, variety: menu.variety }) }} className="absolute rounded-[0_0_0_3px] cursor-pointer p-[0.125em] top-[0px] dark:bg-[#f6f6f6] bg-white flex justify-center items-center right-[0px] w-[1.4375em] h-[1.4375em] shadow-[0.0625em_0.0625em_0.1875em_-0.0625em]">
                        <span>
                          <svg className={`w-[1.1975em] h-[1.1975em]`} viewBox="0 0 24 24" color="#000000" fill="none">
                            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                      </div>
                      {/* remove btn end */}
                      <div className='sm:w-[11.875rem] sm:h-[11.875rem] w-[80%] h-[9.5rem] p-2 rounded-xl'>
                        <img loading='lazy' src={menu.img} alt={menu.heading + ' img'} className='w-full h-full object-contain sm:object-cover rounded-[0.25rem]' />
                      </div>
                      {/* img end */}
                      <div className='p-2 flex-grow'>
                        <div className="border-b grid gap-[0.125em] p-2">
                          <h3 className="dark:text-white text-[1.125em] text-slate-950  font-bold capitalize">{menu.heading}</h3>
                          {'contains' in menu && <details className='cursor-pointer text-[0.875em]'>
                            <summary>{`${menu.contains.length} items`}</summary>
                            {menu.contains.map((e, ind) => (<span key={e + ind} className="dark:text-white text-slate-950 capitalize">{`${e} ${menu.contains.length !== ind + 1 ? ',' : ''}`}</span>))} </details>}

                          <h4 className="text-nowrap">Price :  <span className='font-semibold'> &#8377; {menu.price}</span></h4>
                          <p className='capitalize text-[0.875em] flex items-center gap-1'>
                            <span>
                              <svg className={`w-[1.375em] h-[1.375em]`} viewBox="0 0 24 24" color={`${mode === 'dark' ? '#9eff00' : 'rgb(111 180 0)'}`} fill="none">
                                <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span>
                              home delivery
                            </span>
                          </p>
                          <p className='capitalize text-[0.875em] flex items-center gap-1'>
                            <span>
                              <svg className={`w-[1.375em] h-[1.375em]`} viewBox="0 0 24 24" color={`${mode === 'dark' ? '#9eff00' : 'rgb(111 180 0)'}`} fill="none">
                                <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span>
                              click & pickup
                            </span>
                          </p>
                        </div>
                        {/* quantity start  */}
                        <div className='flex p-2 gap-2 justify-between'>
                          <div><span className='mr-3'> Qty: </span></div>
                          <div className='text-nowrap flex items-center'>
                            <button onClick={() => { qty({ qnt: '-', heading: menu.heading, variety: menu.variety }) }} className='p-1 rounded-md dark:text-black dark:bg-white bg-[#000000] text-white leading-[100%]' >
                              <svg className={`w-[1em] h-[1em] text-inherit`} viewBox="0 0 24 24" fill="none">
                                <path d="M20 12L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                            <span className='mx-2'>{menu.quantity}</span>
                            <button onClick={() => { qty({ qnt: '+', heading: menu.heading, variety: menu.variety }) }} className='p-1 rounded-md dark:text-black dark:bg-white bg-[#000000] text-white leading-[100%]'>
                              <svg className={`w-[1em] h-[1em] text-inherit`} viewBox="0 0 24 24" fill="none">
                                <path d="M12 4V20M20 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                          </div>
                          <div><h4 className="dark:text-white font-semibold text-nowrap min-w-9"> &#8377; {menu.price * menu.quantity}</h4></div>
                        </div>
                        {/* quantity end  */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* cart start  */}
              {/* checkout start  */}
              <div className={`lg:min-w-[35%] max-lg:order-first sm:max-lg:w-[85%] max-sm:w-[80%] max-[420px]:w-[95%] max-[520px]:w-[80%] lg:sticky lg:top-[--pageHeadingBottom] rounded-lg`}>
                <Form subtotal={sum} orders={addToCartItemValue} />
              </div>
              {/* checkout end  */}
            </div>
          }
        </div>
      </section>
    </div>
  )
})

export default Cart