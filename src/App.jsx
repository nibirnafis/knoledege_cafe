import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import { useState } from "react";

function App() {
  const [bookMarkedList, setBookMarkedList] = useState([])
  const [readTime, setReadTime] = useState(0)

  const bookMarked = (blog) =>{
    const newBookMarkedList = [...bookMarkedList, blog]
    setBookMarkedList(newBookMarkedList)
    console.log('marked')
  }

  const unBookMarked = (blog) =>{
    const newBookMarkedList = bookMarkedList.filter(item => item.id !== blog.id);
    setBookMarkedList(newBookMarkedList)
    console.log('unMarked')
  }

  const addReadTime = (reading_time) => {
    const newReadTime = readTime + reading_time;
    setReadTime(newReadTime)
  }
  
  const removeReadTime = (reading_time) => {
    const newReadTime = readTime - reading_time;
    setReadTime(newReadTime)
  }

  return (
    <>
    <div className='flex justify-center'>
        <div className='max-w-[1280px]'>
            <Header></Header>
            <div className='flex justify-between'>
                <Blogs bookMarked={bookMarked} unBookMarked={unBookMarked} addReadTime={addReadTime} removeReadTime={removeReadTime}></Blogs>
                <Bookmarks bookMarkedList={bookMarkedList} readTime={readTime}></Bookmarks>
            </div>
        </div>
    </div>
    </>
  )
}

export default App
