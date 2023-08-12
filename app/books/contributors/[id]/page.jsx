import PageTitle from '@/components/PageTitle'
import AuthorDetails from '@/components/books/AuthorDetails'

export async function generateMetadata(paramKey){
  const name = paramKey.searchParams.name;
  const genericAuthorDescription = "استمتع بقراءة كتب هذا المؤلف واكتشف عالمه الأدبي. تعرّف على رؤية الكاتب وأسلوبه من خلال أعماله المميزة. استكشف المزيد حول المؤلف في أمة اقرأ: ";  return {
    title: `${name} - أمة اقرأ`,
    description: genericAuthorDescription + name,
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