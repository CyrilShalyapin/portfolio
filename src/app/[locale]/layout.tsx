import '../../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kiryl Shaliapin's portfolio",
  description: "Kiryl Shaliapin's portfolio web page",
  icons: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      sizes: 'any',
      url: `/favicon.ico`,
    },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
