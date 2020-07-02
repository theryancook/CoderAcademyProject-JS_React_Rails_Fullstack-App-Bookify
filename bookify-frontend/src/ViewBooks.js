import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/books`)
        .then(res => {
            setBooks(res.data)
        })

    }, [])

    return (
        <div>
            {books.map((book, index) => (
                <li key={index}>
                    {book.title} by {book.author}.
                    <br/> 
                    The genre is {book.genre}.
                    <br/><br/> 
                </li>
            ))}
        </div>
    )
}

export default ViewBooks