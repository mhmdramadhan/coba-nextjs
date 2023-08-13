import React from "react";
import Posts from "./components/Posts";

const Blog = () => {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span className="whitespace-nowrap">
          I&apos;m <span className="font-bold">Rama</span>
        </span>
      </p>
      <Posts />
    </main>
  );
};

export default Blog;
