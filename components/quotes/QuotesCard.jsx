'use client'
import Image from 'next/image';
import { useState } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';

const QuotesCard = ({data}) => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(data.text);
    navigator.clipboard.writeText(data.text);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className='prompt_card'>
      <div className='flex items-center justify-end'>
        <div className='copy_btn' onClick={handleCopy}>
            <Image
              src={
                copied === data.text
                  ? "/assets/icons/tick.svg"
                  : "/assets/icons/copy.svg"
              }
              alt={copied === data.text ? "tick_icon" : "copy_icon"}
              width={12}
              height={12}
            />
          </div>
      </div>
      <p className='my-4 text-sm md:text-md text-gray-700'>{data.text}</p>
      <Link href={`/quotes/${data.author}`}>
        <p
          className='text-sm blue_gradient cursor-pointer'
        >
          #{data.author}
        </p>
      </Link>
    </motion.div>
  )
}

export default QuotesCard