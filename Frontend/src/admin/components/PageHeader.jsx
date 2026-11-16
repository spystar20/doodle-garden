import React from 'react'

const PageHeader = ({title,desc}) => {
  return (
<div className="flex flex-col gap-2">
    <h2 className="font-heading text-4xl font-semibold">
      {title}
    </h2>

    <p className="text-sm text-brand/60">
    {desc}
    </p>
  </div>  )
}

export default PageHeader