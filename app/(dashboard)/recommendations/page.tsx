'use client'

import Link from 'next/link'
import { recipes } from '@/app/lib/recipes'
import { Clock, Users } from 'lucide-react'

export default function RecommendationsPage() {
  // Simulate smart scoring
  const rankedRecipes = [...recipes]
    .sort((a, b) => (b.score || 80) - (a.score || 80))
    .slice(0, 5)

  const handleCook = (recipeId: string, slug: string) => {
    alert('✅ مواد از انباری کسر شد!\nStreak شما به ۱۵ روز رسید!')
    window.location.href = `/recipes/${slug}`
  }

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-5xl font-semibold tracking-tighter">امروز چه بپزم؟</h1>
          <p className="text-xl text-zinc-600 mt-2">۵ پیشنهاد هوشمند بر اساس انباری شما</p>
        </div>
        <div className="text-right">
          <div className="text-emerald-600 font-mono text-3xl">14</div>
          <div className="text-xs text-zinc-500">روز streak</div>
        </div>
      </div>

      <div className="space-y-6">
        {rankedRecipes.map((recipe, index) => (
          <div key={recipe.id} className="recipe-card p-8">
            <div className="flex justify-between">
              <div>
                <div className="flex items-baseline gap-4">
                  <div className="text-[72px] font-bold text-emerald-600 tabular-nums tracking-[-4px]">
                    {recipe.score || 85}
                  </div>
                  <div>
                    <div className="text-4xl font-semibold tracking-tight">{recipe.persianName}</div>
                    <div className="text-lg text-zinc-500">{recipe.englishName}</div>
                  </div>
                </div>
              </div>
              <div className="text-emerald-600 text-sm font-medium px-4 py-1 bg-emerald-100 rounded-full h-fit">
                رتبه #{index + 1}
              </div>
            </div>

            <p className="mt-4 text-lg text-zinc-600 max-w-3xl">{recipe.description}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1.5">
              {(recipe.reasons || ["همه مواد موجود است", "زمان مناسب", "محبوب خانواده"]).map((r, i) => (
                <div key={i} className="flex items-center gap-3 text-emerald-700 text-[15px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" /> {r}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {recipe.prepTime + recipe.cookTime} دقیقه</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> {recipe.servings} نفر</div>
            </div>

            <div className="flex gap-3 mt-8">
              <Link href={`/recipes/${recipe.slug}`} className="px-8 py-3.5 bg-white border text-sm font-medium rounded-2xl hover:bg-zinc-50">
                مشاهده دستور پخت
              </Link>
              <button
                onClick={() => handleCook(recipe.id, recipe.slug)}
                className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white text-sm font-medium rounded-2xl"
              >
                پخت این غذا
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
