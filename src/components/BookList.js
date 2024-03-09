import React, { useEffect, useState } from 'react'
import BookDataServices from "../services/book.services"

const BookList = ({getBookId}) => {
  const [books,setBooks] = useState('')

  useEffect(()=>{
    getBooks()
  },[])

  const getBooks = async()=>{
    const data = await BookDataServices.getAllBooks()
    setBooks(data.docs.map((doc)=>({...doc.data(), id : doc.id})))
  }

  const deletehandler = async(id)=>{
    await BookDataServices.deleteBook(id)
    getBooks()
  }
  return (
    <div>
      <button onClick={getBooks}>Refresh List</button>
      <table style={{margin:'10px',textAlign:'center',border:'2px solid'}}>
        <thead>
          <tr>
            <th>SI.NO.</th>
            <th>BOOKTITLE</th>
            <th>BOOKAUTHOR</th>
            <th>STATUS</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
        {books && books.map((eachBook,index)=>{
          return <tr key={eachBook.id}>
            <td>{index + 1}</td>
            <td>{eachBook.title}</td>
            <td>{eachBook.author}</td>
            <td>{eachBook.status}</td>
            <td>
              <button style={{background:'lightgray'}} onClick={(e)=>getBookId(eachBook.id)}>Edit</button>
              <button style={{background:'red'}} onClick={()=>deletehandler(eachBook.id)}>Delete</button>
            </td>
          </tr>
        })}
          
        </tbody>
      </table>
    </div>
  )
}

export default BookList