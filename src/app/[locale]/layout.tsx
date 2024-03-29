import { Poppins } from 'next/font/google';
import { Sidebar } from "@/components/Sidebar"
import { Header } from '@/components/Header';
import '@/sass/globals.sass';
import 'animate.css';
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl';
const roboto = Poppins({
  weight: ["100", "300", "500", "700", "900"],
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: 'Leeroy Garcia | Developer',
  description: 'Full Stack Web Developer',
  applicationName: 'Leeroy Garcia Portfolio'
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode,
  params: {locale: string}
}) {
  const messages = useMessages();
  
  return (
    <html lang={locale}>
      <body className={roboto.className}>
        <Header />
        <Sidebar />
        <main className='Content'>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  )
}

// export default function LocaleLayout({
//   children,
//   params: {locale}
// }: {
//   children: React.ReactNode;
//   params: {locale: string};
// }) {
//   return (
//     <html lang={locale}>
//       <body>{children}</body>
//     </html>
//   );
// }
