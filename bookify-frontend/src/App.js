import React from 'react'
import ViewBooks from './ViewBooks'
import ViewBook from './ViewBook'
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Route exact path="/" component={ViewBooks}></Route>
            </BrowserRouter>
            {/* <ViewBooks /> */}
            <ViewBook songId="1" />
        </div>
    )
}

export default App