'use client'
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { AiOutlineSearch } from "react-icons/ai";

const SearchButton = ({styles, icon}) => {
    const { pending } = useFormStatus()
  return (
    <button  type="submit" className={styles} >
    {!icon ? (pending ? "بحث..." : "ابحث") : (pending ? "بحث..." : <AiOutlineSearch />)}
  </button>
  )
}

export default SearchButton