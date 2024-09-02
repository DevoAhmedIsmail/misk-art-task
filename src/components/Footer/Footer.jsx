import { useTranslations } from 'next-intl'
import FooterLinks from './FooterLinks/FooterLinks'
import SubscribeNewsLetter from './SubscribeNewsLetter/SubscribeNewsLetter'
import InstitutionInfo from './InstitutionInfo/InstitutionInfo'
import InstitutionMedia from './InstitutionMedia/InstitutionMedia'

const Footer = () => {
    const t = useTranslations("Footer")
  return (
    <footer className='bg-[var(--Secondary-Creamy-25)] pt-[48px] min-[890px]:pt-[80px] pb-[80px] min-[890px]:pb-[32px]'>
        <div className="wrapper">
            <FooterLinks />
            <SubscribeNewsLetter />
            <InstitutionInfo />
            <InstitutionMedia />

            <p className='leading-[24px]'>{t("copyright")}</p>
            
        </div>
    </footer>
  )
}

export default Footer
