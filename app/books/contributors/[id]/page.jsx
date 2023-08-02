import PageTitle from '@/components/PageTitle'
import AuthorDetails from '@/components/books/AuthorDetails'
import { notFound } from 'next/navigation'

const getAuthor = async (id) => {
    const res = await fetch(`https://books-lib.onrender.com/contributors/${id}`, {
        cache: "no-store",
    })
    if (!res.ok) {
        return notFound()
      }
    
      return res.json(); 
}

const Contributors = async ({params: {id}}) => {
  const data = await getAuthor(id)

  return (
    <>
        <PageTitle title="المساهمون" />
        <AuthorDetails data={data} />
    </>
  )
}

export default Contributors