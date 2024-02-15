import { useTranslations } from 'next-intl';
import { About, Navbar, Technologies } from '../../components';

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <div className="w-full h-screen bg-[url('/hero-landscape.jpg')] bg-cover">
        <Navbar />
        <div className='w-full flex items-center justify-center'>
          <h2 className='text-[36px] text-[#616161] mt-[20%]'>𝕥𝕙𝕖 𝕟𝕒𝕥𝕦𝕣𝕖 𝕠𝕗 𝕔𝕠𝕕𝕖</h2>
        </div>
      </div>
      <About />
      <Technologies />
    </main>
  );
}
