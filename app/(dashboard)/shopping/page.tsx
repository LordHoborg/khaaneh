'use client'

import { pantryItems, recipes } from '@/app/lib/data'

export default function ShoppingList() {
  // Simulate missing ingredients for weekly plan
  const missing = [
    { name: "گوشت گوسفندی", quantity: 1, unit: "kg" },
    { name: "سبزی تازه", quantity: 400, unit: "گرم" },
    { name: "زرشک", quantity: 200, unit: "گرم" },
    { name: "رب گوجه‌فرنگی", quantity: 1, unit: "قوطی" },
  ]

  return (
    <div className="max-w-2xl">
      <h1 className="text-4xl font-semibold tracking-tight mb-2">لیست خرید هوشمند</h1>
      <p className="text-zinc-600 mb-8">بر اساس برنامه غذایی این هفته</p>

      <div className="bg-white dark:bg-zinc-900 border rounded-3xl p-8">
        <div className="text-sm text-emerald-600 mb-4">۷ قلم • تخمینی: ۴۸۰٬۰۰۰ تومان</div>

        <div className="space-y-4">
          {missing.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b pb-4 last:border-none last:pb-0">
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-zinc-500">{item.quantity} {item.unit}</div>
              </div>
              <input type="checkbox" className="w-5 h-5 accent-emerald-600" />
            </div>
          ))}
        </div>

        <button 
          onClick={() => alert('لیست خرید به گوشی شما ارسال شد!')}
          className="mt-8 w-full py-4 bg-emerald-600 text-white rounded-2xl font-medium"
        >
          ارسال به لیست خرید گوشی
        </button>
      </div>
    </div>
  )
}
