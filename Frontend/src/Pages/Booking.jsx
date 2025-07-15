import axios from 'axios';
import { ToastContainer , toast } from 'react-toastify';
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Parallax } from 'react-parallax'
import { MdArrowDropDown } from "react-icons/md";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Footer from '../Components/Footer';

const Booking = () => {
  const [showGuestOpt, setSowGuestOpt] = useState(false);
  const handleGuest = () => {
    setSowGuestOpt(!showGuestOpt)
  }
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState(null);

  const [selectedGuest, setSelectedGuest] = useState('');

  const handleSelectedGuest = (guest) => {
    setSelectedGuest(guest);
    setSowGuestOpt(false);
  };

  const guests = ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', 'more than 5'];

 const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [message, setMessage] = useState('');
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const formData = {
      name , phone , guests: selectedGuest, date: selectedDate, time, message
    }
    try{
      const response = await axios.post('https://doodle-garden.onrender.com/api/reservations', formData);
         console.log('Reservation saved:', response.data);
toast.success("🎉 Reservation successful!", {
  style: {
    background: "#fffff0",
    color: "black",
    border: "1px solid black",
    fontFamily: "Antonio, sans-serif",
    fontWeight: 500,
  },
  icon: "✅",
   progressStyle: {
    background: "black",
  },
});
setName('');
setPhone('');
setSelectedGuest('');
setSelectedDate(null);
setTime(null);
setMessage('');


    }
    catch(error){
    console.error('Reservation failed:', error);
  toast.error("❌ Reservation failed. Try again!", {
  style: {
    background: "#fffff0",
    color: "black",
    border: "1px solid black",
    fontFamily: "Antonio, sans-serif",
    fontWeight: 500,
  },
  icon: "⚠️",
   progressStyle: {
    background: "black",
  },
});
  }
  
  
  }
  return (
    <div className='bg-[#fffff0] w-full    text-black'>
      <Parallax className='w-[100%] h-[60vh] md:h-[46vh] lg:h-[90vh]' bgImageSizes='cover' bgImage='https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg' strength={300}>
        <div className='text-center w-[100%] flex justify-center items-center flex-col text-white  h-[68vh] md:h-[46vh] lg:h-[85vh] lg:py-20'>
          <h2 className='md:text-7xl capitalize text-4xl font-semibold font-[Imperial_Script]'>
            reserve a table</h2>
          <p className='font-outfit px-20 text-center text-xs md:px-32 md:text-lg text-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil sed, corrupti laudantium nesciunt minus nobis vero voluptatibus. </p>
        </div>
      </Parallax>
      <div className='md:py-14 py-3 '>
      {/* heading */}
        <div className='flex flex-col gap-3 justify-center py-6  items-center md:py-10 '>
          <h2 className='md:text-5xl text-3xl font-semibold  font-[Outfit] capitalize text-center'>online reservation</h2>
          <p className='text-sm font-medium font-[Outfit] capitalize text-gray-800'>booking request <span className='text-pink-700'>+91 234 567 890 </span> or fill out the form</p>
        </div>
        <div className='flex md:pt-12 px-5   w-full   justify-center items-center flex-col gap-4 py-5 '>
          {/* reservation form */}
          <div className='flex flex-col w-[100%] lg:w-[70%]  md:w-[85%] gap-12 justify-start p-10 rounded-xl border-2'>
            <form onSubmit={handleSubmit}>
              {/* section-1 */}
              <div className='flex gap-6 flex-col lg:flex-row md:grid md:grid-cols-2 justify-center items-center'>
                <input type="text" className='border-b-[0.1rem] pb-1  text-black capitalize placeholder:text-black placeholder:font-[Outfit] text-lg font-[Outfit] outline-none' placeholder=' Your Name' value={name} onChange={(e) => setName(e.target.value)} name="name" id="" />
                <input type="tel" className='border-b-[0.1rem] pb-1  text-black capitalize placeholder:text-black placeholder:font-[Outfit] text-lg font-[Outfit] outline-none' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" id="" />
              </div>
{/* section-2 */}
              <div className='flex flex-col lg:flex lg:flex-row md:grid md:grid-cols-2  gap-6  justify-center items-center py-8'>
                <div onClick={handleGuest} className='flex  justify-between  items-center  border-b-[0.1rem] pb-1  text-black capitalize  placeholder:text-black placeholder:font-[Outfit]  font-[Outfit] outline-none'>
                  <input type="text" value={selectedGuest} className='text-black capitalize pb-1 placeholder:text-black placeholder:font-[Outfit]  font-[Outfit] outline-none' placeholder='Number of Guests' id="" /><span><MdArrowDropDown className={`text-3xl cursor-pointer ${showGuestOpt ? 'rotate-180' : 'rotate-0'}`} /></span>
                  <div className='relative w-full right-[15rem] top-[1rem]'>
                    <div className={`pt-2 px-auto flex justify-center items-center transition-all duration-300 ease-in-out absolute z-10 ${showGuestOpt ? 'visible translate-y-0' : 'invisible  -translate-y-4'}`}>
                      <ul className='flex overflow-y-scroll scrollbar h-[12rem] w-[13rem] scroll-smooth  flex-col  gap-2 bg-black text-white font-[Outfit] text-lg backdrop-blur-md border border-white/20 rounded-xl  shadow-lg'>
                        {guests.map((guest, index) => (
                          <li
                            key={index}
                            onClick={() => handleSelectedGuest(guest)}
                            className='text-center py-2 capitalize font-[Antonio] cursor-pointer rounded-lg hover:bg-[#fffff0] hover:text-black'
                          >
                            {guest}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center border-b-[0.1rem] pb-1 '>
                  <div>

                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      placeholderText="Pick a date"
                      className='  text-black capitalize placeholder:text-black placeholder:font-[Outfit] text-base font-[Outfit] outline-none'
                      calendarClassName="!bg-black !text-white !rounded-xl !shadow-lg !border !border-gray-200 font-['Outfit']"
                      dayClassName={(d) => 'hover:!bg-pink-100 !text-white hover:!text-black rounded-md'}
                      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                        <div className="flex justify-between items-center px-4 py-2 bg-white rounded-t-lg border-b">
                          <button onClick={decreaseMonth} className="text-pink-500 hover:underline">
                            ◀
                          </button>
                          <span className="text-lg font-bold text-pink-600 font-['Outfit']">
                            {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
                          </span>
                          <button onClick={increaseMonth} className="text-pink-500 hover:underline">
                            ▶
                          </button>
                        </div>
                      )}
                    /></div>
                  <span><FaCalendar /></span>
                </div>


                {/* <input type="date" placeholder='DD/MM/YYYY' name="" id="" className='border-b-[0.1rem] pb-1  text-black capitalize placeholder:text-black placeholder:font-[Outfit] text-lg font-[Outfit] outline-none' /> */}
                <div className="flex justify-center items-center border-b-[0.1rem] pb-1">

                  <DatePicker
                    selected={time}
                    onChange={(time) => setTime(time)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15} // 15 minute gaps (customizable)
                    timeCaption="Time"
                    dateFormat="h:mm aa" // Format like 3:45 PM
                    placeholderText="Choose time"
                    className="px-4  text-black capitalize placeholder:text-black placeholder:font-[Outfit] text-base font-[Outfit] outline-none"

                    timeClassName={(t) =>
                      "px-3 py-1  rounded-md text-gray-700 hover:bg-pink-100 hover:text-pink-500 transition-all cursor-pointer"
                    }
                  />
                  <span><FaClock /></span>
                </div>
              </div>
              <div className='border  md:py-6  py-3  pt-2 px-2 rounded-lg '>
                <textarea value={message}
  onChange={(e) => setMessage(e.target.value)} className=' overflow-auto scrollbar overflow-y-scroll w-full h-full p-2 md:p-4  text-black capitalize placeholder:text-black placeholder:font-[Outfit] text-sm md:text-lg font-[Outfit] outline-none' placeholder='Message(Optional)' name="" id="" ></textarea>
              </div>
              <div className='flex py-6 justify-center items-center w-full '>
                <button className=' flex border-black border  w-full bg-black py-2 md:py-3 px-2  text-xl uppercase font-antonio cursor-pointer text-white scale-100 hover:scale-95 items-center justify-center rounded-xl' >
                  <input type="submit" placeholder='book a table' value="Book Now" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer className='pt-20' />
     <ToastContainer
  position="top-center"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>

    </div>
  )
}

export default Booking