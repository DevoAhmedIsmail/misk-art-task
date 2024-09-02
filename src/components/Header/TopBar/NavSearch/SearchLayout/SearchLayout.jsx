"use client"

import Dropdown from "@/components/Shared/Dropdown/Dropdown"
import Button from "@/components/Shared/Button/Button"
import Image from "next/image"
import { useEffect, useState } from "react"
import "./SearchLayout.css"

// images
import searchIcon from "/public/assets/icons/search-white.svg"
import crossIcon from "/public/assets/icons/cross-colored.svg"
import { useTranslations } from "next-intl"

const SearchLayout = ({ isOpenSearch, setIsOpenSearch }) => {
    const t = useTranslations("Navbar")
    const [selectedCategory, setSelectedCategory] = useState("training-develop");
    useEffect(() => {
        if (isOpenSearch) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [isOpenSearch])

    if (!isOpenSearch) {
        return null
    }

    return (
        <div className='relative search-layout'>
            <div className="absolute top-[28px] end-[28px] min-[500px]:top-[48px] min-[500px]:end-[48px]">
                <Button
                    classes="!bg-[var(--Primary-50)] !px-[14px] !py-[14px]"
                    clickHandler={() => setIsOpenSearch(false)}
                >
                    <Image
                        src={crossIcon}
                        alt="cross"
                        width={20}
                        height={20}
                    />
                </Button>
            </div>

            <div className="flex items-center bg-white border border-[var(--Primary-500)] flex-col min-[600px]:flex-row max-w-[90%]">
                <div className="flex flex-row items-center">
                    <div className="px-[20px] py-[5px] border-e-[2px] border-[var(--Primary-500)]">
                        <Dropdown
                            select
                            onSelect={(category) => setSelectedCategory(category)}
                            subElement={
                                [
                                    {
                                        name: "general-programs"
                                    },
                                    {
                                        name: "residency-programs"
                                    },
                                    {
                                        name: "misk-scholarship"
                                    },
                                    {
                                        name: "research-publications"
                                    },
                                    {
                                        name: "training-develop"
                                    },
                                    {
                                        name: "exhibitions"
                                    },
                                ]
                            }
                            className="max-h-[200px] overflow-auto !start-[-20px]"
                            translateText="Navbar"
                        >
                            {t(selectedCategory)}
                        </Dropdown>
                    </div>

                    <div className="flex-1 h-full px-[20px] py-[16px]">
                        <input
                            placeholder={t("search-placeholder")}
                            className="w-full h-auto outline-none min-[720px]:min-w-[400px] text-[var(--Primary-500)] placeholder:text-[var(--Primary-300)] text-[18px]"
                        />
                    </div>
                </div>

                <Button classes="px-[32px] py-[19px] min-[600px]:block w-full min-[600px]:w-auto">
                    <div className="flex items-center gap-[8px]">
                        <p className="block min-[600px]:hidden text-white font-[600]">{t("search")}</p>
                        <Image
                            src={searchIcon}
                            alt="Search"
                            width={24}
                            height={24}
                        />
                    </div>
                </Button>
            </div>
        </div>
    )
}

export default SearchLayout
