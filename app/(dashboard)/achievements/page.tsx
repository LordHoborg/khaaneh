'use client'

import { currentUser } from '@/app/lib/data'

export default function Achievements() {
  const achievements = [
    { id: 1, title: "آشپز هفته", desc: "۷ روز streak", unlocked: true },
    { id: 2, title: "کاهش هدررفت", desc: "بیش از ۱۰۰ هزار تومان صرفه‌جویی", unlocked: true },
    { id: 3, title: "آشپز حرفه‌ای", desc: "۵۰ وعده پخته شده", unlocked: true },
    { id: 4, title: "قهرمان انباری", desc: "هیچ ماده‌ای هدر نرفته", unlocked: false },
  ]

  return (
    <div>
      <h1 className="text-4xl font-semibold tracking-tight mb-8">دستاوردها</h1>

      <div className="grid md:grid-cols-2 gap-4">
        {achievements.map(a => (
          <div key={a.id} className={`p-6 rounded-3xl border ${a.unlocked ? 'bg-emerald-50 border-emerald-200' : 'bg-white opacity-60'}`}>
            <div className="font-semibold text-xl">{a.title}</div>
            <div className="text-sm text-zinc-600 mt-1">{a.desc}</div>
            {a.unlocked && <div className="mt-4 text-xs text-emerald-600 font-medium">دستیابی شده ✓</div>}
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-center text-zinc-500">
        Streak فعلی شما: <span className="font-mono text-emerald-600">{currentUser.streak}</span> روز
      </div>
    </div>
  )
}
