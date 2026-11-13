
import React from 'react'

const DeliveryForm = ({ formData, handleChange, orderType }) => {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-xl font-heading font-semibold">
                Your Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <label className="font-body text-sm">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        className="border border-primary/20 rounded-lg p-3 outline-none focus:border-primary"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-body text-sm">Phone Number</label>
                    <input
                         type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Enter 10-digit phone number"
    pattern="[6-9][0-9]{9}"
    maxLength={10}
    required
    title="Enter a valid 10-digit Indian mobile number"
                        className="border border-primary/20 rounded-lg p-3 outline-none focus:border-primary"
                    />
                </div>
            </div>

            {orderType === 'delivery' && (
                <>
                    <div className="flex flex-col gap-2">
                        <label className="font-body text-sm">Delivery Address</label>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="House no., street, area"
                            required
                            rows={3}
                            className="border border-primary/20 rounded-lg p-3 outline-none focus:border-primary resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="font-body text-sm">City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter city"
                                required
                                className="border border-primary/20 rounded-lg p-3 outline-none focus:border-primary"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-body text-sm">Pincode</label>
                            <input
                                   type="text"
    name="pincode"
    value={formData.pincode}
    onChange={handleChange}
    placeholder="Enter 6-digit pincode"
    pattern="[1-9][0-9]{5}"
    maxLength={6}
    required
    title="Enter a valid 6-digit pincode"
                                className="border border-primary/20 rounded-lg p-3 outline-none focus:border-primary"
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default DeliveryForm
