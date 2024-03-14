import {
  Book,
  Briefcase,
  Heart,
  Globe,
  DollarSign,
  Monitor,
  MapPin,
  Rocket,
  PenTool,
  Layers,
  Flag,
  Feather,
  Smile,
  Brain,
  Users,
  Sun,
  Megaphone,
  Theater,
  Eye,
  Users2,
  History,
  User,
  Activity,
} from 'lucide-react';

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
  { label: 'مكتبة', path: '/library' },
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

export const booksCategories = [
  { value: "كل الكتب", path: "/", icon: <Book className='w-4 h-4' /> },
  { value: "إدارة أعمال", path: "business",icon:  <Briefcase className='w-4 h-4'  /> },
  { value: "أدب", path: "literature", icon: <Book className='w-4 h-4' />},
  { value: "أدب رحلات", path: "travel.literature", icon: <Globe className='w-4 h-4' />},
  { value: "أديان", path: "religions", icon: <Heart className='w-4 h-4' /> },
  { value: "اقتصاد", path: "economics", icon: <DollarSign className='w-4 h-4'  /> },
  { value: "تاريخ", path: "history", icon: <History className='w-4 h-4' /> },
  { value: "تكنولوجيا", path: "technology", icon: <Monitor className='w-4 h-4' />},
  { value: "جغرافيا", path: "geography", icon: <MapPin className='w-4 h-4' /> },
  { value: "خيال علمي", path: "science.fiction", icon: <Rocket className='w-4 h-4' /> },
  { value: "روايات", path: "novels", icon: <PenTool className='w-4 h-4' /> },
  { value: "سياسة", path: "politics", icon: <Layers className='w-4 h-4' /> },
  { value: "سير الأعلام", path: "biographies", icon: <Flag className='w-4 h-4' /> },
  { value: "شعر", path: "poetry", icon: <User className='w-4 h-4' /> },
  { value: "صحة", path: "health", icon: <Feather className='w-4 h-4' />},
  { value: "علم نفس", path: "psychology", icon: <Heart className='w-4 h-4' /> },
  { value: "علوم", path: "science", icon: <Smile className='w-4 h-4' />},
  { value: "علوم اجتماعية", path: "social.sciences", icon: <Brain className='w-4 h-4' /> },
  { value: "علوم البيئة", path: "environmental.sciences", icon: <Activity />},
  { value: "علوم اللغة", path: "linguistics", icon: <Users className='w-4 h-4' /> },
  { value: "فلسفة", path: "philosophy", icon: <Sun className='w-4 h-4'  />},
  { value: "فنون", path: "arts", icon: <Globe className='w-4 h-4' /> },
  { value: "قصص الأطفال", path: "children.stories", icon: <Megaphone className='w-4 h-4'  /> },
  { value: "قصص بوليسية", path: "detective.fiction", icon: <Users2 className='w-4 h-4'  /> },
  { value: "مسرحيات", path: "plays", icon: <Theater className='w-4 h-4' /> },
  { value: "نقد أدبي", path: "literary.criticism", icon: <Eye className='w-4 h-4' />},
];