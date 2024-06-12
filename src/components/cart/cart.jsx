import { useContext, useEffect, useRef, useState } from 'react'
import { counterContext } from '../context/context'
import { Menulink } from '../home/home.jsx'
import Form from '../form.jsx'
import { NavLink } from 'react-router-dom'

function cart() {
  let cartmenubtn = useRef(null)
  let summ = 0
  let modal = useRef(null)
  let [sum, setsum] = useState()
  const [cardvalue, setcardvalue] = useState({ heading: null, variety: null })
  const { value, menucard, setmenucard, PageHeading, addToCartItemValue } = useContext(counterContext)
  useEffect(() => {
    document.title = 'Mannu Dhaba Cart'
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

  // for removing modal and updating menucard array 
  function removeModal(value) {
    if (value) {
      const updatedCards = menucard.map(card => {
        if (card.heading === cardvalue.heading && card.variety === cardvalue.variety) {
          return { ...card, inCart: !card.inCart };
        }
        return card;
      });
      setmenucard(updatedCards)
    }
  }
  // for removing modal and updating menucard array end

  // for opening modal 
  function openModal() {
    modal.current.parentElement.classList.remove('z-[-10]')
    modal.current.parentElement.classList.add('z-[4]')
    modal.current.classList.remove('scale-0', 'opacity-0')
  }

  return (
    <div>
      <section className='relative min-h-[70vh] cartPage backdrop-blur-[70px]'>
        <PageHeading mode={value} heading={' your cart'} />
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
            <h3 className='relative flex flex-wrap justify-between text-red-500 capitalize text-lg px-3 pb-6 text-center' style={{ textShadow: '2px 1px 16px #3b3b3b94' }}> <div className='grow order-1 md:order-[0]'>no items in the cart.</div>
            </h3>
            <div className='flex justify-center'>
              <Menulink value='Return To Menu' reff={cartmenubtn} />
            </div>
          </div>
            :
            <div className="flex flex-wrap sm:w-[80%] justify-center items-start gap-5 mx-auto ">
              {/* cart start  */}
              <div className="sm:w-[65%] flex-1 grid gap-3">
                {addToCartItemValue.map((menu, index) => (
                  <div key={menu.heading + index} className='flex relative p-[15px] rounded-lg items-center border flex-wrap justify-center'>
                    {/* remove btn start */}
                    <div onClick={() => { openModal(); setcardvalue({ heading: menu.heading, variety: menu.variety }) }} className="absolute cursor-pointer top-[-10px] bg-[#F6F6F6] rounded-[50%] flex justify-center items-center right-[0px] w-[26px] h-[26px]">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#ff0000" fill="none">
                          <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                    {/* remove btn end */}
                    {/* img start */}
                    <div className='sm:w-[190px] sm:h-[190px] w-[120px] h-[120px] p-2 rounded-xl'>
                      <img src={menu.img} alt={menu.heading + ' img'} className='w-full h-full object-cover' />
                    </div>
                    {/* img end */}
                    <div className='p-2 flex-grow'>
                      <div className="border-b grid gap-[2px] p-2">
                        <h3 className="dark:text-white text-[18px] text-slate-950  font-bold capitalize">{menu.heading}</h3>
                        {/* <h4 className="text-[rgb(232 124 187)] font-semibold font-serif"> &#8377; 190</h4> */}

                        <p className='text-[13px]'>Ref:
                          {new Date().getDate()}{new Date().getHours()}{new Date().getMinutes()}
                        </p>
                        <p className='capitalize text-[14px] flex gap-1'>
                          <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" color="#9eff00" fill="none">
                              <path d="M5 14.5C5 14.5 6.5 14.5 8.5 18C8.5 18 14.0588 8.83333 19 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span>
                            home delivery
                          </span>
                        </p>
                      </div>
                      {/* quantity start  */}
                      <h3 className='flex p-2 justify-between'>
                        <div><span className='mr-3'> Qty: </span></div>
                        <div><button onClick={() => { qty('-', menu.heading, menu.variety) }} className='px-2 dark:text-black dark:bg-white bg-[#000000] text-white' >-</button><span className='mx-2'>{menu.quantity}</span><button onClick={() => { qty('+', menu.heading, menu.variety) }} className='px-2 dark:text-black dark:bg-white bg-[#000000] text-white'>+</button></div>
                        {/* <div><h4 className="text-gray-300 font-semibold font-serif text-nowrap"> &#8377; s{190}</h4></div> */}
                        <div><h4 className="dark:text-white font-semibold font-serif text-nowrap min-w-9"> &#8377; {menu.price * menu.quantity}</h4></div>
                      </h3>
                      {/* quantity end  */}
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
      {/* remove item modal start  */}
      <div className='fixed top-0 left-0 z-[-10] h-dvh w-dvw grid place-items-center bg-[#000000a1]' onClick={() => { removeModal(false); modal.current.parentElement.classList.remove('z-[4]'); modal.current.parentElement.classList.add('z-[-10]'); modal.current.classList.add('scale-0', 'opacity-0') }} >
        <div onClick={(e) => { e.stopPropagation() }} ref={modal} className='transition-all duration-200 rounded-md sm:w-[400px] w-[75%] bg-black dark:bg-white dark:text-black p-[17px] text-white scale-0 opacity-0 '>
          <h2 className='capitalize font-bold mb-2'>remove item</h2>
          <p className='mb-2'>Are you sure want to remove this item?</p>
          <div className="flex mt-auto justify-end gap-2">
            <button onClick={(e) => { e.stopPropagation(); removeModal(false); modal.current.parentElement.classList.remove('z-[4]'); modal.current.parentElement.classList.add('z-[-10]'); modal.current.classList.add('scale-0', 'opacity-0') }} className='bg-red-500 hover:bg-red-600 font-bold py-[5px] rounded-sm px-2 text-white'>cancel</button>
            <button onClick={(e) => { e.stopPropagation(); removeModal(true); modal.current.parentElement.classList.remove('z-[4]'); modal.current.parentElement.classList.add('z-[-10]'); modal.current.classList.add('scale-0', 'opacity-0') }} className='bg-[rgb(239_68_68_/_29%)] hover:bg-red-600 font-bold py-[5px] rounded-sm px-2 text-white'>remove</button>
          </div>
        </div>
      </div>
      {/* remove item modal end  */}
    </div>
  )
}

export default cart