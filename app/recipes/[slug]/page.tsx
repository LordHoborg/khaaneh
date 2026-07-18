'use client'

import { useParams } from 'next/navigation'
import { recipes } from '@/app/lib/data'
import Link from 'next/link'
import { Clock, Users, Award } from 'lucide-react'

export default function RecipePage() {
  const params = useParams()
  const recipe = recipes.find(r => r.slug === params.slug) || recipes[0]

  return (
    <div className="max-w-3xl mx-auto">
      {/* Hero */}
      <div className="h-[420px] bg-zinc-900 rounded-3xl relative mb-8 flex items-end p-10">
        <div>
          <div className="text-emerald-400 font-medium text-sm mb-2 tracking-widest">دستور پخت سنتی</div>
          <h1 className="text-white text-6xl font-semibold tracking-tighter">{recipe.persianName}</h1>
          <p className="text-white/70 mt-2 text-xl">{recipe.englishName}</p>
        </div>
        <div className="absolute top-8 right-8 bg-white/90 text-black px-6 py-2 rounded-2xl text-sm font-medium">
          امتیاز: {recipe.score}
        </div>
      </div>

      <div className="flex gap-3 mb-10">
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border px-5 py-2 rounded-2xl text-sm">
          <Clock className="w-4 h-4" /> {recipe.prepTime + recipe.cookTime} دقیقه
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border px-5 py-2 rounded-2xl text-sm">
          <Users className="w-4 h-4" /> {recipe.servings} نفر
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-zinc-900 border px-5 py-2 rounded-2xl text-sm">
          <Award className="w-4 h-4" /> {recipe.difficulty}
        </div>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-xl leading-relaxed">{recipe.description}</p>

        <h3>مواد لازم</h3>
        <ul>
          {recipe.ingredients.map((ing: any, i: number) => (
            <li key={i}>{ing.quantity} {ing.unit} {ing.name}</li>
          ))}
        </ul>

        <h3>طرز تهیه</h3>
        <ol>
          {recipe.steps.map((step: string, i: number) => <li key={i}>{step}</li>)}
        </ol>

        {recipe.culturalNotes && (
          <>
            <h3>نکات فرهنگی</h3>
            <p>{recipe.culturalNotes}</p>
          </>
        )}

        <div className="mt-12 p-6 bg-emerald-50 dark:bg-emerald-950 rounded-3xl border border-emerald-200">
          <div className="font-medium mb-3">دستیار هوش مصنوعی آشپزی</div>
          <div className="text-sm text-emerald-700">سوال خود را درباره این غذا بپرسید:</div>
          <input 
            type="text" 
            placeholder="چطور می‌توانم این غذا را کم‌چرب‌تر کنم؟" 
            className="mt-3 w-full px-4 py-3 bg-white rounded-2xl text-sm border"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                alert('پاسخ AI: می‌توانید از روغن زیتون کمتری استفاده کنید و مرغ را بدون پوست بپزید.')
              }
            }}
          />
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <Link href="/recommendations" className="px-8 py-3 rounded-2xl border">بازگشت به پیشنهادها</Link>
        <button 
          onClick={() => alert('مواد از انباری کسر شد ✅')} 
          className="px-8 py-3 bg-emerald-600 text-white rounded-2xl"
        >
          پخت شد — کسر از انباری
        </button>
      </div>
    </div>
  )
}
