'use client'
import { atCategories } from "@/constants"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SearchButton from "../SearchButton";

const SearchBarAt = ({cat}) => {
    const [selectedCategory, setSelectedCategory] = useState(cat ? cat : "all");
    const router = useRouter()
    const handleCategoryChange = (event) => {
      setSelectedCategory(event.target.value);
    };
    useEffect(() => {
      selectCategory()
    }, [selectedCategory])

    const selectCategory = () => {
      // Perform search operation with the selected category and search term
      router.push(selectedCategory !== "all" ? `/articles?cat=${selectedCategory}` : "/articles")
    };
  
  
  return (
    <div className="flex items-center justify-between flex-col md:flex-row gap-4 w-full p-2">
        <div className="w-[350px]">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">فئات</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCategory}
                    label="فئات"
                    onChange={handleCategoryChange}
                >
                    {atCategories.map((category, i) => (
                    <MenuItem 
                    key={i}
                    value={category.path ? category.path : "all"}  
                    onClick={selectCategory}
                    >
                    {category.name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
        </div>
        <form 
          action={(formData) => {
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

export default SearchBarAt