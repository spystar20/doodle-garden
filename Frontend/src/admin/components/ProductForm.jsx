import React from 'react'
import CategoryDropdown from './CategoryDropDown'
import FoodTypeSelector from './FoodTypeSelector'

const productForm = ({ formData, setFormData, isVeg, setIsveg }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-primary/20 p-3 transition-all duration-300 focus-within:border-primary hover:border-primary/60">
        <input
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="w-full border-none bg-transparent font-body outline-none placeholder:text-primary/50"
          placeholder="Enter your dish name"
          type="text"
        />
      </div>

      <div className="rounded-xl border border-primary/20 p-3 transition-all duration-300 focus-within:border-primary hover:border-primary/60">
        <textarea
          value={formData.desc}
          onChange={(e) => setFormData(prev => ({ ...prev, desc: e.target.value }))}
          className="min-h-[100px] w-full resize-none border-none bg-transparent font-body outline-none placeholder:text-primary/50"
          placeholder="Write a short description of the dish..."
        />
      </div>

      <CategoryDropdown
        value={formData.category}
        onChange={(value) => setFormData(prev => ({ ...prev, category: value }))}
      />

      <div className="rounded-xl border border-primary/20 p-3 transition-all duration-300 focus-within:border-primary hover:border-primary/60">
        <input
          value={formData.price}
          onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
          className="w-full border-none bg-transparent font-body outline-none placeholder:text-primary/50"
          placeholder="Enter price"
          type="number"
        />
      </div>

      <FoodTypeSelector value={isVeg} onChange={setIsveg} />
    </div>
  )
}

export default productForm