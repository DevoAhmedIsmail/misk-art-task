import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

const PageHeader = ({links,title, subTitle}) => {
  return (
    <div className='bg-[var(--Primary-500)] py-[40px]'>
      <div className="wrapper">
        <Breadcrumbs
            links={links}
        />

        <div className="mt-[16px] text-white">
            <h1 className='mb-[24px] text-[36px] min-[600px]:text-[54px] font-[600] leading-[40px] min-[600px]:leading-[60px]'>{title}</h1>
            <h2 className='text-[14px] min-[600px]:text-[18px] leading-[20px] min-[600px]:leading-[24px]'>{subTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default PageHeader
