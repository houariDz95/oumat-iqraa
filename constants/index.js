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
  { label: 'عن الموقع', path: '/about' },
  { label: 'سياسة الخصوصية', path: '/privacy' },
  { label: 'اتصل بنا', path: '/contact' },
];

 
 export const atCategories = [
  { name: "كل المقالات"},
  { name: "صحة", path: "health" },
  { name: "فنون", path: "arts" },
  { name: "سفر", path: "travel" },
  { name: "تعليم", path: "education"},
  { name: "ثقافة", path: "culture" },
  { name: "أعمال", path: "business" },
  { name: "أدب", path: "literature" },
  { name: "جمال", path: "beauty" },
  { name: "علم النفس", path: "psychology" },
  { name: "تطوير الذات", path: "self-improve" },
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
   name: "سفر",
   path: "travel",
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

