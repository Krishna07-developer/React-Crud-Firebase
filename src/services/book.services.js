import {db} from "../firebase-config"
import { collection, getDoc,getDocs,updateDoc,addDoc,deleteDoc,doc } from "firebase/firestore"

const booksCollectionRef = collection(db,"books")
class BookDataService {
    addBooks = (newBook)=>{
        return addDoc(booksCollectionRef,newBook)
    }
    updateBooks = (id,updatedBook)=>{
        const bookDoc = doc(db,"books",id)
        return updateDoc(bookDoc,updatedBook)
    }
    deleteBook = (id)=>{
        const bookDoc = doc(db,"books",id)
        return deleteDoc(bookDoc)
    }
    getAllBooks = ()=>{
        return getDocs(booksCollectionRef)
    }
    getBook = (id)=>{
        const bookDoc = doc(db,"books",id)
        return getDoc(bookDoc)
    }
}

export default new BookDataService();