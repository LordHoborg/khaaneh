'use client'

import { useState } from 'react'
import Link from 'next/link'
import { recipes, currentUser } from '@/app/lib/data'
import { ChefHat, Clock, Users } from 'lucide-react'

export default function RecommendationsPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null)

  // Simulate smart scoring (in real app this would come from server)
  const rankedRecipes = [...recipes].sort((a, b) => b.score - a.score)

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">امروز چه بپزم؟</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mt-1">بر اساس انباری و ترجیحات خانواده‌تان</p>
        </div>
        <div className="text-sm text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-4 py-2 rounded-2xl">
          {currentUser.familySize} نفر • بودجه: {currentUser.budgetPerWeek.toLocaleString()} تومان
        </div>
      </div>

      <div className="grid gap-6">
        {rankedRecipes.map((recipe, index) => (
          <div key={recipe.id} className="recipe-card group">
            <div className="p-8">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="text-6xl font-bold text-emerald-600 tabular-nums tracking-tighter">
                      {recipe.score}
                    </div>
                    <div>
                      <div className="text-3xl font-semibold tracking-tight">{recipe.persianName}</div>
                      <div className="text-zinc-500">{recipe.englishName}</div>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                    رتبه #{index + 1}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                {recipe.description}
              </p>

              {/* Reasons */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                {recipe.reasons.map((reason: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-emerald-700">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                    {reason}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Clock className="w-4 h-4" /> {recipe.prepTime + recipe.cookTime} دقیقه
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  <Users className="w-4 h-4" /> {recipe.servings} نفر
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-500">
                  سطح: {recipe.difficulty === 'EASY' ? 'آسان' : recipe.difficulty === 'MEDIUM' ? 'متوسط' : 'سخت'}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  href={`/recipes/${recipe.slug}`}
                  className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 transition-colors text-white font-medium rounded-2xl text-sm"
                >
                  مشاهده دستور پخت
                </Link>
                <button
                  onClick={() => alert('غذا به لیست پخت امروز اضافه شد!')}
                  className="px-8 py-3 border border-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm rounded-2xl font-medium"
                >
                  اضافه به برنامه امروز
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-xs text-zinc-400">
        الگوریتم هوشمند بر اساس تاریخ انقضا، ترجیحات، و تاریخچه پخت شما
      </div>
    </div>
  )
}
