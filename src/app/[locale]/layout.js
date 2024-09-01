import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

import "./globals.css"
import TopBar from '@/components/Header/TopBar/TopBar';
import Navbar from '@/components/Header/Navbar/Navbar';

export default async function LocaleLayout({
  children,
  params: {locale}
}) {
  
  const messages = await getMessages();
 
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr" }>
      <body className={locale === "ar" ? "dir-rtl" : "dir-ltr"}>
        <NextIntlClientProvider messages={messages}>
          <header className='sticky top-0 z-40'>
            <TopBar />
            <Navbar />
          </header>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
