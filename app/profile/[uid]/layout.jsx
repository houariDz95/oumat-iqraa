import Navbar from "@/components/Nav"

import { db} from "@/firebase"
import { collection, doc, getDoc } from "firebase/firestore"

export async function generateMetadata({params: {uid}}){
    const user = await getDoc(doc(collection(db, "users"), uid));
    return {
      title: ` ${user?.data()?.username} - أمة اقرأ`,
      description: 'اطلع على ملف المستخدم الخاص بك في موقع أمة اقرأ وقم بتعديل المعلومات الشخصية وإدارة الإعدادات.',      }
}

export default function Layout({ children }) {
  return (
    <div> 
        <Navbar />
        {children}
    </div>
  )
}
