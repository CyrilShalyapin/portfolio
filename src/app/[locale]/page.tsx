import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <h1 className='m-2 flex flex-col bg-red-600'>{t('main-page-title')}</h1>
    </main>
  );
}
