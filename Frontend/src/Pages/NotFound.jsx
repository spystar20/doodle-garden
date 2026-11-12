
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-brand flex flex-col items-center justify-center px-6 text-primary text-center">
            <h1 className="text-8xl md:text-9xl font-heading font-bold">404</h1>
            <h2 className="text-2xl md:text-3xl font-heading mt-4">
                Oops! This page is missing.
            </h2>
            <p className="font-body text-primary/60 mt-3 max-w-md">
                Looks like this page wandered off the menu.
            </p>
            <div className="flex gap-4 mt-8 flex-wrap justify-center">
                <Link to="/" className="bg-primary text-brand px-6 py-3 rounded-full font-body">
                    Back to Home
                </Link>
                <Link to="/Menu" className="border border-primary px-6 py-3 rounded-full font-body">
                    Explore Menu
                </Link>
            </div>
        </div>
    )
}

export default NotFound
