import { query, where, collection, getDocs } from "firebase/firestore";  
import { db } from "@/firebase";
import PopularCard from "./PopularCard";


const titles = [
    "كايزن: السعي المستمر نحو التحسين والتطوير",
    "قوة العادات من كتاب: العادات الذرية",
    "وصفات طبيعية لجعل شعرك أكثر جمالًا",
    "الإيكيغاي: كشف غموض هدف الحياة والإشباع لرحلة ذات معنى",
    "اتجاهات التغذية والأساطير الغذائية",
    "علم نفس المرونة: الازدهار في وجه الصعوبات",
];

const Popular = async () => {
    const docsRef = collection(db, 'otherArticles');
    const q = query(docsRef, 
        where("title", "in", titles),
        );
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

    return (
    <div className="flex flex-wrap gap-6 mt-10">
      {data.map(article => (
        <PopularCard 
          key={article.id}
          imageUrl={article.imageUrl}
          title={article.title}
          articleText={article.articleText}
          id={article.id}
          isFromEditor={article.isFromEditor}
          category={article.category}
          date={article.timestamp?.toDate()}
        />
      ))}
    </div>
  )
}

export default Popular