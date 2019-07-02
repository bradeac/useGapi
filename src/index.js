import { useEffect, useState } from 'react'

function useGapi(scope) {
    const [response, setResponse] = useState({})

    useEffect(() => {
        const addMeta = () => {
            const meta = document.createElement('meta')
            meta.name = 'google-signin-client_id'
            meta.content = process.env.REACT_APP_GOOGLE_CLIENT_ID
        
            document.head.appendChild(meta)
        }
        
        const addScript = () => {
            const script = document.createElement('script')
            script.type = 'text/javascript'
            script.src = 'https://apis.google.com/js/platform.js?onload=onScriptLoad'
            
            script.onload = () => {
                loadClientWhenGapiReady(script);
            }
        
            document.body.appendChild(script)
        }

        const loadClientWhenGapiReady = (script) => {
            if (script.getAttribute('gapi_processed')) {
                window.gapi.signin2.render('google-signin-button', {
                    'onsuccess': responseGoogle,
                    'onfail': failureGoogle,
                    'scope': scope,
                })
            }
            else {
                setTimeout(() => { this.loadClientWhenGapiReady(script) }, 100)
            }
        }

        addMeta()
        addScript()

        const responseGoogle = user => {
            setResponse(user)
        }
    
        const failureGoogle = error => {
            setResponse(error)
        }
    }, [response])

    return response
}
  
export default useGapi