import React from 'react'
import { ImCross } from 'react-icons/im'

const ProductImageUpload = ({ preview, onChange, onRemove }) => {
  return (
    <div className="relative">
      {preview ? (
        <div className="relative">
          <img
            src={preview}
            alt="Dish preview"
            className="h-64 w-full rounded-xl object-cover"
          />
          <button
            type="button"
            onClick={onRemove}
            className="absolute right-3 top-3 rounded-full bg-primary p-2 text-brand"
          >
            <ImCross size={12} />
          </button>
        </div>
      ) : (
        <label className="flex h-64 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/30 hover:border-primary">
          <span>Upload dish image</span>
          <span className="mt-2 text-sm opacity-60">JPEG, PNG or WEBP · Max 2MB</span>
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={onChange}
            className="hidden"
          />
        </label>
      )}
    </div>
  )
}

export default ProductImageUpload