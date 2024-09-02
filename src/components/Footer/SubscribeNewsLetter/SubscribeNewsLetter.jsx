import { useTranslations } from 'next-intl'
import Button from '@/components/Shared/Button/Button'
import FlexLayoutFooter from '../FlexLayoutFooter/FlexLayoutFooter'

const SubscribeNewsLetter = () => {
  const t = useTranslations("Footer")
  return (
    <FlexLayoutFooter className="my-[40px] min-[800px]:my-[64px] max-[800px]:gap-[16px]">
      <div className='flex-1 border-b border-[var(--Primary-500)] py-[8px] w-full flex items-center'>
        <input
          type='text'
          placeholder={t("email")}
          className='flex-1 w-full h-full text-[14px] leading-[20px] text-[var(--Primary-200)] placeholder:text-[var(--Primary-200)] bg-transparent outline-none'
        />
        <Button classes='!px-[16px] !py-[8px] text-[12px] leading-[15px] text-white !font-[400]'>
          {t("subscribe")}
        </Button>
      </div>

      <div className="flex-1 ">
        <p className='leading-[24px]'>{t("subscribe-news")}</p>
      </div>
    </FlexLayoutFooter>
  )
}

export default SubscribeNewsLetter
