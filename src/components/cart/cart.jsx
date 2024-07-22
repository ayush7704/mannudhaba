import { useContext, useEffect, useRef, useState } from 'react'
import { counterContext } from '../context/context'
import { Menulink } from '../home/home.jsx'
import Form from '../form.jsx'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


function MsgCompo({ modalref, cardvalueP, modaltype }) {
  const { value, menucard, setmenucard, setfixedMsg } = useContext(counterContext)
  // for removing modal and updating menucard array 
  function removeModal(value) {
    if (value) {
      const updatedCards = menucard.map(card => {
        if (card.heading === cardvalueP.heading && card.variety === cardvalueP.variety) {
          setfixedMsg(prev => ({ ...prev, msg: card.inCart ? 'item removed successfully' : 'item added successfully', random: !prev.random, initial: !prev.initial, cardIncard: !card.inCart }))
          return { ...card, quantity: 1, inCart: !card.inCart };
        }
        return card;
      });
      setmenucard(updatedCards)
    }
  }
  // for removing modal and updating menucard array end
  return (
    <>
      {modaltype === 'cartModal' ?
        (
          // {/* remove item modal start  */ }
          < div className='fixed top-0 left-0 z-[-10] h-dvh w-dvw grid place-items-center bg-[#000000a1]' onClick={() => { removeModal(false); modalref.current.parentElement.classList.remove('z-[4]'); modalref.current.parentElement.classList.add('z-[-10]'); modalref.current.classList.add('scale-0', 'opacity-0') }
          }>
            <div onClick={(e) => { e.stopPropagation() }} ref={modalref} className='transition-all duration-200 rounded-md sm:w-[400px] w-[75%] bg-black dark:bg-white dark:text-black p-[17px] text-white scale-0 opacity-0 '>
              <h2 className='capitalize font-bold mb-2'>remove item</h2>
              <p className='mb-2'>Are you sure want to remove this item?</p>
              <div className="flex mt-auto justify-end gap-2">
                <button onClick={(e) => { e.stopPropagation(); removeModal(false); modalref.current.parentElement.classList.remove('z-[4]'); modalref.current.parentElement.classList.add('z-[-10]'); modalref.current.classList.add('scale-0', 'opacity-0') }} className='bg-red-500 hover:bg-red-600 font-bold py-[5px] rounded-sm px-2 text-white'>cancel</button>
                <button onClick={(e) => { e.stopPropagation(); removeModal(true); modalref.current.parentElement.classList.remove('z-[4]'); modalref.current.parentElement.classList.add('z-[-10]'); modalref.current.classList.add('scale-0', 'opacity-0') }} className='bg-[rgb(239_68_68_/_29%)] hover:bg-red-600 font-bold py-[5px] rounded-sm px-2 text-white'>remove</button>
              </div>
            </div>
          </div >
          // {/* remove item modal end  */ }
        ) : modaltype === 'menusModal' ?
          (
            < div className='fixed top-0 left-0 z-[-10] h-dvh w-dvw grid place-items-center bg-[#000000a1]' onClick={() => { removeModal(false); modalref.current.parentElement.classList.remove('z-[4]'); modalref.current.parentElement.classList.add('z-[-10]'); modalref.current.classList.add('scale-0', 'opacity-0') }}>
              <div onClick={(e) => { e.stopPropagation() }} ref={modalref} className='transition-all duration-200 rounded-md sm:w-[400px] w-[75%] bg-black dark:bg-white dark:text-black p-[17px] text-white scale-0 opacity-0 '>
                <h2 className='capitalize font-bold mb-2'>Add item to cart for order</h2>
                <p className='mb-2 text-[12px] capitalize flex gap-2 items-center'><span>add or remove just by from click on </span>
                  {/* heart  */}
                  <span>
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color={value === 'dark' ? 'black' : 'white'}>
                      <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill={'red'} />
                    </svg>
                  </span>
                  {/* heart  */}
                </p>
                <div className="flex mt-auto justify-end gap-2">
                  <button onClick={(e) => { e.stopPropagation(); removeModal(false); modalref.current.parentElement.classList.remove('z-[4]'); modalref.current.parentElement.classList.add('z-[-10]'); modalref.current.classList.add('scale-0', 'opacity-0') }} className='bg-red-500 hover:bg-red-600 font-bold py-[5px] rounded-sm px-2 text-white'>Add Item</button>
                  <button onClick={(e) => { e.stopPropagation(); removeModal(true); modalref.current.parentElement.classList.remove('z-[4]'); modalref.current.parentElement.classList.add('z-[-10]'); modalref.current.classList.add('scale-0', 'opacity-0') }} className='bg-[rgb(239_68_68_/_29%)] hover:bg-red-600 font-bold py-[5px] rounded-sm px-2 text-white'>remove</button>
                </div>
              </div>
            </div >) : <div>hlo</div>

      }
    </>
  )
}


function cart() {
  let cartmenubtn = useRef(null)
  let summ = 0
  let modal = useRef(null)
  let [sum, setsum] = useState()
  const [cardvalue, setcardvalue] = useState({ heading: null, variety: null })
  const { value, menucard, setmenucard, PageHeading, addToCartItemValue, setfixedMsg } = useContext(counterContext)
  useEffect(() => {
    document.title = 'Mannu Dhaba Cart';
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
  const qty = (qnt, heading, variety) => {
    let newmenucard = menucard.map((e, ind) => {
      if (e.heading === heading && e.variety === variety) {
        return { ...e, quantity: qnt === '-' ? (e.quantity > 0 ? e.quantity - 1 : 0) : e.quantity + 1 };
      }
      return e
    })
    setmenucard(newmenucard)
  }
  // for item quantity end

  // for opening modal 
  function openModal() {
    modal.current.parentElement.classList.remove('z-[-10]')
    modal.current.parentElement.classList.add('z-[4]')
    modal.current.classList.remove('scale-0', 'opacity-0')
  }

  useGSAP(() => {
    gsap.utils.toArray('.cartItem').forEach(element => {
      gsap.fromTo(element,
        { y: 50 , ease:'none'
        },
        {
          y: 0, scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            end: 'top 50%',
            scrub: 1,
            scroller: 'body',
            // markers: true,
          }
        })
    })
  },{dependencies:[addToCartItemValue.length]})

  return (
    <div>
      <section className='relative min-h-[70vh] cartPage backdrop-blur-[70px]'>
        <PageHeading  heading={' your cart'} />
        <div className="p-[20px]">
          {addToCartItemValue.length < 1 ? <div className='sm:w-[60%] mx-auto'>
            <p className='flex justify-center mb-4'>
              <NavLink to={'/menu'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" color={value === 'dark' ? 'white' : 'black'} fill="none">
                  <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6 6H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 20L15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></NavLink>
            </p>
            <h3 className='relative flex flex-wrap justify-between capitalize text-lg px-3 pb-6 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}> <div className='grow order-1 md:order-[0]'>add items in the cart to order.</div>
            </h3>
            <div className='flex justify-center'>
              <Menulink value='Return To Menu' reff={cartmenubtn} />
            </div>
          </div>
            :
            <div className="flex flex-wrap sm:w-[80%] justify-center items-start gap-5 mx-auto mb-7">
              {/* cart start  */}
              <div className="sm:w-[65%] flex-1 grid gap-3 ">
                {addToCartItemValue.map((menu, index) => (
                  <div key={menu.heading + index} className="cartItemWrapper relative">
                    {/* <div className="absolute h-full w-full z-[-1] bg-[linear-gradient(151deg,transparent_33%,rgb(235_135_188)_66%,transparent_79%)] rounded-lg"></div> */}
                    <div key={menu.heading + index} className='flex overflow-hidden cartItem relative p-[15px] rounded-lg items-center border flex-wrap justify-center backdrop-blur-[100px]'>
                      {/* remove btn start */}
                      <div onClick={() => { openModal(); setcardvalue({ heading: menu.heading, variety: menu.variety }) }} className="absolute cursor-pointer p-[2px] top-[0px] dark:bg-[#f6f6f6] bg-white flex justify-center items-center right-[0px] w-[23px] h-[23px] shadow-[1px_1px_3px_-1px]">
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19" height="19" color="#000000" fill="none">
                            <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                          </svg>
                        </span>
                      </div>
                      {/* remove btn end */}
                      {/* img start */}
                      <div className='sm:w-[190px] sm:h-[190px] w-[120px] h-[120px] p-2 rounded-xl'>
                        <img src={menu.img} alt={menu.heading + ' img'} className='w-full h-full object-cover rounded-[4px]' />
                      </div>
                      {/* img end */}
                      <div className='p-2 flex-grow'>
                        <div className="border-b grid gap-[2px] p-2">
                          <h3 className="dark:text-white text-[18px] text-slate-950  font-bold capitalize">{menu.heading}</h3>
                          {'contains' in menu && <details className='cursor-pointer text-[14px]'>
                            <summary>{`${menu.contains.length} items`}</summary>
                            {menu.contains.map((e, ind) => (<span key={e + ind} className="dark:text-white text-slate-950 capitalize">{`${e} ${menu.contains.length !== ind + 1 ? ',' : ''}`}</span>))} </details>}
                          {/* <h4 className="text-[rgb(232 124 187)] font-semibold font-serif"> &#8377; 190</h4> */}

                          {/* <p className='text-[13px]'>Ref:
                          {new Date().getDate()}{new Date().getHours()}{new Date().getMinutes()}
                        </p> */}
                          <h4 className="text-nowrap ">Price :  &#8377; {menu.price}</h4>
                          <p className='capitalize text-[14px] flex gap-1'>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color={`${value === 'dark' ? '#9eff00' : 'rgb(111 180 0)'}`} fill="none">
                                <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span>
                              home delivery
                            </span>
                          </p>
                          <p className='capitalize text-[14px] flex gap-1'>
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color={`${value === 'dark' ? '#9eff00' : 'rgb(111 180 0)'}`} fill="none">
                                <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span>
                              click & pickup
                            </span>
                          </p>
                        </div>
                        {/* quantity start  */}
                        <div className='flex p-2 justify-between'>
                          <div><span className='mr-3'> Qty: </span></div>
                          <div className='text-nowrap'><button onClick={() => { qty('-', menu.heading, menu.variety) }} className='px-2 dark:text-black dark:bg-white bg-[#000000] text-white' >-</button><span className='mx-2'>{menu.quantity}</span><button onClick={() => { qty('+', menu.heading, menu.variety) }} className='px-2 dark:text-black dark:bg-white bg-[#000000] text-white'>+</button></div>
                          {/* <div><h4 className="text-gray-300 font-semibold font-serif text-nowrap"> &#8377; s{190}</h4></div> */}
                          {/* <div><h4 className="dark:text-white opacity-[0.5] font-semibold font-serif text-nowrap min-w-9"> &#8377; {menu.price}</h4></div> */}
                          <div><h4 className="dark:text-white font-semibold font-serif text-nowrap min-w-9"> &#8377; {menu.price * menu.quantity}</h4></div>
                        </div>
                        {/* quantity end  */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* cart start  */}
              {/* checkout start  */}
              <div className="sm:min-w-[35%] min-w-[100%] bg-red-300 border sticky top-[--navHeight] rounded-lg">
                <Form subtotal={sum} orders={addToCartItemValue} />
              </div>
              {/* checkout end  */}
            </div>
          }
        </div>
      </section>
      <MsgCompo modaltype={'cartModal'} cardvalueP={cardvalue} modalref={modal} />
    </div>
  )
}

export default cart