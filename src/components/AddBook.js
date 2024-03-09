import React, { useEffect, useState } from 'react'
import BookDataServices from "../services/book.services"

const AddBook = ({id,setBookId}) => {
  const [bookslist,setBooksList] = useState({
    title : '',
    author : ''
  })
  const [status,setStatus] = useState('Available')
  const [flag,setFlag] = useState(true)
  const [message , setMessage] = useState({error : false, msg :''})
  const handleChange = (e)=>{
    setBooksList({
      ...bookslist,
      [e.target.name] : e.target.value

    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    setMessage('')

    if(bookslist.title === '' && bookslist.author === ''){
      setMessage({error : true, msg : 'All fields are mandatory!'})
      return ;
    }

    const newBook = {
      title : bookslist.title,
      author : bookslist.author,
      status
    }

    try {
      if(id !== undefined && id !== ''){
        await BookDataServices.updateBooks(id,newBook)
        setBookId('')
        setMessage({error : false,msg : 'Updated Successfully!'})
      }else{
        await BookDataServices.addBooks(newBook)
        setMessage({error : false, msg : 'New Book added successfully!'})
      }
    } catch (error) {
      setMessage({error : true, msg:error,message})
    }

    setBooksList({
      title : '',
      author : ''
    })
    
  }

  const editHandler = async()=>{
    setMessage('')
    try {
      const docSnap = await BookDataServices.getBook(id)
      setBooksList({
        title : docSnap.data().title,
        author : docSnap.data().author
      })
      setStatus(docSnap.data().status)
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    if(id !== undefined && id !== ''){
      editHandler()
    }
  },[id])
  return (
    <div>
      <div style={{color : 'brown'}}>List of Book Details:</div>
      <form style={{display:'flex',flexDirection : 'column',gap:'20px'}} onSubmit={handleSubmit}>
        <input type="text" placeholder='BookTitle' name='title' value={bookslist.title}  onChange={handleChange}/>
        <input type="text" placeholder='BookAuthor' name='author' value={bookslist.author} onChange={handleChange}/>
        <button disabled={flag} style={{backgroundColor : 'green'}} onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}>AVAILABLE</button>
        <button disabled={!flag} style={{backgroundColor : 'red'}} onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}>NOTAVAILABLE</button>
        <input type="submit" value={'ADD/UPDATE'}/>
      </form>
    </div>
  )
}

export default AddBook