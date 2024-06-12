import React, { useEffect, useState } from 'react';

const WhatsAppForm = ({ subtotal, orders }) => {
  const [selectedOption, setSelectedOption] = useState('home delivery');
  const [villageOption, setvillageOption] = useState('');
  const [delifees, setdelifees] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    village: '',
    number: '',
  });
  const deliveryFees = new Map([
    ['bakaniya', 40],
    ["khajuri sadak", 30],
    ["pipaliya", 50]
  ])
  useEffect(() => {
    console.log(orders)
  })
  useEffect(() => {
    if (localStorage.getItem('formdata')) {
      setFormData(JSON.parse(localStorage.getItem('formdata')))
      console.log(JSON.parse(localStorage.getItem('formdata')))
    }
    setdelifees(deliveryFees.get(villageOption))
  }, [])
  useEffect(() => {
    localStorage.setItem('formdata', JSON.stringify(formData))
  }, [formData])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    let order = []
    for (let x = 0; x< orders.length;x++){
      order[x]=  orders[x].quantity +' qty)  dish : '+ orders[x].heading +' price: '+orders[x].price
    }
    // alert(order)
    console.log(order)
    e.preventDefault();
    const { name, address, number, village } = formData;
    const phoneNumber = '7898354593'; // Replace with the desired WhatsApp number
    const text = `Name: ${name}\n Number:${number}\n address: ${villageOption + ' : ' + address}\n delivery-type:${selectedOption}\n total:${selectedOption === 'home delivery' ? (delifees === undefined ? 0 : delifees) + subtotal : subtotal}\n  order:${order}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.location.href = url;
  };
  const handleReset = (e) => {
    setFormData({
      name: '',
      address: '',
      village: '',
      number: '',
    })
  }

  const handleOptionChangeVillage = (event) => {
    setdelifees(deliveryFees.get(event.target.value))
    setvillageOption(event.target.value)
  }
  const handleOptionChange = (event) => {
    console.log(event.target.value)
    setSelectedOption(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="relative sm:max-w-lg w-full mx-auto text-black p-4 bg-white shadow-md rounded-lg">
      <div className="py-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Your Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="py-2">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
          Your number
        </label>
        <input
          id="number"
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="py-2">
        <label className="block text-gray-700 text-sm font-bold my-2" htmlFor="address">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required={selectedOption === 'home delivery'}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
        ></textarea>
      </div>

      <div className="py-2 flex-wrap flex justify-between text-center items-center text-[14px]">
        <label className='cursor-pointer flex-1 hover:bg-[#F6F6F6] rounded-lg px-2 py-1 text-nowrap' htmlFor="homeDelivery">
          <input type="radio" name="radio" value='home delivery' id="homeDelivery" className='mr-2 align-middle' onChange={handleOptionChange} checked={selectedOption === 'home delivery'} />
          home delivery
        </label>
        <label className='cursor-pointer flex-1 hover:bg-[#F6F6F6] rounded-lg px-2 py-1 text-nowrap' htmlFor="pickup">
          <input type="radio" name="radio" id="pickup" value='pickup' className='mr-2 align-middle' checked={selectedOption === 'pickup'} onChange={handleOptionChange} />
          click & pickup
        </label>
      </div>
      <div className={`py-2 flex-wrap flex justify-between text-center items-center text-[14px] ${selectedOption !== 'home delivery' ? 'hidden' : ''}`}>
        <label className='cursor-pointer flex-1 hover:bg-[#F6F6F6] rounded-lg px-2 py-1 text-nowrap' htmlFor="bakaniya">
          <input type="radio" name="village" value='bakaniya' id="bakaniya" className='mr-2 align-middle' onChange={handleOptionChangeVillage} checked={villageOption === 'bakaniya'} required={selectedOption === 'home delivery'} />
          bakaniya
        </label>
        <label className='cursor-pointer flex-1 hover:bg-[#F6F6F6] rounded-lg px-2 py-1 text-nowrap' htmlFor="khajuri">
          <input type="radio" name="village" value='khajuri sadak' id="khajuri" className='mr-2 align-middle' onChange={handleOptionChangeVillage} checked={villageOption === 'khajuri sadak'} required={selectedOption === 'home delivery'} />
          khajuri sadak
        </label>
        <label className='cursor-pointer flex-1 hover:bg-[#F6F6F6] rounded-lg px-2 py-1 text-nowrap' htmlFor="pipaliya">
          <input type="radio" name="village" value='pipaliya' id="pipaliya" className='mr-2 align-middle' onChange={handleOptionChangeVillage} checked={villageOption === 'pipaliya'} required={selectedOption === 'home delivery'} />
          pipaliya
        </label>
      </div>
      <div className='py-2 border-b text-[14px]'>
        <p className='flex justify-between'>
          <span>Subtotal:</span>
          <span> &#8377;{subtotal}</span>
        </p>
        <p className='flex justify-between'>
          <span>Delivery</span>
          <span className={`${selectedOption !== 'home delivery' ? 'line-through' : ''}`}> &#8377; {delifees === undefined ? 0 : delifees}</span>
        </p>
      </div>
      <div className='py-2 border-b text-[17px]'>
        <h2 className='flex justify-between'>
          <span>Total</span><span>{`${selectedOption === 'home delivery' ? (delifees === undefined ? 0 : delifees) + subtotal : subtotal}`}</span>
        </h2>
      </div>

      <div className="grid gap-2 py-2 items-center">
        <button
          type="submit"
          className="bg-[linear-gradient(to_left_top,_hsla(43,_84%,_85%,_1)_0%,_hsla(325,_71%,_70%,_1)_50%,_hsla(236,_67%,_55%,_1)_100%)] text-white font-bold py-2 px-4 rounded"
        >
          conform order
        </button>
        <button type="reset" className="bg-[rgba(100,106,120,0.08)] hover:bg-[rgba(100,106,120,18%)] text-red font-bold py-2 px-4 rounded"> reset</button>

      </div>
    </form>
  );
};

export default WhatsAppForm;
