
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaBoxOpen } from 'react-icons/fa6'
import { IoArrowForward } from 'react-icons/io5'

const MyOrders = ({ orders = [], isLoading = false }) => {
    const navigate = useNavigate()

    const getStatusStyle = (status) => {
        const styles = {
            placed: 'bg-blue-100 text-blue-700',
            preparing: 'bg-yellow-100 text-yellow-700',
            ready: 'bg-purple-100 text-purple-700',
            delivered: 'bg-green-100 text-green-700',
            cancelled: 'bg-red-100 text-red-700'
        }

        return styles[status?.toLowerCase()] || 'bg-gray-100 text-gray-700'
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-brand flex items-center justify-center">
                <p className="font-body">Loading your orders...</p>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-brand px-4 py-10 md:px-10">
            <div className="max-w-6xl mx-auto">

                <div className="mb-10">
                    <p className="font-accent text-2xl">Your dining journey</p>
                    <h1 className="text-4xl font-heading font-semibold">
                        My Orders
                    </h1>
                    <p className="text-primary/60 mt-2 font-body">
                        Keep track of your delicious moments.
                    </p>
                </div>

                {orders.length === 0 ? (
                    <div className="min-h-[350px] flex flex-col items-center justify-center text-center gap-4 border border-primary/10 rounded-2xl bg-white/50 p-8">
                        <FaBoxOpen className="text-5xl text-primary/40" />

                        <h2 className="text-2xl font-heading font-semibold">
                            No orders yet!
                        </h2>

                        <p className="text-primary/60 max-w-sm">
                            Your next delicious meal is just a few clicks away.
                        </p>

                        <button
                            onClick={() => navigate('/Menu')}
                            className="bg-primary text-brand px-7 py-3 rounded-full font-body"
                        >
                            Explore Menu
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white/70 border border-primary/10 rounded-2xl p-5 md:p-7"
                            >
                                <div className="flex flex-wrap justify-between gap-4 border-b border-primary/10 pb-5">
                                    <div>
                                        <p className="text-sm text-primary/50">
                                            Order ID
                                        </p>
                                        <p className="font-medium">
                                            #{order._id}
                                        </p>
                                        <p className="text-sm text-primary/50 mt-1">
                                            {new Date(order.createdAt).toLocaleDateString('en-IN')}
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-start sm:items-end gap-2">
                                        <span className={`px-4 py-1 rounded-full text-xs font-semibold capitalize ${getStatusStyle(order.orderStatus)}`}>
                                            {order.orderStatus}
                                        </span>

                                        <span className="text-sm text-primary/60 capitalize">
                                            {order.paymentType} · {order.paymentStatus || 'Pending'}
                                        </span>
                                    </div>
                                </div>

                                <div className="py-5 flex flex-col gap-4">
                                    {order.items?.map((item, index) => (
                                        <div
                                            key={item._id || index}
                                            className="flex items-center gap-4"
                                        >
                                            <img
                                                src={item.productId?.image}
                                                alt={item.title}
                                                className="w-16 h-16 rounded-xl object-cover bg-primary/5"
                                            />

                                            <div className="flex-1">
                                                <h3 className="font-medium">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-primary/50">
                                                    Qty: {item.quantity}
                                                </p>
                                            </div>

                                            <p className="font-medium">
                                                ₹{item.price * item.quantity}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-primary/10 pt-5 flex flex-wrap justify-between items-center gap-4">
                                    <div>
                                        <p className="text-sm text-primary/50">
                                            Total Amount
                                        </p>
                                        <p className="text-xl font-semibold">
                                            ₹{order.amount}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() => navigate(`/my-orders/${order._id}`)}
                                        className="flex items-center gap-2 bg-primary text-brand px-5 py-3 rounded-full text-sm hover:bg-primary/80 transition"
                                    >
                                        View Details
                                        <IoArrowForward />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyOrders
