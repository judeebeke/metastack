import React from 'react'
import { Header } from './Index'
const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  )
}

export default Layout
