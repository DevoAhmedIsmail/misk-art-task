import React from 'react'
import FlexLayoutFooter from '../FlexLayoutFooter/FlexLayoutFooter'
import { useTranslations } from 'next-intl'

// Images
import LinkedInIcon from "/public/assets/icons/social/LinkedIn.svg"
import FacebookIcon from "/public/assets/icons/social/Facebook.svg"
import InstagramIcon from "/public/assets/icons/social/Instagram.svg"
import XIcon from "/public/assets/icons/social/X.svg"
import Link from 'next/link'
import Image from 'next/image'
const InstitutionMedia = () => {
    const t = useTranslations("Footer");

    const socialData = [
        {
            icon: LinkedInIcon,
            href: "/",
            alt: "LinkedIn",
        },
        {
            icon: XIcon,
            href: "/",
            alt: "X",
        },
        {
            icon: FacebookIcon,
            href: "/",
            alt: "Facebook",
        },
        {
            icon: InstagramIcon,
            href: "/",
            alt: "Instagram",
        }
    ]
    return (
        <FlexLayoutFooter className="mb-[64px] max-[800px]:gap-[24px]">
            <div className="flex-1">
                <p className='leading-[24px]'>Info@miskartinstitute.com</p>
                <p className='leading-[24px]'>{t("foundation-address")}</p>
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-[24px]">
                    {
                        socialData.map((item, index) => (
                            <Link key={index} href={item.href} className='p-[10px] border border-[var(--Neutrals-purple-500)] flex items-center justify-center'>
                                <Image
                                    src={item.icon}
                                    alt={item.alt}
                                    width={18}
                                    height={18}
                                />
                            </Link>
                        ))
                    }
                </div>
            </div>
        </FlexLayoutFooter>
    )
}

export default InstitutionMedia
