'use client';
import { useRouter } from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Paginations = ({page, cat, totalPage, setCurrentPage }) => {
    const router = useRouter()
    const paginate = (e, value) => {
        router.push(`/books?cat=${cat}&page=${value}`)
      }
  return (
    <div className="flex-center my-10">
        <Pagination
        variant="text"
        color="secondary"
        shape="rounded"
        defaultPage={1}
        count={totalPage}
        page={page}
        onChange={paginate}
        size="large"
        renderItem={item => (
          <PaginationItem
            components={{ previous: IoIosArrowForward, next: IoIosArrowBack }}
            {...item}
          />
        )}
        sx={{
          direction: 'rtl',
        }}
        />
    </div>
  )
}

export default Paginations