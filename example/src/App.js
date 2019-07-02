import React from 'react'
import useGapi from 'usegapi'

const App = () => {
    // using the readonly youtube scope for this example
    // response will either contain the user data or an error object

    const response = useGapi('https://www.googleapis.com/auth/youtube.readonly')

    return (
        <div>
            // mandatory div. use this exact same id !!!
            <div id='google-signin-button' />
        </div>
    )
}

export default App