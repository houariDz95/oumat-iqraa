"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchMovie = (e) => {
    e.preventDefault();
    router.push(`?movie=${input}`);
    setInput("");
  };

  return (
    <div className="bg-[#090b0e] py-4 px-4 md:px-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-[26px] font-medium italic hidden md:block">Popcorn&Passion</div>
        </Link>

        <form onSubmit={searchMovie} className="flex-1">
          <div className="space-x-4 flex items-center ">
            <input
              className="bg-gray-700 px-4 py-2 outline-none placeholder:text-textColor flex-1"
              type="text"
              dir="ltr"
              value={input}
              placeholder="Search a Movie..."
              onChange={(e) => setInput(e.target.value)}
            />

            <button
              type="submit"
              className="bg-gray-700 text-textColor py-2 px-4 hover:bg-textColor hover:text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
