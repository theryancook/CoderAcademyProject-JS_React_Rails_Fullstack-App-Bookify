import React from 'react'
import axios from 'axios'

const DeleteBook = (props) => {

    function deleteBook() {
        axios.delete(`http://localhost:3001/${props.songId}`)
            .then(props.onDelete)
    }

    return (
        <button onClick={deleteBook}>Delete Book</button>
    )
}

export default DeleteBook