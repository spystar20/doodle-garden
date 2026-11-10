import React from 'react'

const FilterButton = ({label, value, active,setFilter}) => {
  return (
  <button
      onClick={() => setFilter(prev => ({ ...prev, isVeg: value }))}
      className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
        active
          ? "bg-primary text-brand"
          : "border border-primary/20 text-primary hover:bg-primary hover:text-brand"
      }`}
    >
      {label}
    </button>  )
}

export default FilterButton