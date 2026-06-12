import { useScroll } from 'motion/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { FaSearch, FaCheck, FaTimes, FaEye } from "react-icons/fa";
import { api } from '../../../axios/api';
const ReservationTable = () => {
    const [data,setData] = useState([])
     const fetchData = async()=>{
            try{
const res = await api.get('/auth/admin/reservation')
setData(res?.data?.reservation)
console.log(res)
            }catch(Err){
                console.log(Err)
            }
        }
    useEffect(()=>{
       fetchData()
    },[])
    const getStatusStyle =(status)=>{
        switch (status) {
            case 'confirmed':
                return 'bg-green-500/20 text-green-600'

            case 'pending':
                return 'bg-yellow-500/20 text-yellow-600'             
            case 'cancelled':
                return 'bg-red-500/20 text-red-600'
        }
    }
  return (

    <div className="w-full min-h-screen px-8 py-6 text-biege font-[Outfit]">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-semibold">Reservations</h1>
        <p className="text-biege/70 mt-1">
          Manage and review customer booking requests.
        </p>
      </div>

    

      {/* Search + Filter */}
      <div className="border-biege/45  border rounded-2xl p-3 mb-6 flex items-center justify-between gap-4">

        <div className="flex items-center gap-3 border border-biege/20 rounded-xl px-4 py-2 w-full max-w-md">
          <FaSearch className="text-biege/50" />
          <input
            type="text"
            placeholder="Search customer..."
            className="w-full outline-none bg-transparent text-biege"
          />
        </div>

        <select className="border bg-biege/90 rounded-xl px-4 py-2 text-black outline-none">
          <option>All</option>
          <option>Pending</option>
          <option>Confirmed</option>
          <option>Cancelled</option>
        </select>

      </div>

      {/* Table */}
      <div className="bg-biege rounded-2xl overflow-hidden">

        <table className="w-full text-black">

          <thead className="border-b border-black/10 bg-black/5">
            <tr>
              <th className="text-left px-6 py-4 font-semibold">Guest</th>
              <th className="text-left px-6 py-4 font-semibold">Phone</th>
              <th className="text-left px-6 py-4 font-semibold">Date</th>
              <th className="text-left px-6 py-4 font-semibold">Time</th>
              <th className="text-left px-6 py-4 font-semibold">Guests</th>
              <th className="text-left px-6 py-4 font-semibold">Status</th>
              <th className="text-left px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody>
{data.map((data,index)=>(
            <tr key={index} className="border-b border-black/10">
              <td className="px-6 py-4">{data.name}</td>
              <td className="px-6 py-4">{data.phone}</td>
              <td className="px-6 py-4">{new Date(data.date).toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'})}</td>
              <td className="px-6 py-4">{new Date(data.time).toLocaleTimeString('en-IN')}</td>
              <td className="px-6 py-4">{data.guest}</td>

              <td className="px-6 py-4">

                <span className={`${getStatusStyle(data.status)} px-3 py-1 rounded-full text-sm`}>
                {data.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex gap-2">

                  <button className="p-2 rounded-lg bg-green-500 text-white">
                    <FaCheck />
                  </button>

                  <button className="p-2 rounded-lg bg-red-500 text-white">
                    <FaTimes />
                  </button>

                  <button className="p-2 rounded-lg bg-black text-biege">
                    <FaEye />
                  </button>

                </div>
              </td>
            </tr>
))}
        

          </tbody>

        </table>

      </div>

    </div>
)
}

export default ReservationTable