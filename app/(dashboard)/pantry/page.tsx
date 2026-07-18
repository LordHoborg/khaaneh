'use client'

import { useState } from 'react'
import { pantryItems as initialItems } from '@/app/lib/data'
import { Plus, AlertTriangle, Trash2 } from 'lucide-react'

export default function SmartPantry() {
  const [items, setItems] = useState(initialItems)
  const [showAdd, setShowAdd] = useState(false)
  const [newItem, setNewItem] = useState({
    name: '', quantity: '', unit: 'kg', expiryDate: '', storage: 'PANTRY'
  })

  const expiringSoon = items.filter(item => {
    if (!item.expiryDate) return false
    const days = Math.ceil((new Date(item.expiryDate).getTime() - Date.now()) / (1000 * 3600 * 24))
    return days <= 3 && days > 0
  })

  const addItem = () => {
    if (!newItem.name || !newItem.quantity) return

    const item = {
      id: 'p' + Date.now(),
      name: newItem.name,
      quantity: parseFloat(newItem.quantity),
      unit: newItem.unit,
      expiryDate: newItem.expiryDate || undefined,
      storage: newItem.storage as any,
      purchaseDate: new Date().toISOString().split('T')[0]
    }

    setItems([...items, item])
    setNewItem({ name: '', quantity: '', unit: 'kg', expiryDate: '', storage: 'PANTRY' })
    setShowAdd(false)
  }

  const deleteItem = (id: string) => {
    setItems(items.filter(i => i.id !== id))
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight">انباری هوشمند</h1>
          <p className="text-zinc-600">مواد موجود در خانه‌تان</p>
        </div>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-medium"
        >
          <Plus className="w-4 h-4" /> افزودن ماده جدید
        </button>
      </div>

      {/* Expiry Alert */}
      {expiringSoon.length > 0 && (
        <div className="mb-8 p-5 bg-amber-50 dark:bg-amber-950 border border-amber-200 rounded-3xl flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-amber-600 mt-1" />
          <div>
            <div className="font-semibold text-amber-800">هشدار انقضا</div>
            <div className="text-sm text-amber-700">
              {expiringSoon.length} ماده در حال انقضا هستند. پیشنهاد می‌کنیم امروز از آن‌ها استفاده کنید.
            </div>
          </div>
        </div>
      )}

      <div className="grid gap-3">
        {items.map(item => {
          const daysLeft = item.expiryDate 
            ? Math.ceil((new Date(item.expiryDate).getTime() - Date.now()) / (1000 * 3600 * 24)) 
            : null

          return (
            <div key={item.id} className="pantry-item group">
              <div className="flex items-center gap-4">
                <div>
                  <div className="font-semibold text-xl tracking-tight">{item.name}</div>
                  <div className="text-xs text-zinc-500">{item.storage}</div>
                </div>
              </div>

              <div className="flex items-center gap-8 text-right">
                <div>
                  <div className="font-mono text-xl tabular-nums">{item.quantity}</div>
                  <div className="text-xs text-zinc-500">{item.unit}</div>
                </div>

                {daysLeft !== null && (
                  <div className={`text-sm ${daysLeft <= 2 ? 'expiry-critical' : daysLeft <= 5 ? 'expiry-soon' : ''}`}>
                    {daysLeft} روز باقی‌مانده
                  </div>
                )}

                <button
                  onClick={() => deleteItem(item.id)}
                  className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 w-full max-w-md p-8 rounded-3xl">
            <h3 className="font-semibold text-2xl mb-6">افزودن ماده به انباری</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="نام ماده (مثل: عدس)"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full px-4 py-3 border rounded-2xl"
              />
              <div className="flex gap-3">
                <input type="number" placeholder="مقدار" value={newItem.quantity} onChange={e => setNewItem({...newItem, quantity: e.target.value})} className="flex-1 px-4 py-3 border rounded-2xl" />
                <select value={newItem.unit} onChange={e => setNewItem({...newItem, unit: e.target.value})} className="px-4 py-3 border rounded-2xl">
                  <option value="kg">کیلوگرم</option>
                  <option value="g">گرم</option>
                  <option value="عدد">عدد</option>
                  <option value="لیتر">لیتر</option>
                </select>
              </div>
              <input type="date" value={newItem.expiryDate} onChange={e => setNewItem({...newItem, expiryDate: e.target.value})} className="w-full px-4 py-3 border rounded-2xl" />
              <select value={newItem.storage} onChange={e => setNewItem({...newItem, storage: e.target.value})} className="w-full px-4 py-3 border rounded-2xl">
                <option value="PANTRY">انباری</option>
                <option value="REFRIGERATOR">یخچال</option>
                <option value="FREEZER">فریزر</option>
              </select>
            </div>

            <div className="flex gap-3 mt-8">
              <button onClick={addItem} className="flex-1 py-3 bg-emerald-600 text-white rounded-2xl">افزودن</button>
              <button onClick={() => setShowAdd(false)} className="flex-1 py-3 border rounded-2xl">انصراف</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
