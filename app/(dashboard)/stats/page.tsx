'use client'

import { currentUser } from '@/app/lib/data'

export default function StatsPage() {
  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight mb-8">گزارش و آمار</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-6">
          <div className="text-sm text-zinc-500">Streak آشپزی</div>
          <div className="text-5xl font-bold text-emerald-600 mt-2 tabular-nums">{currentUser.streak}</div>
          <div className="text-xs text-emerald-600 mt-1">روز متوالی</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-6">
          <div className="text-sm text-zinc-500">وعده‌های پخته شده</div>
          <div className="text-5xl font-bold tabular-nums mt-2">{currentUser.totalCooked}</div>
          <div className="text-xs text-zinc-500 mt-1">این ماه</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-6">
          <div className="text-sm text-zinc-500">صرفه‌جویی</div>
          <div className="text-5xl font-bold tabular-nums mt-2">{(currentUser.wasteSaved / 1000).toFixed(0)}k</div>
          <div className="text-xs text-emerald-600 mt-1">تومان هدررفت کاهش یافته</div>
        </div>
        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-6">
          <div className="text-sm text-zinc-500">تنوع غذایی</div>
          <div className="text-5xl font-bold tabular-nums mt-2">18</div>
          <div className="text-xs text-zinc-500 mt-1">غذای مختلف در ۳۰ روز</div>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-8">
        <div className="font-medium mb-4">محبوب‌ترین غذاها</div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between"><span>زرشک پلو با مرغ</span><span className="text-emerald-600">۱۴ بار</span></div>
          <div className="flex justify-between"><span>قورمه‌سبزی</span><span className="text-emerald-600">۱۱ بار</span></div>
          <div className="flex justify-between"><span>ته‌چین مرغ</span><span className="text-emerald-600">۹ بار</span></div>
        </div>
      </div>
    </div>
  )
}
