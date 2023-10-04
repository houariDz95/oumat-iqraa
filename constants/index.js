import {MdOutlineSelfImprovement, 
  MdPsychology, 
  MdHealthAndSafety,
  MdBusiness,
  MdOutlineTravelExplore,
  MdCastForEducation
} from 'react-icons/md'

export const navLinks = [
  { label: 'الصفحة الرئيسية', path: '/' },
  { label: 'المقالات', path: '/articles' },
  { label: 'القصص', path: '/stories' },
  { label: 'اتصل بنا', path: '/contact' },
  { label: 'عن الموقع', path: '/about' },
];

 
 export const atCategories = [
  { name: "كل المقالات"},
  { name: "صحة", path: "health" },
  { name: "فنون", path: "arts" },
  { name: "تعليم", path: "education"},
  { name: "ثقافة", path: "culture" },
  { name: "أعمال", path: "business" },
  { name: "جمال", path: "beauty" },
  { name: "علم النفس", path: "psychology" },
  { name: "تطوير الذات", path: "self-improve" },
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
  { path: 'literature', name: 'أدب' },
  { path: 'historical', name: 'تاريخي' },
  { path: 'thriller', name: 'إثارة' },
  { path: 'dystopian', name: 'ديستوبيا' },
  { path: 'comedy', name: 'كوميديا' },
  { path: 'self-help', name: 'تطوير الذات' },
  { path: 'biography', name: 'سيرة ذاتية' },
  { path: 'philosophy', name: 'فلسفة' },
  { path: 'classics', name: 'كلاسيكيات' },
  { path: 'assahaba', name: 'قصص الصحابة' },
];

export const popularCategories = [
  { 
    name: "تطوير الذات",
    path: "self-improve",
    color: "#57c4ff31",
    icon: <MdOutlineSelfImprovement />,
  },
  { 
    name: "علم النفس",
    path: "psychology",
    color: "#da85c731",
    icon: <MdPsychology />,
  },
  { 
    name: "صحة", 
    path: "health",
    color: "#7fb88133",
    icon: <MdHealthAndSafety />,
  },
  { 
    name: "أعمال", 
    path: "business",
    color: "#ffb04f45",
    icon: <MdBusiness />,
  },
  { 
   name: "ثقافة ",
   path: "culture",
   color: "#ff795736",
   icon: <MdOutlineTravelExplore />,
  },
  { 
    name: "تعليم", 
    path: "education" ,
    color: "#5e4fff31",
    icon: <MdCastForEducation />,
  }
]

