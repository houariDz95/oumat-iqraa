import PageTitle from '@/components/PageTitle'
import BookDetails from '@/components/books/BookDetails'


export async function generateMetadata({params: {id}}){
  return {
    title: 'title',
    description: "dec",
    }
  }

const Book = async ({params: {id}}) => {
  return (
    <>
        <PageTitle title="الكتب"  desc={'title'} />
        <BookDetails id={id} />
    </>
  )
}

export default Book