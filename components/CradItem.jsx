"use client"

import Image from "next/image"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card"
import Link from "next/link"


export function CradItem({title, url, imageUrl, category}) {
  return (
    <Link href={url}>
    <Card className="group bg-secondary">
      <CardContent className="relative h-56 shadow-sm">
        <Image src={imageUrl} fill className="object-cover rounded-t-md" alt={title} />
      </CardContent>
      <CardHeader className="space-y-2 mt-4">
        <span className="uppercase text-primary font-semibold text-xs sm:text-sm">
            {category}
        </span>
        <CardTitle className="h-10">
          <span className="bg-gradient-to-r from-primary/50 to-primary/80 bg-[length:0px_6px] 
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
              {title.length > 80 ? title.slice(0, 80)+ "..." : title}
          </span>
        </CardTitle>
      </CardHeader>
    </Card>
    </Link>
  )
}
