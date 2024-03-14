
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cn(
        "inline-block py-1.5  md:py-2 px-6  md:px-10   rounded-full border-2 border-solid border-border  hover:scale-105 transition-all ease duration-200 m-2",
        props.className,
        active ? "bg-primary text-white" : "bg-white text-black "
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;