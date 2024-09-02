import Link from "next/link"
import {useTranslations} from 'next-intl';
import NavSearch from "./NavSearch/NavSearch";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
import UserInfo from "./UserInfo/UserInfo";
import topBarData from "@/constant/topBarData";

const TopBar = () => {
    const t = useTranslations('TopBar');

    return (
        <div className="hidden min-[1000px]:block pt-[16px] pb-[12px] bg-white">
            <div className="wrapper">
                <div className="flex items-center justify-between">
                    <ul className="flex items-center gap-[24px]">
                        {
                            topBarData.map((link, index) => (
                                <li key={index} className="py-[8px]">
                                    <Link href={link.href} className="text-[var(--Neutrals-purple-500)] text-[14px] font-[600] leading-[20.44px]">{t(link.name)}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    
                    <div className="flex items-center gap-[12px]">
                        <NavSearch />
                        <ChangeLanguage />
                        <UserInfo />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TopBar
