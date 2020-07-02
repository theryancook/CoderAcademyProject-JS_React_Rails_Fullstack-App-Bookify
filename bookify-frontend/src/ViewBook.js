import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteBook from './DeleteBook'

const ViewBook = (props) => {

    const [book, setBook] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        axios.get(`http://localhost:3000/books/${props.songId}`)
        .then(res => {
            setBook(res.data)
        })
        .catch(e => {
            setErrorMessage(e.message)
        })

    }, [])

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
                <li key={book.title}>
                    {book.title} by {book.author}.
                    <br/> 
                    The genre is {book.genre}.
                    <br/>
                    <Link to={"/"}>Back to the main page</Link>
                    <br />
                    <DeleteBook songId={book.id} />
                    <br/><br/> 
                </li>
        </div>
    )
}

export default ViewBook