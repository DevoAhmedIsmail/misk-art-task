import { useTranslations } from 'next-intl'
import Link from 'next/link'
import footerData from '@/constant/footerData'

const FooterLinks = () => {
    const t = useTranslations("Footer")
  return (
    <div className='grid grid-cols-3 min-[890px]:grid-cols-5 gap-y-[28px]'>
        {
            footerData.map((footerItem, index)=>(
                <div key={index} className=''>
                    <p className='p-[8px] text-[var(--Primary-400)] font-[600] text-[12px] leading-[15.5px] mb-[8px]'>{t(footerItem.title)}</p>
                    <div className='flex flex-col gap-[4px]'>
                        {
                            footerItem.links.map((link,linkIndex)=>(
                                <Link 
                                    key={`link-${linkIndex}`} 
                                    href={link.href} 
                                    className='p-[8px] font-[600] leading-[24px] text-[14px] min-[890px]:text-[16px]'
                                >
                                    {t(link.name)}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default FooterLinks
