import Link from 'next/link'
import { useTranslations } from "next-intl"
import Image from 'next/image';

// images
import downArrow from "/public/assets/icons/Arrow down Colored.svg"
import { useState } from 'react';

const SliderMenuItem = ({ item, children,customElement,translate="Navbar" }) => {
    const t = useTranslations(translate || 'Navbar');
    const [isOpen, setIsOpen] = useState(false)
    return (
        <li className="p-[16px] bg-white">
            {
                item?.href ? (
                    <Link href={item.href} className="font-[600] text-nowrap">
                        {t(item.name)}
                    </Link>
                ) : (
                    <>
                        <div className="flex items-center justify-between" onClick={() => setIsOpen(prev => !prev)}>
                            {
                                customElement ? (
                                    children
                                ) : (
                                    <span className='font-[600] text-nowrap'>{t(item.name)}</span>
                                )
                            }
                            <Image
                                src={downArrow}
                                alt='Arrow'
                                width={24}
                                height={24}
                                className={`transform ${isOpen && 'rotate-180'} transition-transform`}
                            />
                        </div>

                        {
                            isOpen && (
                                <ul className="flex flex-col gap-[12px] mt-[32px]">
                                    {
                                        item.subElement.map((subItem, index) => (
                                            <li key={index} className="p-[16px] bg-[var(--Secondary-Creamy-50)]">
                                                <Link href={subItem.href} className="font-[600] text-nowrap">
                                                    {t(subItem.name)}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            )
                        }
                    </>
                )
            }
        </li>
    )
}

export default SliderMenuItem
