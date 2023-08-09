export const navLinks = [
  { label: 'الصفحة الرئيسية', path: '/' },
  { label: 'عن الموقع', path: '/about' },
  { label: 'الكتب', path: '/books' },
  { label: 'المقالات', path: '/articles' },
  { label: 'إقتباسات', path: '/quotes?cat=الجمال' }
];

export const footerLinks = [
  {
    title: 'المكتبة',
    links: [
      { title: 'الكتب', url: '/books' },
      { title: 'روايات', url: '/books?cat=novels&page=1' },
      { title: 'قصص الأطفال', url: '/books?cat=children.stories&page=1' },
      { title: 'مسرحيات', url: '/books?cat=plays&page=1' },
      { title: 'سياسة', url: '/books?cat=politics&page=1' },
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

export const categories = [
    { name: 'كتب جديدة' },
    { name: 'إدارة أعمال', path: 'business' },
    { name: 'أدب', path: 'literature' },
    { name: 'أدب رحلات', path: 'travel.literature'},
    { name: 'أديان', path: 'religions' },
    { name: 'اقتصاد', path: "economics"},
    { name: 'تاريخ', path: "history"},
    { name: 'تكنولوجيا', path: "technology" },
    { name: 'جغرافيا', path: "geography" },
    { name: 'خيال علمي', path: "science.fiction"},
    { name: 'روايات', path: "novels" },
    { name: 'سياسة', path: "politics" },
    { name: 'سير الأعلام', path: "biographies" },
    { name: 'شعر', path: "poetry" },
    { name: 'صحة', path: "health"},
    { name: 'علم نفس', path: "psychology"},
    { name: 'علوم', path: "science" },
    { name: 'علوم اجتماعية', path: "social.sciences" },
    { name: 'علوم البيئة', path: "environmental.sciences"},
    { name: 'علوم اللغة', path: "linguistics"},
    { name: 'فلسفة', path: "philosophy"},
    { name: 'فنون', path: "arts" },
    { name: 'قصص الأطفال', path: "children.stories" },
    { name: 'قصص بوليسية', path: "detective.fiction"},
    { name: 'مسرحيات', path: "plays"},
    { name: 'نقد أدبي', path: "literary.criticism"},
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
  'القهوة',
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