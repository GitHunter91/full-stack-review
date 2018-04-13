import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter as BR } from 'react-router-dom'
import store from './Redux/store'
import { Provider } from 'react-redux'

ReactDOM.render( 
    <Provider store ={ store } >
        <BR>
            <App />
        </BR>
    </Provider>, 
    document.getElementById('root'))

