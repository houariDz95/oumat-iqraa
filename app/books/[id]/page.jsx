import BookDetails from '@/components/books/BookDetails'

export async function generateMetadata(paramKey){
  const title = paramKey.searchParams.title ? paramKey.searchParams.title : 'استمتع بقراءة الكتب المثيرة في أمة اقرأ';
  const genericDescription = "استمتع بقراءة هذا الكتاب واستكشف عوالم مختلفة وأفق جديد. القراءة تمنحك الفرصة للسفر بعيدًا والتعلم من تجارب شخصيات مثيرة. اكتشف المزيد في كتابنا: ";
  return {
    title: `${title} - أمة اقرأ`,
    description: genericDescription + title,
    }
}

const Book = async ({params: {id}}) => {
  return <BookDetails id={id} />
}

export default Book