# usegapi

> React Hook for using Gapi (Google&#x27;s SignIn Javascript authentication client)

[![NPM](https://img.shields.io/npm/v/usegapi.svg)](https://www.npmjs.com/package/usegapi) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save usegapi
```

## Prerequisites
- Add a `REACT_APP_GOOGLE_CLIENT_ID` environment variable to your .env file,
containing your Google client ID.  

- Choose the OAuth scope(s) for the Google API that you will want to access.  
This scope will be passed to the hook as a parameter.

If you don't have a Google client ID, go to https://console.developers.google.com  
List of scopes: https://developers.google.com/identity/protocols/googlescopes  

## Usage

```jsx
import React from 'react'
import useGapi from 'usegapi'

const Login = () => {
    // using the readonly youtube scope for this example
    // response will either contain the user data or an error object

    const response = useGapi('https://www.googleapis.com/auth/youtube.readonly')

    return (
        <>
            // mandatory div. use this exact same id !!!
            <div id='google-signin-button'/>
        </>
    )
}
```

## License

MIT © [bradeac](https://github.com/bradeac)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
