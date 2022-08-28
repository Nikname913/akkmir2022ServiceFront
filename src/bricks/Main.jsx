import React from 'react'
import Header from './views/Header'
import Footer from './views/Footer'
import Workspace from './views/Workspace'

function Main() {
  return (
    <React.Fragment>
      <Header></Header>
      <Workspace></Workspace>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Main