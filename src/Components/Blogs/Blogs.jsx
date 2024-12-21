import Blog from "../Blog/Blog";

import { useEffect } from "react";
import { useState } from "react";

const Blogs = ({bookMarked, unBookMarked, addReadTime, removeReadTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="max-w-[884px] mr-[24px]">
            <div>
                {
                blogs.map(blog=><Blog 
                    key={blog.id}
                    blogs={blogs}
                    blog={blog}
                    bookMarked={bookMarked}
                    unBookMarked={unBookMarked}
                    addReadTime={addReadTime}
                    removeReadTime={removeReadTime}
                    >
                    </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;