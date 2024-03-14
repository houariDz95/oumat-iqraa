import moment from "moment";
import Link from "next/link";
import React from "react";
//import ViewCounter from "./ViewCounter";

const ContentDetails = ({ date, category, readingTime, url}) => {
  return (
    <div style={{direction: "ltr"}} className="px-2 md:px-10 bg-primary text-white  py-2 flex items-center  justify-around flex-wrap text-lg sm:text-xl font-medium mx-5  md:mx-10 rounded-lg">
      <time className="m-3">
        <p className="flex items-center gap-2">
            {moment(date).format('MMMM DD, YYYY')}
        </p>
      </time>
      <span className="m-3">
        {/*<ViewCounter slug={blogSlug} />*/}
        <div>1250 views</div>
      </span>
      <div className="m-3"> {readingTime}</div>
      <Link href={url} className="m-3">
        #{category}
      </Link>
    </div>
  );
};

export default ContentDetails;