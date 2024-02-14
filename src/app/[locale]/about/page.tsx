import { useTranslations } from "next-intl"

const Page = () => {
  const t = useTranslations()
  return (
    <div>
      <h1>{t('about-me-page-title')}</h1>
    </div>
  )
}

export default Page
