import PageTitle from '@/components/PageTitle'
import AuthorDetails from '@/components/books/AuthorDetails'
import { fetchFromAPI } from '@/utils/fetchFromApi';

export async function generateMetadata({params: {id}}){
  const author  = await fetchFromAPI(`contributors/${id}`);
  return {
    title: `${author.name} - أمة اقرأ`,
    description: author.description,
    }
  }

const Contributors = async ({params: {id}}) => {
  return (
    <>
        <PageTitle title="المساهمون" />
        <AuthorDetails id={id} />
    </>
  )
}

export default Contributors