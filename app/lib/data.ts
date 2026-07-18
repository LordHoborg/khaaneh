// ==================== MOCK DATA - Khaaneh ====================

export const currentUser = {
  id: "user_1",
  name: "سارا احمدی",
  email: "sara@example.com",
  familySize: 4,
  cookingSkill: "INTERMEDIATE",
  budgetPerWeek: 850000,
  dietaryPrefs: ["HIGH_PROTEIN"],
  allergies: [],
  streak: 14,
  totalCooked: 87,
  wasteSaved: 124000,
};

export let pantryItems: any[] = [
  { id: "p1", name: "برنج", quantity: 2.5, unit: "kg", expiryDate: "2026-08-10", storage: "PANTRY", purchaseDate: "2026-06-01" },
  { id: "p2", name: "مرغ", quantity: 1.2, unit: "kg", expiryDate: "2026-07-19", storage: "FREEZER", purchaseDate: "2026-07-10" },
  { id: "p3", name: "سیب‌زمینی", quantity: 3, unit: "kg", expiryDate: "2026-07-25", storage: "PANTRY", purchaseDate: "2026-07-05" },
  { id: "p4", name: "گوجه‌فرنگی", quantity: 800, unit: "g", expiryDate: "2026-07-20", storage: "REFRIGERATOR", purchaseDate: "2026-07-15" },
  { id: "p5", name: "پیاز", quantity: 1.5, unit: "kg", expiryDate: "2026-08-01", storage: "PANTRY", purchaseDate: "2026-06-20" },
  { id: "p6", name: "تخم‌مرغ", quantity: 12, unit: "عدد", expiryDate: "2026-07-28", storage: "REFRIGERATOR", purchaseDate: "2026-07-12" },
  { id: "p7", name: "ماست", quantity: 800, unit: "g", expiryDate: "2026-07-22", storage: "REFRIGERATOR", purchaseDate: "2026-07-14" },
  { id: "p8", name: "لوبیا", quantity: 500, unit: "g", expiryDate: "2026-09-01", storage: "PANTRY", purchaseDate: "2026-05-10" },
];

export const recipes = [
  {
    id: "r1", slug: "morgh-ba-brenj", persianName: "مرغ با برنج", englishName: "Chicken with Rice",
    description: "غذای کلاسیک و محبوب ایرانی", history: "یکی از قدیمی‌ترین غذاهای ایرانی",
    prepTime: 15, cookTime: 45, difficulty: "EASY", calories: 620, servings: 4,
    ingredients: [
      { name: "برنج", quantity: 2, unit: "پیمانه" },
      { name: "مرغ", quantity: 800, unit: "گرم" },
      { name: "پیاز", quantity: 2, unit: "عدد" },
      { name: "گوجه‌فرنگی", quantity: 3, unit: "عدد" },
    ],
    steps: ["برنج را بشویید و خیس کنید.", "مرغ را با پیاز تفت دهید.", "گوجه را اضافه کنید.", "برنج را آبکش کنید."],
    nutrition: { protein: 42, carbs: 68, fat: 18 },
    culturalNotes: "این غذا معمولاً در مهمانی‌های خانوادگی سرو می‌شود.",
    tips: ["مرغ را از قبل مرینیت کنید", "از زعفران استفاده کنید"],
    videos: [], score: 96,
    reasons: ["همه مواد موجود است", "مرغ فردا منقضی می‌شود", "۶ روز است مرغ نخورده‌اید", "زمان پخت ۴۰ دقیقه"]
  },
  {
    id: "r2", slug: "khoresh-gheymeh", persianName: "خورش قیمه", englishName: "Gheymeh Stew",
    description: "خورش محبوب و خوش‌عطر ایرانی", prepTime: 25, cookTime: 90, difficulty: "MEDIUM",
    calories: 540, servings: 4,
    ingredients: [
      { name: "لوبیا", quantity: 1, unit: "پیمانه" },
      { name: "سیب‌زمینی", quantity: 4, unit: "عدد" },
      { name: "پیاز", quantity: 2, unit: "عدد" },
    ],
    steps: ["گوشت را تفت دهید...", "سیب‌زمینی را سرخ کنید..."],
    nutrition: { protein: 38, carbs: 45, fat: 22 },
    culturalNotes: "معمولاً با برنج سرو می‌شود.",
    tips: ["از لیمو عمانی استفاده کنید"], videos: [], score: 89,
    reasons: ["سیب‌زمینی در حال انقضا", "مواد اصلی موجود", "خورش مناسب فصل"]
  },
  {
    id: "r3", slug: "kuku-sabzi", persianName: "کوکو سبزی", englishName: "Herb Kuku",
    description: "غذای ساده و سریع", prepTime: 20, cookTime: 25, difficulty: "EASY",
    calories: 310, servings: 4,
    ingredients: [
      { name: "تخم‌مرغ", quantity: 6, unit: "عدد" },
      { name: "سبزی", quantity: 300, unit: "گرم" },
    ],
    steps: ["سبزی را خرد کنید...", "با تخم‌مرغ مخلوط کنید..."],
    nutrition: { protein: 22, carbs: 12, fat: 19 },
    culturalNotes: "در نوروز بسیار محبوب است.",
    tips: ["سبزی تازه استفاده کنید"], videos: [], score: 82,
    reasons: ["تخم‌مرغ زیاد موجود است", "زمان کوتاه"]
  },
  {
    id: "r4", slug: "ghormeh-sabzi", persianName: "قورمه‌سبزی", englishName: "Ghormeh Sabzi",
    description: "ملکه غذاهای ایرانی", prepTime: 40, cookTime: 120, difficulty: "HARD",
    calories: 580, servings: 5,
    ingredients: [
      { name: "گوشت", quantity: 600, unit: "گرم" },
      { name: "سبزی", quantity: 400, unit: "گرم" },
      { name: "لوبیا", quantity: 1, unit: "پیمانه" },
    ],
    steps: ["سبزی را تفت دهید...", "گوشت را اضافه کنید..."],
    nutrition: { protein: 45, carbs: 28, fat: 32 },
    culturalNotes: "یکی از معروف‌ترین غذاهای ایران", tips: ["سبزی را خوب تفت دهید"],
    videos: [], score: 94, reasons: ["لوبیا موجود است", "غذای مورد علاقه خانواده"]
  },
];

export function deductIngredientsAfterCooking(recipeId: string) {
  const recipe = recipes.find(r => r.id === recipeId);
  if (!recipe) return;

  recipe.ingredients.forEach(ing => {
    const pantryItem = pantryItems.find(p => p.name === ing.name);
    if (pantryItem) {
      pantryItem.quantity = Math.max(0, pantryItem.quantity - (ing.quantity * 0.8));
    }
  });
}