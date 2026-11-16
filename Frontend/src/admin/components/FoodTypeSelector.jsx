import React from 'react'

const FoodTypeSelector = ({ value, onChange }) => {
  return (
    <div className="flex gap-4">
      <button
        type="button"
        onClick={() => onChange(true)}
        className={`rounded-xl border px-5 py-3 ${
          value === true
            ? 'border-primary bg-primary text-brand'
            : 'border-primary/20'
        }`}
      >
        Veg
      </button>

      <button
        type="button"
        onClick={() => onChange(false)}
        className={`rounded-xl border px-5 py-3 ${
          value === false
            ? 'border-primary bg-primary text-brand'
            : 'border-primary/20'
        }`}
      >
        Non-Veg
      </button>
    </div>
  )
}

export default FoodTypeSelector