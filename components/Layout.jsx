import React, {Fragment} from 'react'
import { Header } from './Index';

const Layout = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}

export default Layout
