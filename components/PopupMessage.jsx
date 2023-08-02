import { motion } from "framer-motion";
const PopupMessage = ({ onClose }) => {
  // List of supported languages by AI (replace with your actual supported languages)
  const supportedLanguages = [
    "الإنجليزية",
    "الإسبانية",
    "الفرنسية",
    "الألمانية",
    "الإيطالية",
    "الهولندية",
    "البرتغالية",
    "الصينية (المبسطة والتقليدية)",
    "اليابانية",
    "الكورية",
    "الروسية",
  ];

  return (
    <motion.div 
    initial={{Y: -50, opacity: 0}}
    whileInView={{y:0, opacity:1, transition: {duration: 1, ease: 'easeIn', delay: 0.2}}}
    className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">دعم اللغة الصناعي</h2>
        <p className="text-lg mb-4">
          الذكاء الصناعي لا يدعم اللغة العربية حاليًا. اللغات المدعومة:
        </p>
        <ul className="list-disc pl-6 mb-4">
          {supportedLanguages.map((language, index) => (
            <li key={index} className="text-lg">
              {language}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          إغلاق
        </button>
      </div>
    </motion.div>
  );
};

export default PopupMessage;
