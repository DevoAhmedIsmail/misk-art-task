import React from 'react'
import FlexLayoutFooter from '../FlexLayoutFooter/FlexLayoutFooter'
import { useTranslations } from 'next-intl'

const InstitutionInfo = () => {
    const t = useTranslations("Footer")
  return (
    <FlexLayoutFooter className="mb-[40px] min-[800px]:mb-[32px] max-[800px]:gap-[8px]">
        <div className='flex-1 text-[var(--Primary-500)] font-[600]'>
            <p className='text-[18px] min-[800px]:text-[20px] leading-[24px] min-[800px]:leading-[30px]'>{t("affiliate")}</p>
            <p className='text-[24px] min-[800px]:text-[36px] leading-[27.5px] min-[800px]:leading-[40px]'>{t("foundation-name")}</p>
        </div>
        <div className='flex-1'>
            <p className='font-[600] text-[14px] leading-[20px]'>{t("foundation-word")}</p>
        </div>
    </FlexLayoutFooter>
  )
}

export default InstitutionInfo
