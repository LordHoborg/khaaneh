'use client'

import { recipes } from '@/app/lib/data'

export default function MealPlanner() {
  const days = ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه']

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">برنامه غذایی هفتگی</h1>
        <p className="text-zinc-600 mt-1">برنامه هوشمند با توجه به انباری و بودجه</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {days.map((day, index) => {
          const recipe = recipes[index % recipes.length]
          return (
            <div key={index} className="border rounded-3xl p-5 bg-white dark:bg-zinc-900">
              <div className="font-medium text-sm text-zinc-500 mb-3">{day}</div>
              <div className="font-semibold tracking-tight leading-tight mb-4">{recipe.persianName}</div>
              <div className="text-xs text-emerald-600">{recipe.prepTime + recipe.cookTime} دقیقه</div>

              <button className="mt-6 text-xs w-full py-2 border rounded-2xl hover:bg-zinc-50">
                تغییر وعده
              </button>
            </div>
          )
        })}
      </div>

      <div className="mt-12 bg-white dark:bg-zinc-900 border rounded-3xl p-8">
        <div className="text-sm text-zinc-500 mb-1">خلاصه برنامه</div>
        <div className="text-2xl font-semibold tracking-tight mb-4">هزینه تخمینی: ۴۸۰٬۰۰۰ تومان</div>
        <div className="text-sm text-emerald-600">۹٪ صرفه‌جویی نسبت به هفته گذشته</div>
      </div>
    </div>
  )
}
