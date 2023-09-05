export const navLinks = [
  { label: 'الصفحة الرئيسية', path: '/' },
  { label: 'عن الموقع', path: '/about' },
  { label: 'قصص متنوعة', path: '/stories' },
  { label: 'المقالات', path: '/articles' },
  { label: 'إقتباسات', path: '/quotes?cat=الحياة' }
];

export const footerLinks = [
  {
    title: 'قصص متنوعة',
    links: [
      { title: 'كل القصص', url: '/stories' },
      { title: 'خيال', url: '/stories?cat=fantasy' },
      { title: 'قصص الأطفال', url: '/stories?cat=children' },
      { title: 'غموض', url: '/stories?cat=mystery' },
      { title: 'رومانسية', url: '/stories?cat=romance' },
    ],
  },
  {
    title: 'المقالات',
    links: [
      { title: 'قراءة المقالات', url: '/articles' },
      { title: 'كتابة المقالات', url: '/articles/write' },
      { title: 'آخر المقالات', url: '#recenet' },
    ],
  },
  {
    title: 'إقتباسات ',
    links: [
      { title: 'السعادة', url: '/quotes?cat=السعادة' },
      { title: 'الحياة', url: '//quotes?cat=الحياة' },
    ],
  },
  {
    title: 'سجّل الآن',
    links: [{ title: 'انضم إلينا', url: '/signup' }],
  }
];

export const stCategories = [
  { name: "كل القصص"},
  { path: 'children', name: 'قصص الأطفال' },
  { path: 'adventure', name: 'مغامرات' },
  { path: 'fantasy', name: 'خيال' },
  { path: 'mystery', name: 'غموض' },
  { path: 'romance', name: 'رومانسية' },
  { path: 'horror', name: 'رعب' },
  { path: 'literature', name: 'أدب' },
  { path: 'thriller', name: 'إثارة' },
  { path: 'dystopian', name: 'ديستوبيا' },
  { path: 'comedy', name: 'كوميديا' },
  { path: 'philosophy', name: 'فلسفة' },
];
 
 export const atCategories = [
  { name: "كل المقالات"},
  { name: "صحة", path: "health" },
  { name: "رياضة", path: "sports" },
  { name: "فنون", path: "arts" },
  { name: "سفر", path: "travel" },
  { name: "تعليم", path: "education" },
  { name: "ثقافة", path: "culture" },
  { name: "أعمال", path: "business" },
  { name: "أدب", path: "literature" },
  { name: "جمال", path: "beauty" },
  { name: "علم النفس", path: "psychology" },
  { name: "تطوير الذات", path: "self-improve" },
];

export const quotesCategories = [
  'الجمال',
  'الصداقة',
  'العادات',
  'السعادة',
  'الحياة',
  'الوحدة',
  'الحب',
  'الليل',
  'المخاطرة',
  'الحزن',
  'النجاح',
  'السفر',
]