import PageTitle from '@/components/PageTitle'
import BookDetails from '@/components/books/BookDetails'
import { notFound } from 'next/navigation'

const getBook = async (id) => {
    const res = await fetch(`https://books-lib.onrender.com/books/${id}`, {
        cache: "no-store",
    })
    if (!res.ok) {
        return notFound()
      }
    
      return res.json(); 
}

export async function generateMetadata({params: {id}}){
  const data = await getBook(id)
  return {
    title: data.title,
    description: data.text,
    }
  }

const Book = async ({params: {id}}) => {
  const data = await getBook(id)
  return (
    <>
        <PageTitle title="الكتب"  desc={data.title} />
        <BookDetails data={data} />
    </>
  )
}

export default Book