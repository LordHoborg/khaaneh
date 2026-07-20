import Link from 'next/link'
import { ChefHat, Clock, Leaf, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
      <nav className="border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-emerald-600 rounded-2xl flex items-center justify-center">
              <ChefHat className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight">خانه</div>
              <div className="text-[10px] text-white/50 -mt-1">KHAANEH</div>
            </div>
          </div>
          <Link href="/recommendations" className="text-sm px-5 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors">
            ورود به اپلیکیشن
          </Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-emerald-400 text-sm mb-6">
            آشپزخانه هوشمند ایرانی
          </div>

          <h1 className="text-7xl font-semibold tracking-tighter leading-none mb-6">
            امروز با چه<br />موادی آشپزی کنیم؟
          </h1>

          <p className="text-2xl text-white/70 mb-12 max-w-md mx-auto">
            مواد موجود در خانه‌تان را به غذاهای خوشمزه تبدیل کنید و جلوی هدررفت غذا را بگیرید.
          </p>

          <Link
            href="/recommendations"
            className="inline-flex items-center justify-center gap-3 text-white text-3xl px-16 py-7 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all font-semibold"
          >
            <ChefHat className="w-8 h-8" />
            امروز چه بپزم؟
          </Link>

          <div className="flex items-center justify-center gap-8 mt-16 text-sm text-white/50">
            <div className="flex items-center gap-2"><Leaf className="w-4 h-4" /> کاهش هدررفت غذا</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> صرفه‌جویی در زمان</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4" /> ۱۴ روز Streak</div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 text-center text-sm">
          <div>
            <div className="font-mono text-3xl text-emerald-400">184</div>
            <div className="text-white/60">گرم مواد در حال انقضا</div>
          </div>
          <div>
            <div className="font-mono text-3xl text-emerald-400">14</div>
            <div className="text-white/60">روز streak آشپزی</div>
          </div>
          <div>
            <div className="font-mono text-3xl text-emerald-400">۳۴٪</div>
            <div className="text-white/60">کاهش هدررفت این ماه</div>
          </div>
        </div>
      </div>
    </div>
  )
}
