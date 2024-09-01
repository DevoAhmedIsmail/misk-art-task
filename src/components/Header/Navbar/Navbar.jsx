import Image from "next/image"
import {useTranslations} from 'next-intl';

import navbarData from "@/constant/navbarData"
import Link from "next/link"
import Dropdown from "../../Shared/Dropdown/Dropdown"
// images
import logo from "/public/assets/icons/Logo.svg"
import NavSearch from "../../Header/TopBar/NavSearch/NavSearch";
import ChangeLanguage from "../../Header/TopBar/ChangeLanguage/ChangeLanguage";
import SideMenu from "../SideMenu/SideMenu";

const Navbar = () => {
  const t = useTranslations('Navbar');
  return (
    <div className='bg-[var(--Secondary-Creamy-25)] py-[24px] min-[1000px]:py-[16px]'>
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <div className="w-[126px] h-[56px] relative">
              <Image src={logo} fill alt="logo" className="object-cover"  />
          </div>

          <ul className="hidden min-[1000px]:flex items-center gap-[32px]">
            {
              // Navbar Links
              navbarData.map((item,index)=>(
                <li key={index}>
                  {
                    item.href ? (
                      <Link href={item.href} className="font-[600] text-nowrap">
                        {t(item.name)}
                      </Link>
                    ) : (
                      <Dropdown
                        subElement={item.subElement}
                        translateText="Navbar"
                      >
                        <p className="font-[600] text-nowrap">
                          {t(item.name)}
                        </p>
                      </Dropdown>
                    )
                  }
                </li>
              ))
            }
          </ul>

          <div className="flex min-[1000px]:hidden items-center">
              <NavSearch />
              <ChangeLanguage />
              <SideMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
