import React from 'react'

const Categories = ({ categories, selectedCategory, setFilter,filter }) => {
  return (
  <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter(prev => ({ ...prev, category: "" }))}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition ${
                !filter.category
                  ? "bg-primary text-brand"
                  : "border border-primary/20 hover:bg-primary hover:text-brand"
              }`}
            >
              All dishes
            </button>

            {categories.map(category => (
              <button
                key={category}
                onClick={() =>
                  setFilter(prev => ({ ...prev, category }))
                }
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider transition ${
                  filter.category === category
                    ? "bg-primary text-brand"
                    : "border border-primary/20 hover:bg-primary hover:text-brand"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>  )
}

export default Categories