import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ViewBooks = () => {

    const [books, setBooks] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/books`)
        .then(res => {
            setBooks(res.data)
        })
        .catch(e => {
            setErrorMessage(e.message)
        })

    }, [])

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            {books.map((book, index) => (
                <li key={index}>
                    {book.title} by {book.author}.
                    <br/> 
                    The genre is {book.genre}.
                    <br/>
                    <Link to={`/${book.id}`}>Check out the book here</Link>
                    <br/><br/> 
                </li>
            ))}
        </div>
    )
}

export default ViewBooks