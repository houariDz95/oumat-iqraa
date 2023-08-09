'use client'
import { useEffect, useState } from "react"
import { fetchFromAPI } from "@/utils/fetchFromApi"
import BookCard from "./BookCard"
import SearchBar from "./SearchBar"
import Paginations from "../Pagination"
import { useRouter } from "next/navigation"

const BooksContainer = ({cat, page}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const books = data.books ? data.books : data
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const data  = await fetchFromAPI(cat ? `categories/${cat}` : 'new', page);
                setData(data)
            } catch (error) {
                alert(error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }, [cat, page])

    useEffect(() => {
        const updatedUrl = page === 1 ? router.pathname : (cat ? `/books?cat=${cat}&page=${page}` : '/books');
        router.replace(updatedUrl)
    }, [page])
    
    return (
    <>
        <SearchBar  cat={cat} page={page} isPending={isLoading} />
        <div className='grid lg:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2  gap-5 p-2 mt-10'>
            {books.map(book => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
        <Paginations cat={cat} totalPage={data.totalPages} page={parseInt(page) || 1}  />
    </>
  )
}

export default BooksContainer