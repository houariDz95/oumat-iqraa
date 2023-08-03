'use client'
import { useEffect, useState } from "react"
import { fetchFromAPI } from "@/utils/fetchFromApi"
import BookCard from "./BookCard"
import SearchBar from "./SearchBar"
import Paginations from "../Pagination"

const BooksContainer = ({cat, page}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const books = data.books ? data.books : data
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

  return (
    <>
        <SearchBar  cat={cat} page={data.currentPage} isPending={isLoading} />
        <div className='grid lg:grid-cols-5 sm:grid-cols-4 xs:grid-cols-3 grid-cols-2  gap-5 p-2 mt-10'>
            {books.map(book => (
            <BookCard key={book.id} book={book} />
            ))}
        </div>
        <Paginations cat={cat} totalPage={data.totalPages} page={data.currentPage} />
    </>
  )
}

export default BooksContainer