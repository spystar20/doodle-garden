
import React from 'react'
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
                            onChange={setPickupDate}
                            minDate={new Date()}
                            dateFormat="dd/MM/yyyy"
                            placeholderText="Pick a pickup date"
                            className="w-full text-primary placeholder:text-primary/60 font-body outline-none bg-transparent"
                            calendarClassName="!bg-primary !text-brand !rounded-xl"
                        />
                        <FaCalendar />
                    </div>

                    <div className="flex justify-between items-center w-full border-b border-primary/50 pb-2">
                        <DatePicker
                            selected={pickupTimeSlot}
                            onChange={setPickupTimeSlot}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={60}
                            timeCaption="Pickup time"
                            dateFormat="h:mm aa"
                            placeholderText="Choose pickup time"
                            className="w-full text-primary placeholder:text-primary/60 font-body outline-none bg-transparent"
                        />
                        <FaClock />
                    </div>
                </div>
            )}
        </div>
    )
}

export default OrderType
