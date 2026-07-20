// ==================== RECIPES DATABASE (Scalable to 100+) ====================

export interface Recipe {
  id: string;
  slug: string;
  persianName: string;
  englishName: string;
  description: string;
  history?: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  calories: number;
  servings: number;
  ingredients: { name: string; quantity: number; unit: string }[];
  steps: string[];
  nutrition: { protein: number; carbs: number; fat: number };
  culturalNotes?: string;
  tips: string[];
  videos: string[];
  score?: number;
  reasons?: string[];
}

export const recipes: Recipe[] = [
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
    tips: ["مرغ را از قبل مرینیت کنید", "از زعفران استفاده کنید"], videos: []
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
    tips: ["از لیمو عمانی استفاده کنید"], videos: []
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
    tips: ["سبزی تازه استفاده کنید"], videos: []
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
    culturalNotes: "یکی از معروف‌ترین غذاهای ایران", tips: ["سبزی را خوب تفت دهید"], videos: []
  },
  {
    id: "r5", slug: "zereshk-polo", persianName: "زرشک پلو با مرغ", englishName: "Zereshk Polo",
    description: "غذای مجلسی و خوش‌رنگ", prepTime: 30, cookTime: 60, difficulty: "MEDIUM",
    calories: 680, servings: 4,
    ingredients: [
      { name: "برنج", quantity: 2, unit: "پیمانه" },
      { name: "مرغ", quantity: 700, unit: "گرم" },
      { name: "زرشک", quantity: 150, unit: "گرم" },
    ],
    steps: ["زرشک را با شکر تفت دهید.", "مرغ را سرخ کنید.", "برنج را دم کنید."],
    nutrition: { protein: 38, carbs: 75, fat: 24 },
    culturalNotes: "در مهمانی‌ها و عروسی‌ها بسیار محبوب است.",
    tips: ["زرشک را با شکر کم تفت دهید"], videos: []
  },
  {
    id: "r6", slug: "fesenjan", persianName: "فسنجان", englishName: "Fesenjan",
    description: "غذای ترش و شیرین مجلسی", prepTime: 35, cookTime: 90, difficulty: "HARD",
    calories: 720, servings: 4,
    ingredients: [
      { name: "مرغ", quantity: 800, unit: "گرم" },
      { name: "رب انار", quantity: 1, unit: "پیمانه" },
      { name: "گردو", quantity: 300, unit: "گرم" },
    ],
    steps: ["گردو را آسیاب کنید.", "رب انار را اضافه کنید.", "مرغ را بپزید."],
    nutrition: { protein: 42, carbs: 35, fat: 48 },
    culturalNotes: "یکی از قدیمی‌ترین غذاهای ایران", tips: ["گردو را خوب آسیاب کنید"], videos: []
  },
  {
    id: "r7", slug: "ash-reshteh", persianName: "آش رشته", englishName: "Ash Reshteh",
    description: "آش سنتی و مقوی", prepTime: 25, cookTime: 75, difficulty: "MEDIUM",
    calories: 380, servings: 6,
    ingredients: [
      { name: "لوبیا", quantity: 1, unit: "پیمانه" },
      { name: "نخود", quantity: 1, unit: "پیمانه" },
      { name: "رشته آش", quantity: 200, unit: "گرم" },
    ],
    steps: ["حبوبات را خیس کنید.", "سبزی را اضافه کنید.", "رشته را بریزید."],
    nutrition: { protein: 18, carbs: 52, fat: 9 },
    culturalNotes: "در زمستان و شب‌های سرد بسیار محبوب است.",
    tips: ["رشته را آخر کار اضافه کنید"], videos: []
  },
  {
    id: "r8", slug: "kabab-kubideh", persianName: "کباب کوبیده", englishName: "Kabab Koobideh",
    description: "کباب سنتی ایرانی", prepTime: 40, cookTime: 20, difficulty: "MEDIUM",
    calories: 590, servings: 4,
    ingredients: [
      { name: "گوشت", quantity: 600, unit: "گرم" },
      { name: "پیاز", quantity: 2, unit: "عدد" },
      { name: "نمک", quantity: 1, unit: "قاشق چای‌خوری" },
    ],
    steps: ["گوشت را با پیاز رنده شده ورز دهید.", "به سیخ بکشید.", "کباب کنید."],
    nutrition: { protein: 48, carbs: 8, fat: 38 },
    culturalNotes: "نماد آشپزی ایرانی در جهان", tips: ["گوشت را خوب ورز دهید"], videos: []
  },
  {
    id: "r9", slug: "tahchin", persianName: "ته‌چین مرغ", englishName: "Tahchin",
    description: "غذای مجلسی با ته‌دیگ طلایی", prepTime: 45, cookTime: 90, difficulty: "HARD",
    calories: 650, servings: 6,
    ingredients: [
      { name: "برنج", quantity: 2.5, unit: "پیمانه" },
      { name: "مرغ", quantity: 600, unit: "گرم" },
      { name: "ماست", quantity: 500, unit: "گرم" },
    ],
    steps: ["برنج را آبکش کنید.", "مرغ را بپزید.", "در قالب بریزید و بپزید."],
    nutrition: { protein: 35, carbs: 72, fat: 26 },
    culturalNotes: "در مجالس و مهمانی‌ها سرو می‌شود.",
    tips: ["ته‌دیگ را با حرارت ملایم درست کنید"], videos: []
  },
  {
    id: "r10", slug: "mirza-ghasemi", persianName: "میرزا قاسمی", englishName: "Mirza Ghasemi",
    description: "غذای شمالی خوشمزه", prepTime: 20, cookTime: 40, difficulty: "EASY",
    calories: 290, servings: 4,
    ingredients: [
      { name: "بادمجان", quantity: 4, unit: "عدد" },
      { name: "تخم‌مرغ", quantity: 4, unit: "عدد" },
      { name: "گوجه‌فرنگی", quantity: 3, unit: "عدد" },
    ],
    steps: ["بادمجان را کبابی کنید.", "گوجه را سرخ کنید.", "تخم‌مرغ را اضافه کنید."],
    nutrition: { protein: 14, carbs: 22, fat: 18 },
    culturalNotes: "از غذاهای محبوب شمال ایران", tips: ["بادمجان را خوب کبابی کنید"], videos: []
  },
];