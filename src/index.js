import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GithubProvider } from './context/context'
import { Auth0Provider } from '@auth0/auth0-react'

// dev-6esakf4t.us.auth0.com
// yKwsNlNPzYdx4BupwLsVbA8lzp9FUFPQ

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-6esakf4t.us.auth0.com'
      clientId='yKwsNlNPzYdx4BupwLsVbA8lzp9FUFPQ'
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
