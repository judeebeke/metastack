import React, {Fragment} from 'react'
import { Header } from './Indexe';

const Layout = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}

export default Layout
