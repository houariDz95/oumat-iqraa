import React from 'react'
import { allBlogs } from "@/.contentlayer/generated";
import GithubSlugger, { slug } from "github-slugger";
import Categories from '../../components/Categories';
import BlogLayoutThree from '../../components/BlogLayout';


const slugger = new GithubSlugger();

export async function generateMetadata({ params }) {
  return {
    title: `${decodeURIComponent(params.slug).replaceAll("-"," ")}`,
    description: `تعرف على المزيد حول ${decodeURIComponent(params.slug) === "all" ? "التطورات الجديدة" : decodeURIComponent(params.slug)} من خلال مجموعتنا من المقالات والدروس المتخصصة`,
  };
}

const CategoryPage = ({params}) => {

  const allCategories = ["all"];
  const slugDecoded = decodeURIComponent(params.slug).replace(" ", "-").trim()

  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (slugDecoded === "all") {
        return true;
      }
      return slugified === slugDecoded;
    });
  });

  return (
    <article className="flex flex-col my-12">
        <div className=" px-5 sm:px-10  md:px-24  xl:px-32 flex flex-col">
          <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{slugDecoded}</h1>
          <span className="mt-2 inline-block">
            اكتشف المزيد من الفئات ووسع معرفتك!
          </span>
        </div>
        <Categories categories={allCategories} currentSlug={slugDecoded} />
        <div className="grid mt-10 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16  px-5 sm:px-10 md:px-24 xl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  )
}

export default CategoryPage