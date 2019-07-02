import React from 'react'
import useGapi from 'usegapi'

const App = () => {
  const response = useGapi('https://www.googleapis.com/auth/youtube.readonly')

  console.log(response)

  return (
    <div>
      <div id='google-signin-button'/>
    </div>
  )
}

export default App