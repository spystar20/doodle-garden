import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Menu, MenuItem } from '@mui/material'
import { FaSearch, FaCheck, FaTimes, FaEye } from "react-icons/fa";
import ReservationSearch from '../components/ReservationSearch';
import ReservationFilter from '../components/ReservationFilter'
import {
  FormControl,
  Select,
  
} from '@mui/material'
import { toast } from 'sonner';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material'
import { api } from '../../../../../axios/api';
import PageHeader from '../../../components/PageHeader';
const ReservationTable = () => {
    const [data,setData] = useState([])
    const [Statusopt,setStatusOpt] = useState(null)
    const [search, setSearch] = useState('')
const [statusFilter, setStatusFilter] = useState('all')
    const filteredData = data.filter((reservation) => {
  return statusFilter === 'all' || reservation.status === statusFilter
})
    const handleStatusToggle =(id)=>{
setStatusOpt(prev=> prev ===id ? null:id)}

const handleStatus = async(reservationId,status)=>{
  try{
const res = await api.put(`/admin/reservation/${reservationId}/status`,{status})
console.log(res)
  toast.success('status updated')
  fetchData()
  }catch(err){
    console.log(err)
  }
}
     const fetchData = async()=>{
            try{
const res = await api.get('/admin/reservation/')
setData(res?.data?.reservation)
console.log(res)
            }catch(Err){
                console.log(Err)
            }}
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

    <div className="w-full min-h-screen px-8 py-6 text-brand font-[Outfit]">

      {/* Header */}
<PageHeader title="Reservations"  desc="  Manage and review customer booking requests."/>
      {/* Search + Filter */}
<div className="border-biege/45 border rounded-2xl p-3 mb-6 flex items-center justify-between gap-4">
  <ReservationSearch search={search} setSearch={setSearch} />
  <ReservationFilter
    statusFilter={statusFilter}
    setStatusFilter={setStatusFilter}
  />
</div>

<TableContainer
  component={Paper}
  sx={{
    borderRadius: '16px',
    backgroundColor: '#FFFFF0',
    overflowX: 'auto',
    boxShadow: 'none'
  }}
>
  <Table sx={{ minWidth: 900 }}>
    <TableHead sx={{ backgroundColor: '#00000008' }}>
      <TableRow>
        {['Guest', 'Phone', 'Date', 'Time', 'Guests', 'Status', 'Actions'].map((heading) => (
          <TableCell
            key={heading}
            sx={{
              fontFamily: 'Outfit',
              fontWeight: 600,
              color: '#000',
              whiteSpace: 'nowrap',
              borderBottom: '1px solid #00000020'
            }}
          >
            {heading}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>

    <TableBody>
      {filteredData.map((reservation) => (
        <TableRow
          key={reservation._id}
          hover
          sx={{
            '&:last-child td': { borderBottom: 0 }
          }}
        >
          <TableCell sx={{ fontFamily: 'Outfit', color: '#000' }}>
            {reservation.name}
          </TableCell>

          <TableCell sx={{ fontFamily: 'Outfit', color: '#000' }}>
            {reservation.phone}
          </TableCell>

          <TableCell sx={{ fontFamily: 'Outfit', color: '#000', whiteSpace: 'nowrap' }}>
            {new Date(reservation.date).toLocaleDateString('en-IN', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}
          </TableCell>

          <TableCell sx={{ fontFamily: 'Outfit', color: '#000', whiteSpace: 'nowrap' }}>
            {new Date(reservation.time).toLocaleTimeString('en-IN')}
          </TableCell>

          <TableCell sx={{ fontFamily: 'Outfit', color: '#000' }}>
            {reservation.guest}
          </TableCell>

          {/* Status */}
          <TableCell sx={{ position: 'relative', fontFamily: 'Outfit' }}>
            <span
              onClick={() => handleStatusToggle(reservation._id)}
              className={`${getStatusStyle(reservation.status)} px-4 py-1 rounded-full text-sm cursor-pointer capitalize whitespace-nowrap`}
            >
              {reservation.status}
            </span>

            {Statusopt === reservation._id && (
              <div className="absolute left-4 top-[70%] bg-biege shadow-2xl z-20 rounded-lg border border-black/20 min-w-[120px] flex flex-col text-black">
                {reservation.status !== 'confirmed' && (
                  <button
                    onClick={() => {
                      handleStatus(reservation._id, 'confirmed')
                      handleStatusToggle(reservation._id)
                    }}
                    className="px-3 py-2 w-full text-sm text-left hover:bg-green-100/50 capitalize"
                  >
                    Confirmed
                  </button>
                )}

                {reservation.status !== 'cancelled' && (
                  <button
                    onClick={() => {
                      handleStatus(reservation._id, 'cancelled')
                      handleStatusToggle(reservation._id)
                    }}
                    className="px-3 py-2 w-full text-sm text-left hover:bg-red-100/50 capitalize"
                  >
                    Cancelled
                  </button>
                )}
              </div>
            )}
          </TableCell>

          {/* Actions */}
          <TableCell>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleStatus(reservation._id, 'confirmed')}
                disabled={reservation.status === 'confirmed'}
                title="Confirm reservation"
                className="p-2 rounded-lg bg-green-500 text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaCheck />
              </button>

              <button
                onClick={() => handleStatus(reservation._id, 'cancelled')}
                disabled={reservation.status === 'cancelled'}
                title="Cancel reservation"
                className="p-2 rounded-lg bg-red-500 text-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <FaTimes />
              </button>

              <button
                title="View reservation"
                className="p-2 rounded-lg bg-black text-brand cursor-pointer"
              >
                <FaEye />
              </button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    </div>
)
}

export default ReservationTable