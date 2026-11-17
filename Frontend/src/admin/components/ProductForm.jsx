import React, { Children } from 'react'
import CategoryDropdown from './CategoryDropdown'
import FoodTypeSelector from './FoodTypeSelector'
import ProductImageUpload from './ProductImageUpload'

const ProductForm = ({
  formData,
  setFormData,
  isVeg,
  setIsveg,
  preview,
  handleImage,
  handleRemoveImage,children
}) => {
  return (
        <form className="flex flex-col gap-4">
    <div className="grid w-full max-w-5xl grid-cols-1 gap-8 rounded-2xl bg-brand p-6 text-primary shadow-xl lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        {/* Dish Name */}
        <div className="rounded-xl border border-primary/20 p-3 transition-all duration-300 focus-within:border-primary hover:border-primary/60">
          <input
            value={formData.title}
            onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full border-none bg-transparent font-body outline-none placeholder:text-primary/50"
            placeholder="Enter your dish name"
            type="text"
          />
        </div>

        {/* Description */}
        <div className="rounded-xl border border-primary/20 p-3 transition-all duration-300 focus-within:border-primary hover:border-primary/60">
          <textarea
            value={formData.desc}
            onChange={e => setFormData(prev => ({ ...prev, desc: e.target.value }))}
            className="min-h-[100px] w-full resize-none border-none bg-transparent font-body outline-none placeholder:text-primary/50"
            placeholder="Write a short description of the dish..."
          />
        </div>

        <CategoryDropdown
          value={formData.category}
          onChange={value => setFormData(prev => ({ ...prev, category: value }))}
        />

        {/* Price */}
        <div className="rounded-xl border border-primary/20 p-3 transition-all duration-300 focus-within:border-primary hover:border-primary/60">
          <input
            value={formData.price}
            onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
            className="w-full border-none bg-transparent font-body outline-none placeholder:text-primary/50"
            placeholder="Enter price"
            type="number"
          />
        </div>

        <FoodTypeSelector value={isVeg} onChange={setIsveg} />
      </div>

      <ProductImageUpload
        preview={preview}
        onChange={handleImage}
        onRemove={handleRemoveImage}
      />
  <div className="lg:col-span-1">
    {children}
  </div>    </div>
        

    </form>
  )
}

export default ProductForm