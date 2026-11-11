import React from 'react'
import { Slider } from "@mui/material";

const PriceRange = ({priceRange,filter,setFilter}) => {
  return (
   <div className="w-full xl:max-w-[350px]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs uppercase tracking-[0.2em] font-heading">
                Price range
              </h3>

              <span className="text-xs font-medium">
                ₹{filter.minPrice} — ₹{filter.maxPrice}
              </span>
            </div>

            {priceRange.max > 0 && (
              <Slider
                value={[filter.minPrice, filter.maxPrice]}
                min={priceRange.min}
                max={priceRange.max}
                step={50}
                onChange={(e, value) =>
                  setFilter(prev => ({
                    ...prev,
                    minPrice: value[0],
                    maxPrice: value[1]
                  }))
                }
                valueLabelDisplay="auto"
                sx={{
                  color: "#000",
                  height: 3,
                  "& .MuiSlider-track": {
                    border: "none",
                    height: 3
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#000",
                    opacity: 0.2,
                    height: 3
                  },
                  "& .MuiSlider-thumb": {
                    width: 14,
                    height: 14,
                    backgroundColor: "#FFFFF0",
                    border: "2px solid black",
                    "&:hover": {
                      boxShadow: "0 0 0 6px rgba(0,0,0,.08)"
                    }
                  }
                }}
              />
            )}
          </div>  )
}

export default PriceRange