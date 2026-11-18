
import React, { useRef } from 'react'
import { FaTruck, FaStore } from 'react-icons/fa6'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FaCalendar, FaClock } from 'react-icons/fa'

const OrderType = ({
    orderType,
    setOrderType,
    pickupDate,
    setPickupDate,
    pickupTimeSlot,
    setPickupTimeSlot
}) => {
const datepickerRef = useRef(null)
const timepickerRef = useRef(null)
    const getTime = (hours,minutes=0)=>{
const date = new Date()
date.setHours(hours,minutes,0,0)
return date   
 }
const isToday = pickupDate && pickupDate.toDateString()===new Date().toDateString()

    const filterPickupTime = (time)=>{
        if(!isToday) return true
        const now = new Date()
        const selectedMinutes = time.getHours()*60 + time.getMinutes()
        const currentMintues = now.getHours()*60+now.getMinutes()
        return selectedMinutes > currentMintues
    }
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-heading font-semibold">
                How would you like your order?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`p-5 rounded-xl border text-left flex items-center gap-4 duration-200 ${
                        orderType === 'delivery'
                            ? 'border-primary bg-primary/5'
                            : 'border-primary/20'
                    }`}
                >
                    <FaTruck className="text-2xl" />
                    <div>
                        <h3 className="font-heading font-semibold">Delivery</h3>
                        <p className="text-sm text-primary/60">Get it delivered to you</p>
                    </div>
                </button>

                <button
                    type="button"
                    onClick={() => setOrderType('pickup')}
                    className={`p-5 rounded-xl border text-left flex items-center gap-4 duration-200 ${
                        orderType === 'pickup'
                            ? 'border-primary bg-primary/5'
                            : 'border-primary/20'
                    }`}
                >
                    <FaStore className="text-2xl" />
                    <div>
                        <h3 className="font-heading font-semibold">Pickup</h3>
                        <p className="text-sm text-primary/60">Free restaurant pickup</p>
                    </div>
                </button>
            </div>

            {orderType === 'pickup' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center w-full border-b border-primary/50 pb-2">
                        <DatePicker
                            selected={pickupDate}
                            onChange={(date)=>{
                                setPickupDate(date),setPickupTimeSlot(null)
                            }}
 ref={datepickerRef}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Pick a pickup date"
                            className="w-full text-brand placeholder:text-primary/60 font-body outline-none bg-transparent"
                            calendarClassName="!bg-primary !text-brand !rounded-xl"
                        />
                       <button
    type="button"
    onClick={() => datepickerRef.current?.setOpen(true)}
    className="cursor-pointer"
>
    <FaCalendar />
</button>
                    </div>

                    <div className="flex justify-between items-center w-full border-b border-primary/50 pb-2">
                        <DatePicker
                        ref={timepickerRef}
                            selected={pickupTimeSlot}
                            onChange={setPickupTimeSlot}
                            minTime={getTime(10)}
                            maxTime={getTime(21,30)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Pickup time"
                                filterTime={filterPickupTime}
disabled={!pickupDate}
                            dateFormat="h:mm aa"
                            placeholderText="Choose pickup time"
                            className="w-full text-primary placeholder:text-primary/60 font-body outline-none bg-transparent"
                        />
                       <button
    type="button"
    disabled={!pickupDate}
    onClick={() => timepickerRef.current?.setOpen(true)}
    className="cursor-pointer disabled:opacity-40"
>
    <FaClock />
</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderType
