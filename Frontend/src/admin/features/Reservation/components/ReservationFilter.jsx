
import React from 'react'
import { FormControl, Select, MenuItem } from '@mui/material'

const ReservationFilter = ({ statusFilter, setStatusFilter }) => {
  return (
    <FormControl size="small" sx={{ minWidth: 150 }}>
      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        sx={{
          borderRadius: '12px',
          backgroundColor: '#FFFFF0',
          color: '#000',
          fontFamily: 'Outfit',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0,0,0,0.2)'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000'
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000'
          }
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#FFFFF0',
              borderRadius: '12px',
              fontFamily: 'Outfit'
            }
          }
        }}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="confirmed">Confirmed</MenuItem>
        <MenuItem value="cancelled">Cancelled</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ReservationFilter
