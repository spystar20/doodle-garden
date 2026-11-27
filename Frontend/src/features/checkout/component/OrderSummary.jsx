
import React from 'react'
import { useCart } from '../../cart/hooks/cartHooks'
const OrderSummary = ({ orderType, orderSource, product, quantity }) => {
    const { data: cartData, isLoading } = useCart()
    const cartItems = cartData?.existingCart?.items || []
const items = orderSource === 'direct'
    ? [{ product, quantity }]
    : cartItems
    const subtotal = items.reduce(
        (total, item) => total + item.product.price * item.quantity, 0
    )

    const totalItems = items.reduce(
        (total, item) => total + item.quantity, 0
    )

    if (orderSource === 'cart' && isLoading) {
        return <p>Loading order summary...</p>
    }

    return (
        <div className="bg-white/60 border border-primary/10 rounded-xl p-5 flex flex-col gap-5">
            <h2 className="text-xl font-heading font-semibold">
                Order Summary
            </h2>

            <div className="flex flex-col gap-4">
                {orderSource==='cart'?(
                items.map(item => (
                    <div key={item.product._id} className="flex items-center gap-3">
                        <img
                            src={item.product.image}
                            alt={item.product.title}
                            className="w-16 h-16 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                            <h3 className="font-medium">{item.product.title}</h3>
                            <p className="text-sm text-primary/60">
                                Qty: {item.quantity}
                            </p>
                        </div>

                        <p className="font-medium">
                            ₹{item.product.price * item.quantity}
                        </p>
                    </div>
                ))
                ):(
                     <div  className="flex items-center gap-3">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-16 h-16 rounded-lg object-cover"
                        />

                        <div className="flex-1">
                            <h3 className="font-medium">{product.title}</h3>
                            <p className="text-sm text-primary/60">
                                Qty: {quantity}
                            </p>
                        </div>

                        <p className="font-medium">
                            ₹{product.price*quantity}
                        </p>
                    </div>
                )}
            </div>

       <div className="border-t border-primary/10 pt-4 flex flex-col gap-3">
    <div className="flex justify-between text-sm">
        <span>Items ({totalItems})</span>
        <span>₹{subtotal}</span>
    </div>

    <div className="flex justify-between text-sm">
        <span>Delivery Fee</span>
        <span>
            {orderType === 'pickup' ? 'Free' : '₹30'}
        </span>
    </div>

    <div className="border-t border-primary/10 pt-3 flex justify-between font-semibold">
        <span>Items Subtotal</span>
        <span>₹{subtotal}</span>
    </div>
</div>
        </div>
    )
}

export default OrderSummary

