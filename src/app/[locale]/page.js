import { useTranslations } from 'next-intl';
import PageHeader from '@/components/Shared/PageHeader/PageHeader';
import WeekCard from '@/components/Shared/WeekCard/WeekCard';
import Image from 'next/image';

// Images
import Week1 from '/public/assets/images/week-7.png';
import Week2 from '/public/assets/images/week-8.png';
import Week3 from '/public/assets/images/week-9.png';
import Week4 from '/public/assets/images/week-10.png';
import dotsIcon from "/public/assets/icons/dots.svg"

export default function HomePage() {
  const t = useTranslations('HomePage');

  const weeksData = [
    {
      img: Week1,
      title: t("week-1-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-1"), t("feature-2"), t("feature-3"), t("feature-4"), t("feature-5"), t("feature-6")],
      href: "/",
    },
    {
      img: Week2,
      title: t("week-2-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-3"), t("feature-4"), t("feature-1"), t("feature-2"), t("feature-6")],
      href: "/",
    },
    {
      img: Week3,
      title: t("week-3-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-4"), t("feature-1"), t("feature-2"), t("feature-1")],
      href: "/",
    },
    {
      img: Week4,
      title: t("week-4-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-6"), t("feature-5"), t("feature-2"), t("feature-3"), t("feature-1"), t("feature-4")],
      href: "/",
    },
    {
      img: Week1,
      title: t("week-5-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-1"), t("feature-2"), t("feature-3"), t("feature-4"), t("feature-5"), t("feature-6")],
      href: "/",
    },
    {
      img: Week2,
      title: t("week-6-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-3"), t("feature-4"), t("feature-1"), t("feature-2"), t("feature-6")],
      href: "/",
    },
    {
      img: Week3,
      title: t("week-7-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-4"), t("feature-1"), t("feature-2"), t("feature-1")],
      href: "/",
    },
    {
      img: Week4,
      title: t("week-8-title"),
      date: t("week-date"),
      place:t("week-place"),
      features: [t("feature-6"), t("feature-5"), t("feature-2"), t("feature-3"), t("feature-1"), t("feature-4")],
      href: "/",
    }
  ]
  return (
    <div>
      <PageHeader
        title={t('page-title')}
        subTitle={t('page-subTitle')}
        links={[
          { name: t('prev-link-1'), href: '/' },
          { name: t('page-title') },
        ]}
      />

      <div className='wrapper'>
        <div className='space-y-[20px] mt-[40px] mb-[56px] min-[980px]:mt-[80px] min-[980px]:mb-[60px]'>
          {
            weeksData.map((week, index) => (
              <WeekCard
                key={index}
                img={week.img}
                title={week.title}
                date={week.date}
                place={week.place}
                features={week.features}
                href={week.href}
              />
            ))
          }
        </div>

        <div className='cursor-pointer border border-[var(--Neutrals-purple-500)] px-[59px] py-[14px] flex items-center justify-center gap-[8px] w-fit mx-auto mb-[115px] min-[910]:mb-[130px]'>
          <p>{t("view-more")}</p>

          <Image 
            src={dotsIcon}
            alt='dots'
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}