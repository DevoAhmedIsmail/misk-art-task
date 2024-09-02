import Image from "next/image"
import { useTranslations } from "next-intl"
import ChangeLanguage from "../../TopBar/ChangeLanguage/ChangeLanguage"
import NavSearch from "../../TopBar/NavSearch/NavSearch"
import SliderMenuItem from "./SliderMenuItem/SliderMenuItem"

import Button from "@/components/Shared/Button/Button"
import navbarData from "@/constant/navbarData"
import topBarData from "@/constant/topBarData"

import "./SliderMenu.css"
// images
import logo from "/public/assets/icons/Logo.svg"
import crossIcon from "/public/assets/icons/cross.svg"
import avatar from "/public/assets/icons/User Avatar Placholder.svg"

const SliderMenu = ({ isOpen, setIsOpen }) => {
  const t = useTranslations()
  return (
    <div className={`slider-menu ${isOpen && "open"} p-[24px] !bg-[var(--Secondary-Creamy-25)] text-[var(--Neutrals-purple-500)] flex flex-col`}>
      {/* Slider Menu Header */}
      <div className="flex items-center justify-between pb-[24px]">
        <div className="w-[126px] h-[56px] relative">
          <Image src={logo} fill alt="logo" className="object-cover" />
        </div>

        <div className="flex min-[1000px]:hidden items-center">
          <NavSearch />
          <ChangeLanguage />
          <Button
            clickHandler={() => setIsOpen(false)}
            classes="!p-[16px]"
          >
            <Image src={crossIcon} alt="Menu" width={24} height={24} />
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="slider-menu-scroll">
          <ul className="flex flex-col gap-[8px] mb-[32px]">
            <SliderMenuItem
              translate="TopBar"
              customElement
              item={
                {
                  subElement:
                    [
                      {
                        name: "personal-account",
                        href: "/"
                      },
                      {
                        name: "technical-file",
                        href: "/"
                      },
                      {
                        name: "logout",
                        href: "/"
                      }
                    ]
                }

              }
            >
              <div className="">
                <div className="flex items-center gap-[16px]">
                  <Image
                    src={avatar}
                    width={48}
                    height={48}
                    alt="avatar"
                  />

                  <span className="font-[600] text-[18px]">
                    {t("TopBar.userName")}
                  </span>
                </div>
              </div>
            </SliderMenuItem>
          </ul>

          <ul className="flex flex-col gap-[8px] mb-[32px]">
            {
              topBarData.map((item, index) => (
                <SliderMenuItem
                  key={index}
                  item={item}
                  translate="TopBar"
                />
              ))
            }
          </ul>

          {/* Slider Menu Content */}
          <ul className="flex flex-col gap-[8px]">

            {
              navbarData.map((item, index) => (
                <SliderMenuItem
                  key={index}
                  item={item}

                />
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SliderMenu
