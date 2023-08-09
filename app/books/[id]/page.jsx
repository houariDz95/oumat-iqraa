import PageTitle from '@/components/PageTitle'
import BookDetails from '@/components/books/BookDetails'
import { fetchFromAPI } from '@/utils/fetchFromApi';


export async function generateMetadata({params: {id}}){
  const book  = await fetchFromAPI(`books/${id}`);
  return {
    title: book.title,
    description: book.text,
    }
  }

const Book = async ({params: {id}}) => {
  return <BookDetails id={id} />
}

export default Book