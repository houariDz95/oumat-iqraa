'use client'
import { categories } from "@/constants"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SearchButton from "../SearchButton";
import Loader from "../Loader";

const SearchBar = ({cat, page, isPending}) => {
  const [selectedCategory, setSelectedCategory] = useState(cat ? cat : "new");
  const router = useRouter()
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  useEffect(() => { 
    selectCategory()
  }, [selectedCategory])


  const selectCategory = () => {
    // Perform search operation with the selected category and search term
    router.push(selectedCategory !== "new" ? `/books?cat=${selectedCategory}&page=1` : "/books")
  };

  if(isPending) return (
    <div className="h-screen w-screen bg-black/50 fixed flex-center top-0 left-0 z-10">
        <div className="bg-white p-6 rounded-lg shadow-lg flex-center gap-2">
          <Loader />
          <h1 className="text-black text-xl">انتظر قليلاً، من فضلك...</h1>
        </div>
    </div>
  )

  return (
    <div className="flex items-center justify-between flex-col md:flex-row gap-4 w-full p-2">
      <div className="sm:w-[350px] w-[260px]">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">فئات</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedCategory}
            label="فئات"
            onChange={handleCategoryChange}
          >
            {categories.map((category, i) => (
            <MenuItem 
            key={i}
            value={category.path ? category.path : "new"}  
           // action={selectCategory}
            onClick={() =>  selectCategory()}
            >
              {category.name}
            </MenuItem>
          ))}
          </Select>
        </FormControl>
      </div>
      <form action={(formData) => {
        const searchTerm = formData.get("search")
        if(!formData.get("search")) return 
        router.push(`/search/${searchTerm}`)
      }} 
      className="flex items-center gap-2">
        <input
          type="text"
          name="search"
          required
          className="flex-grow px-2 py-1 border border-gray-300 rounded focus:outline-none focus:border-primary text-right "
          placeholder="ابحث..."
        />
        <SearchButton icon styles="px-4 py-2 bg-primary text-white rounded focus:outline-none hover:bg-purple-600" />
      </form>
    </div>
  )
}

export default SearchBar