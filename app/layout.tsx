import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const vazirmatn = Vazirmatn({
  subsets: ['latin', 'arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-vazirmatn',
})

export const metadata: Metadata = {
  title: 'خانه | Khaaneh — آشپزخانه هوشمند ایرانی',
  description: 'دستیار هوشمند آشپزخانه — بفهمید امروز با مواد موجود در خانه‌تان چه بپزید',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.variable} font-sans antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50`}>
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  )
}