import React, { Suspense} from "react";
import Blog from "../Blog/Blog";
import { useLoaderData } from "react-router";


const Blogs = () => {
  const data2 = useLoaderData();

 
  return (
    <div>
      <h1 className="text-3xl font-bold mt-5">Blogs</h1>
      <p className="text-gray-400 mt-3 mb-4">
        Let's Explore some basic concept that will make you a good developer
      </p>

      <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
  <div>
    {data2?.questions?.map((blog, index) => (
      <Blog key={index} blog={blog} />
    ))}
  </div>
</Suspense>
    </div>
  );
};

export default Blogs;
