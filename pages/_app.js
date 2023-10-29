import React, {useEffect, useContext} from "react";
import '@/styles/globals.css'
import '../styles/global.scss'

import { Layout } from "../components/Indexe";

export default function App({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>)
}
