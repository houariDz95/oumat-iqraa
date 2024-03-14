import Link from 'next/link';
import { Button } from './button';  // Import your Button component
import { ArrowLeft, ArrowRight } from 'lucide-react';

const CustomPagination = ({ pageCount, currentPage, cat }) => {
  const maxVisiblePages = 5; // Adjust the number of visible page links as needed
  const pages = [];
  
  // Generate an array of page numbers based on the current page and maxVisiblePages
  const start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const end = Math.min(pageCount, start + maxVisiblePages - 1);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className=''>
      <div className="flex items-center gap-2"> {/* Change 'gap-' to 'gap-2' */}
        {currentPage > 1 && (
          <Button variant="outline" size="icon">
            <Link href={cat ? `/library?cat=${cat}&page=${Number(currentPage) - 1}` : `/library?page=${Number(currentPage) - 1}`}>
              <ArrowRight className='w-5 h-5' />
            </Link>
          </Button>
        )}

        {pages.map((page) => (
          <Button
            key={page}
            variant={page === Number(currentPage) ? "default" : "outline"}
            size="icon"
          >
            <Link href={cat ? `/library?cat=${cat}&page=${page}` : `/library?page=${page}`}>
              {page}
            </Link>
          </Button>
        ))}

        {currentPage < pageCount && (
          <Button variant="outline" size="icon">
            <Link href={cat ? `/library?cat=${cat}&page=${Number(currentPage) + 1}` : `/library?page=${Number(currentPage) + 1}`}>
              <ArrowLeft className='w-5 h-5'/>
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CustomPagination;