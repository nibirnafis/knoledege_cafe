import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookMarkedList, readTime}) => {

    return (
        <div className="flex flex-col">
            <p className="py-[21px] px-[50px] mb-[24px] bg-[#6047EC1A] font-bold text-[24px] text-center text-[#6047EC] border-[1px] border-[#6047EC] rounded-[8px]">Spent time on read : {readTime} min</p>
            <div className="flex flex-col p-[30px] bg-[#1111110D] rounded-[8px] min-w-[350px]">
                <p className="font-bold text-[24px] mb-[16px]">Bookmarked Blogs : {bookMarkedList.length}</p>
                <div className="flex flex-col justify-center items-center">
                    {
                        bookMarkedList.map(blog => <Bookmark key={blog.id} blog={blog}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmarks;