
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const ReservationSearch = ({ search, setSearch }) => {
  return (
    <div className="flex items-center gap-3 border border-biege/20 rounded-xl px-4 py-2 w-full max-w-md">
      <FaSearch className="text-biege/50" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search guest name or phone..."
        className="w-full outline-none bg-transparent text-biege"
      />
    </div>
  )
}

export default ReservationSearch
