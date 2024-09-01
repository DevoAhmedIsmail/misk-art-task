import PageHeader from '@/components/Shared/PageHeader/PageHeader';
import {useTranslations} from 'next-intl';
// import {Link} from '@/i18n/routing';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <PageHeader
        title={t('page-title')}
        subTitle={t('page-subTitle')}
        links={[
          {name: t('prev-link-1'), href: '/'},
          {name: t('page-title')},
        ]}
      />
    </div>
  );
}