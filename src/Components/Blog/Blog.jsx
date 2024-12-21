import { useState } from "react";

const Blog = ({blog, blogs, bookMarked, unBookMarked, addReadTime, removeReadTime}) => {
    const [marked, setMarked] = useState(false)
    const [read, setRead] = useState(false)


    const isMarked = () =>{
        setMarked(!marked)
    }
    
    const isRead = () =>{
        setRead(!read)
    }

    const {id, cover, title, author, author_img,
        posted_date, reading_time, hashtags} = blog
    return (
        <div className="flex flex-col mb-[40px]">
            <div className="mb-[32px]"><img className="rounded-[8px]" src={cover} alt="" /></div>

            <div className="flex justify-between items-center mb-[16px]">
                <div className="flex items-center">
                    <img className="w-[60px] mr-[32px]" src={author_img} alt="" />
                    
                    <div className="">
                    <p className="font-bold text-[24px]">{author}</p>
                    <p className="font-semibold text-[16px] text-[#11111199]">{posted_date}</p>
                    </div>
                </div>

                <div className="flex items-center">
                <p className="font-normal text-[20px] text-[#11111199]">{reading_time} min read</p>
                <button onClick={()=>{
                    {!marked ? bookMarked(blog) : unBookMarked(blog)};
                    isMarked()
                    }
                    } ><img src='src/assets/mark_read_icon.png' alt="" /></button>
                </div>
            </div>

            <p className="font-bold text-[40px] mb-[16px]">{title}</p>
            <p className="font-normal text-[20px] mb-[21px] text-[#11111199]">{hashtags}</p>
            <div className= {id === blogs.length ? "font-semibold text-[20px] pb-[38px]" : "font-semibold text-[20px] border-b-2 pb-[38px]"}>
                <button onClick={()=>{
                {!read ? addReadTime(reading_time) : removeReadTime(reading_time)};
                isRead()
            }}>Mark as read</button>
            </div>
        </div>
    );
};

export default Blog;