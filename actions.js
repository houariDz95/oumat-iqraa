import { db } from "@/firebase";
import { query, orderBy, limit, collection, getDocs, where, doc, getDoc } from "firebase/firestore";  


const titles = [
  "كايزن: السعي المستمر نحو التحسين والتطوير",
  "قوة العادات من كتاب: العادات الذرية",
  "وصفات طبيعية لجعل شعرك أكثر جمالًا",
  "الإيكيغاي: كشف غموض هدف الحياة والإشباع لرحلة ذات معنى",
  "اتجاهات التغذية والأساطير الغذائية",
  "علم نفس المرونة: الازدهار في وجه الصعوبات",
];

export const getRecent = async () => {
    try {
      const docsRef = collection(db, 'otherArticles');
      const q = query(docsRef, orderBy("timestamp", 'desc'), limit(6));
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      return data
    } catch (error) {
      console.log(error);
    }
  }

export const getRecentSt = async () => {
  try {
    const docsRef = collection(db, 'stories');
    const q = query(docsRef, orderBy("timestamp", 'desc'), limit(6));
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return data
  } catch (error) {
    console.log(error);
  }
}

export const getPoular = async () => {
    try {
      const docsRef = collection(db, 'otherArticles');
      const q = query(docsRef, 
          where("title", "in", titles),
          );
      const querySnapshot = await getDocs(q)
      const popular = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      return popular
    } catch (error) {
      console.log(error)
    }
  }

  export  const getArticles = async (cat) => {
    try {
    
      const docsRef = collection(db, 'otherArticles');
      const q = cat ? query(docsRef, where('category', 'array-contains', cat)) : query(docsRef, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const allArticles = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      return allArticles
    } catch (error) {
      console.log(error);
    }
  }

  export  const getStories = async (cat) => {
    try {
    
      const docsRef = collection(db, 'stories');
      const q = cat ? query(docsRef, where('category', 'array-contains', cat)) : query(docsRef, orderBy('timestamp', 'desc'));
      const querySnapshot = await getDocs(q);
      const allStories = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      return allStories
    } catch (error) {
      console.log(error);
    }
  }

export const getPost = async (id) => {
  try {
    if(id){
      const collectionRef = collection(db, 'otherArticles')
      const docRef = doc(collectionRef, id);
      const data = await getDoc(docRef)
      const post = {...data.data(), id: data.id}
      return post
    }

  } catch (error) {
    console(error)
  }
}

export const readMore = async (randomCat, id) => {
  try {
    const docsRef = collection(db, 'otherArticles');
    let q = query(docsRef, where('category', 'array-contains', randomCat), limit(6));
    const querySnapshot = await getDocs(q);
    const postData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    const filtredPost = postData.filter((item) => item.id !== id)
    const readMore = filtredPost  
    return readMore
  } catch (error) {
    console.log(error)
  }
}

export const getPostSt = async (id) => {
  try {
    if(id){
      const collectionRef = collection(db, 'stories')
      const docRef = doc(collectionRef, id);
      const data = await getDoc(docRef)
      const post = {...data.data(), id: data.id}
      return post
    }

  } catch (error) {
    console(error)
  }
}

export const readMoreSt = async (randomCat, id) => {
  try {
    const docsRef = collection(db, 'stories');
    let q = query(docsRef, where('category', 'array-contains', randomCat), limit(6));
    const querySnapshot = await getDocs(q);
    const postData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    const filtredPost = postData.filter((item) => item.id !== id)
    const readMore = filtredPost  
    return readMore
  } catch (error) {
    console.log(error)
  }
}

export const getAllArticles = async () => {
  try {
    const collectionRef = collection(db, 'otherArticles');
    const querySnapshot = await getDocs(collectionRef);
    const postData = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return postData
  } catch (error) {
    console.log(error)
  }
}

export const getArticlesByQuery = async (queryText) => {
  try {
    const articlesRef = collection(db, 'otherArticles');

    // Get all documents from the collection
    const querySnapshot = await getDocs(articlesRef);

    // Extract data from the snapshot and filter on the client side
    const articles = [];
    querySnapshot.forEach((doc) => {
      const title = doc.data().title;
      if (title.includes(queryText)) {
        articles.push({ id: doc.id, ...doc.data() });
      }
    });

    return articles;

    return articles
  } catch (error) {
    console.log(error)
  }
}