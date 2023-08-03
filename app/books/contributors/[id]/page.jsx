import PageTitle from '@/components/PageTitle'
import AuthorDetails from '@/components/books/AuthorDetails'

const Contributors = async ({params: {id}}) => {
  return (
    <>
        <PageTitle title="المساهمون" />
        <AuthorDetails id={id} />
    </>
  )
}

export default Contributors