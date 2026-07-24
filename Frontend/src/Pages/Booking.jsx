import axios from 'axios';
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Parallax } from 'react-parallax'
import { MdArrowDropDown } from "react-icons/md";
import { api } from '../../axios/api'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendar } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import Footer from '../Components/Footer';
import { toast } from 'sonner';

const Booking = () => {
  const [showGuestOpt, setSowGuestOpt] = useState(false);
  const handleGuest = () => {
    setSowGuestOpt(!showGuestOpt)
  }
const [formData,setFormData] =useState({name:'',phone:'',guest:'',date:'',time:'',note:''})

const handleSubmit = async(e)=>{
  try{
    e.preventDefault()
const res = await api.post('/auth/reservation',formData)
toast.success(  "Your reservation request has been submitted successfully. We'll confirm it shortly.")
setSowGuestOpt(false)
console.log(res)
setFormData({name:'',phone:'',guest:'',date:'',time:'',note:''})
  }catch(err){
    console.log(err)
  }
}
  const guests = ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', 'more than 5'];


  return (
   <div className="bg-brand w-full text-primary">

  {/* HERO */}
  <Parallax
    className="w-full min-h-[60vh] md:h-[46vh] lg:min-h-screen"
    bgImageSizes="cover"
    bgImage="https://i.pinimg.com/736x/2b/a9/dc/2ba9dcc8de042bbac2657c6777661cb7.jpg"
    strength={300}
  >
    <div className="absolute inset-0 bg-primary/30 min-h-screen"></div>

    <div className="text-center w-full flex justify-center items-center flex-col text-secondary h-[68vh] md:h-[46vh] lg:h-[85vh] lg:py-20 px-5">

      <h2 className="md:text-7xl capitalize text-4xl font-semibold font-brand">
        reserve a table
      </h2>

      <p className="font-body px-5 md:max-w-8/12 mt-3 text-center text-xs md:px-32 md:text-lg font-semibold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil
        sed, corrupti laudantium nesciunt minus nobis vero voluptatibus.
      </p>

    </div>
  </Parallax>


  {/* RESERVATION SECTION */}
  <div className="md:py-14 py-6">

    {/* HEADING */}
    <div className="flex flex-col gap-3 justify-center py-6 items-center md:py-10 px-5">

      <h2 className="md:text-5xl text-3xl font-semibold font-heading capitalize text-center">
        online reservation
      </h2>

      <p className="text-sm text-center font-medium font-body capitalize text-primary/70">
        booking request{" "}
        <span className="text-primary font-semibold">
          +91 234 567 890
        </span>{" "}
        or fill out the form
      </p>

    </div>


    {/* FORM WRAPPER */}
    <div className="flex md:pt-12 px-5 w-full justify-center items-center flex-col gap-4 py-5">

      <div className="flex flex-col w-full lg:w-[70%] md:w-[85%] gap-12 justify-start p-6 md:p-10 rounded-2xl border border-primary/20 shadow-lg">

        <form>

          {/* SECTION 1 */}
          <div className="flex gap-6 flex-col lg:flex-row md:grid md:grid-cols-2 justify-center items-center">

            <input
              type="text"
              className="border-b-[0.1rem] border-primary/50 pb-2 w-full text-primary capitalize placeholder:text-primary/60 placeholder:font-body text-lg font-body outline-none focus:border-primary transition"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              name="name"
            />

            <input
              type="tel"
              className="border-b-[0.1rem] border-primary/50 pb-2 w-full text-primary capitalize placeholder:text-primary/60 placeholder:font-body text-lg font-body outline-none focus:border-primary transition"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
              name="phone"
            />

          </div>


          {/* SECTION 2 */}
          <div className="flex flex-col lg:flex-row md:grid md:grid-cols-2 gap-6 justify-center items-center py-8">

            {/* GUEST SELECT */}
            <div
              onClick={handleGuest}
              className="relative w-full flex justify-between items-center border-b-[0.1rem] border-primary/50 pb-2 text-primary capitalize font-body outline-none cursor-pointer"
            >

              <input
                type="text"
                value={formData.guest}
                readOnly
                className="text-primary capitalize bg-transparent w-full placeholder:text-primary/60 font-body outline-none cursor-pointer"
                placeholder="Number of Guests"
              />

              <span>
                <MdArrowDropDown
                  className={`text-3xl cursor-pointer transition-transform ${
                    showGuestOpt ? "rotate-180" : "rotate-0"
                  }`}
                />
              </span>

              <div className="absolute w-full left-0 top-10">

                <div
                  className={`pt-2 flex justify-center items-center transition-all duration-300 ease-in-out absolute z-10 ${
                    showGuestOpt
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-4 opacity-0"
                  }`}
                >

                  <ul className="flex overflow-y-scroll scrollbar h-[12rem] w-[13rem] scroll-smooth flex-col gap-2 bg-primary text-brand font-body text-lg backdrop-blur-md border border-brand/20 rounded-xl shadow-lg p-2">

                    {guests.map((guest, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            guest: guest,
                          }))
                        }
                        className="text-center py-2 capitalize font-heading cursor-pointer rounded-lg hover:bg-brand hover:text-primary transition"
                      >
                        {guest}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </div>


            {/* DATE */}
            <div className="flex justify-between items-center w-full border-b-[0.1rem] border-primary/50 pb-2">

              <DatePicker
                selected={formData.date}
                onChange={(date) =>
                  setFormData((prev) => ({
                    ...prev,
                    date: date,
                  }))
                }
                placeholderText="Pick a date"
                className="w-full text-primary capitalize placeholder:text-primary/60 placeholder:font-body text-base font-body outline-none bg-transparent"
                calendarClassName="!bg-primary !text-brand !rounded-xl !shadow-lg !border !border-brand/20 font-body"
                dayClassName={(d) =>
                  "hover:!bg-brand !text-brand hover:!text-primary rounded-md transition"
                }
                renderCustomHeader={({
                  date,
                  decreaseMonth,
                  increaseMonth,
                }) => (
                  <div className="flex justify-between items-center px-4 py-2 bg-brand rounded-t-lg border-b border-primary/20">

                    <button
                      type="button"
                      onClick={decreaseMonth}
                      className="text-primary hover:scale-110 transition"
                    >
                      ◀
                    </button>

                    <span className="text-lg font-bold text-primary font-body">
                      {date.toLocaleString("default", {
                        month: "long",
                      })}{" "}
                      {date.getFullYear()}
                    </span>

                    <button
                      type="button"
                      onClick={increaseMonth}
                      className="text-primary hover:scale-110 transition"
                    >
                      ▶
                    </button>

                  </div>
                )}
              />

              <span className="text-primary">
                <FaCalendar />
              </span>

            </div>


            {/* TIME */}
            <div className="flex justify-between items-center w-full border-b-[0.1rem] border-primary/50 pb-2">

              <DatePicker
                selected={formData.time}
                onChange={(time) =>
                  setFormData((prev) => ({
                    ...prev,
                    time: time,
                  }))
                }
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Choose time"
                className="w-full px-4 text-primary capitalize placeholder:text-primary/60 placeholder:font-body text-base font-body outline-none bg-transparent"
                timeClassName={(t) =>
                  "px-3 py-1 rounded-md text-primary hover:bg-brand hover:text-primary transition-all cursor-pointer"
                }
              />

              <span className="text-primary">
                <FaClock />
              </span>

            </div>

          </div>


          {/* MESSAGE */}
          <div className="border border-primary/20 md:py-6 py-3 pt-2 px-2 rounded-lg">

            <textarea
              value={formData.note}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  note: e.target.value,
                }))
              }
              className="overflow-auto scrollbar overflow-y-scroll w-full h-full p-2 md:p-4 text-primary capitalize placeholder:text-primary/60 placeholder:font-body text-sm md:text-lg font-body outline-none bg-transparent resize-none"
              placeholder="Message (Optional)"
            />

          </div>


          {/* SUBMIT */}
          <div className="flex py-6 justify-center items-center w-full">

            <button
              type="button"
              onClick={handleSubmit}
              className="flex border-primary border w-full bg-primary py-2 md:py-3 px-2 text-xl uppercase font-heading cursor-pointer text-brand scale-100 hover:scale-[0.98] transition-transform items-center justify-center rounded-xl"
            >
              Book Now
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>

</div>
  )
}

export default Booking