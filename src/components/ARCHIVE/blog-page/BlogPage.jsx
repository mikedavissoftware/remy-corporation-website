import { useEffect } from "react"

import BlogHero from "./sub/BlogHero"


export default function BlogPage() {

  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="" >
      <BlogHero/>
      <div className="h-96 border-4 border-black"><p>Blog</p></div>
    </div>
  )
}