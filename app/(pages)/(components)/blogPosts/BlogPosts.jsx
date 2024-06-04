import React from "react";
import Image from "next/image";
import blogData from "../../json/blogpostData.json";

export default function BlogPosts() {
  return (
    <div>
      <div className="my-14">
        <div>
          <div className="flex items-center justify-center">
            <p className="text-gray-400 text-[20px]">Blog</p>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-black text-[46px] font-extrabold">Blog Posts</p>
          </div>
        </div>
        <div className="md:w-[80%] w-[100%] mx-auto">
          <div className="flex pl-3 md:pl-22 my-10 items-center justify-around flex-wrap">
            {blogData.map((post) => (
              <div key={post.id} className="lg:w-1/3 md:w-1/2 my-6">
                <div className="w-[97%] flex items-center justify-center flex-col">
                  <Image
                    src={post.image}
                    className="md:w-[80%] w-[80%] flex items-center justify-center h-[60%] md:h-[80%]"
                    alt={post.title}
                    width={500}
                    height={500}
                  />
                  <div className="ml-12">
                    <p className="py-3 font-medium text-[23px]">{post.title}</p>
                    <p className="pb-2 text-gray-400 text-[16px] mb-3">
                      {post.author} • {post.date} •{" "}
                      <span className="text-red-500">{post.category}</span>
                    </p>
                    <p className="md:w-[100%] text-gray-500 text-[19px] w-[70%]">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-3">
                    <a
                      href={post.link}
                      className="text-red-500 text-[18px] text-start cursor-pointer"
                    >
                      Continue Reading...
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
