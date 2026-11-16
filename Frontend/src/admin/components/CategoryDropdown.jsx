
import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'

const categoryOptions = [
  { value: 'appetizer', label: 'Appetizer' },
  { value: 'salad', label: 'Salad' },
  { value: 'soup', label: 'Soup' },
  { value: 'pizza', label: 'Pizza' },
  { value: 'pasta', label: 'Pasta' },
  { value: 'burger', label: 'Burger' },
  { value: 'main-course', label: 'Main Course' },
  { value: 'rice-bowls', label: 'Rice Bowls' },
  { value: 'dessert', label: 'Dessert' },
  { value: 'beverages', label: 'Beverages' },
]

const CategoryDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false)

  const selectedCategory = categoryOptions.find(
    item => item.value === value
  )

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="flex cursor-pointer items-center justify-between rounded-xl border border-primary/20 p-3 hover:border-primary"
      >
        <span>{selectedCategory?.label || 'Select Category'}</span>
        <IoChevronDown className={`transition duration-300 ${open ? 'rotate-180' : ''}`} />
      </div>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-xl border border-primary/20 bg-primary p-2 shadow-xl">
          {categoryOptions.map(item => (
            <div
              key={item.value}
              onClick={() => {
                onChange(item.value)
                setOpen(false)
              }}
              className={`cursor-pointer rounded-lg px-4 py-3 transition ${
                value === item.value
                  ? 'bg-brand text-primary'
                  : 'text-brand hover:bg-brand/10'
              }`}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CategoryDropdown
