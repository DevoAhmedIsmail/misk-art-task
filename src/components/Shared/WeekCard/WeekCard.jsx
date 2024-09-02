import Image from 'next/image'
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from '../Button/Button'

// images
import CheckIcon from "/public/assets/icons/Check.svg"

const WeekCard = ({ img, title, date, place, features, href }) => {
    const t = useTranslations('HomePage');
    return (
        <div className='bg-[var(--Secondary-Creamy-50)] p-[16px] lg:p-[22px]'>
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[24px]">
                <div className="flex items-center gap-[16px] relative">
                    <div className="relative size-[64px] lg:size-[104px]">
                        <Image
                            src={img}
                            alt={title}
                            fill
                            className='object-cover w-full h-full'
                        />
                    </div>
                    

                    <div>
                        <h4 className='relative lg:absolute w-full top-0 text-[#1C1E41] text-[18px] lg:text-[24px] font-[600] leading-[24px] line-clamp-1'>{title}</h4>
                        <p className='text-[var(--Neutrals-500)] text-[12px] lg:text-[14px] font-[600] leading-[15.5px] lg:leading-[20px] mb-[4px] mt-[8px] lg:mt-[48px]'>{date}</p>
                        <p className='text-[12px] lg:text-[14px] leading-[15.5px] lg:leading-[20px]'>{place}</p>
                    </div>

                </div>

                <div className='flex items-center flex-wrap min-[540px]:grid grid-cols-3 gap-y-[12px] gap-x-[16px] lg:gap-x-[24px]  '>
                    {features.map((feature, index) => (
                        <div className='flex items-center gap-[8px] w-auto lg:min-w-[142px]' key={index}>
                            <Image
                                src={CheckIcon}
                                alt='check icon'
                                width={16}
                                height={16}
                            />

                            <span className='text-[14px] leading-[20px] text-wrap'>{feature}</span>
                        </div>
                    ))}
                </div>

                    <Button classes='!block w-full lg:w-[140px]' outline>
                        <Link href={href}>
                            {t("learn-more")}
                        </Link>
                    </Button>
            </div>
        </div>
    )
}

export default WeekCard
