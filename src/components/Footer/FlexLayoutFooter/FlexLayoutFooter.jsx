import React from 'react'

const FlexLayoutFooter = ({children, className}) => {
  return (
    <div className={`${className} flex items-start min-[800px]:items-center justify-between flex-col min-[800px]:flex-row gap-[100px] min-[1100px]:gap-[212px]`}>
      {children}
    </div>
  )
}

export default FlexLayoutFooter
