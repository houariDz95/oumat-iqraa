export const navLinks = [
  { label: 'الصفحة الرئيسية', path: '/' },
  { label: 'عن الموقع', path: '/about' },
  { label: 'قصص متنوعة', path: '/stories' },
  { label: 'المقالات', path: '/articles' },
  { label: 'إقتباسات', path: '/quotes?cat=الجمال' }
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
  { path: 'sci-fi', name: 'خيال علمي' },
  { path: 'romance', name: 'رومانسية' },
  { path: 'horror', name: 'رعب' },
];
 
 export const atCategories = [
  { name: "كل المقالات"},
  { name: "أخبار", path: "news" },
  { name: "تكنولوجيا", path: "technology" },
  { name: "صحة", path: "health" },
  { name: "رياضة", path: "sports" },
  { name: "فنون", path: "arts" },
  { name: "علوم", path: "science" },
  { name: "سفر", path: "travel" },
  { name: "طعام", path: "food" },
  { name: "تاريخ", path: "history" },
  { name: "تعليم", path: "education" },
  { name: "ثقافة", path: "culture" },
  { name: "أعمال", path: "business" },
  { name: "سيارات", path: "cars" },
  { name: "موسيقى", path: "music" },
  { name: "أفلام", path: "movies" },
  { name: "أدب", path: "literature" },
  { name: "تصميم", path: "design" },
  { name: "موضة", path: "fashion" },
  { name: "جمال", path: "beauty" },
  { name: "ألعاب", path: "games" },
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