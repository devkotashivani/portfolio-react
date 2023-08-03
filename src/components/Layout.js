import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
      <Header />
  
    {/* <main style = {{min-height:"60vh"}} */}
    
      <div>
      {children}
      </div>
     
      <Footer />
    </div>
  )
}

export default Layout
