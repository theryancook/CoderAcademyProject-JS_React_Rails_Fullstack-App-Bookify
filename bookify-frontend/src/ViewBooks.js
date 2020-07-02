import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBooks = () => {

    const [books, setBooks] = useState([])
    const [errorMessage, setErrorMessage] = useState("error")

    useEffect(() => {
        axios.get(`http://localhost:3000/book`)
        .then(res => {
            setBooks(res.data)
        })
        .catch(e => {
            setErrorMessage(e.message)
            console.log(e)
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
                    <br/><br/> 
                </li>
            ))}
        </div>
    )
}

export default ViewBooks