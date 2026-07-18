import Link from 'next/link'
import { ChefHat, Home, Package, Calendar, User } from 'lucide-react'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Top Navigation */}
      <nav className="border-b bg-white dark:bg-zinc-900 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-xl">خانه</div>
              <div className="text-[10px] text-zinc-400 -mt-1">KHAANEH</div>
            </div>
          </Link>

          <div className="flex items-center gap-8 text-sm font-medium">
            <Link href="/recommendations" className="hover:text-emerald-600 transition-colors">پیشنهاد امروز</Link>
            <Link href="/pantry" className="hover:text-emerald-600 transition-colors">انباری هوشمند</Link>
            <Link href="/planner" className="hover:text-emerald-600 transition-colors">برنامه غذایی</Link>
            <Link href="/profile" className="hover:text-emerald-600 transition-colors">پروفایل</Link>
            <Link href="/achievements" className="hover:text-emerald-600 transition-colors">دستاوردها</Link>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            سارا احمدی
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}
