import React, { useState } from 'react'
import AddBook from "./components/AddBook"
import BookList from "./components/BookList"

const App = () => {
  const [bookId,setBookId] = useState('')

  const getBookIdHandler = (id)=>{
    setBookId(id)
  }
  return (
    <div style={{display :'flex',flexDirection:'column',gap:'10px',justifyContent:'center',alignItems:'center'}}>
      <AddBook id={bookId} setBookId={setBookId}/>
      <BookList getBookId={getBookIdHandler}/>
    </div>
  )
}

export default App