import React from "react"
import Head from "react-helmet"

const Layout = ({children}) => (
  <div>
    <Head>
      <html lang="en" /> { /* this is valid react-helmet usage! */ }
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>
      { /* ... */ }
      <h3>This is post header</h3>
      <hr />
    </header>
    <div>{ children }</div>
    <footer>
      { /* ... */ }
      <hr />
      <h5>This is post footer</h5>
    </footer>
  </div>
)

export default Layout