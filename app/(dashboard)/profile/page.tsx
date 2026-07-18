'use client'

import { currentUser } from '@/app/lib/data'

export default function ProfilePage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-4xl font-semibold tracking-tight mb-8">پروفایل و تنظیمات</h1>

      <div className="space-y-8">
        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-8">
          <div className="text-sm text-zinc-500 mb-1">نام</div>
          <div className="text-2xl font-semibold">{currentUser.name}</div>
          <div className="text-emerald-600 mt-1">{currentUser.email}</div>
        </div>

        <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-8 space-y-6">
          <div>
            <div className="text-sm text-zinc-500">تعداد افراد خانواده</div>
            <div className="font-mono text-4xl">{currentUser.familySize}</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500">بودجه هفتگی</div>
            <div className="font-mono text-4xl">{currentUser.budgetPerWeek.toLocaleString()} تومان</div>
          </div>
          <div>
            <div className="text-sm text-zinc-500">ترجیحات غذایی</div>
            <div className="flex gap-2 mt-2">
              {currentUser.dietaryPrefs.map(p => (
                <div key={p} className="px-4 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">{p}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-xs text-center text-zinc-400">
          داده‌های شما به صورت امن در Supabase ذخیره می‌شود
        </div>
      </div>
    </div>
  )
}
