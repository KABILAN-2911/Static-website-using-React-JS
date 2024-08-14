import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import Header from './header'
import Footer from './footer'
import Content from './content'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    < Header />
    < Content />
    < Footer />
  </React.StrictMode>,
)

