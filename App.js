import React from "react"
import { Router, Route, browserHistory } from "react-router"
import { createApp, renderApp } from "@phenomic/preset-react-app/lib/client"
import Post from './pages/Post'
import Home from './pages/Home'
import Error from './pages/Error'
import Html from './Html'

const routes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ Home } />
    <Route path="/after/:after" component={ Home } />
    <Route path="/blog/*" component={ Post } collection="posts" />
    <Route path="*" component={ Error } />
  </Router>
)

export default createApp(routes, Html)

if (module.hot) {
  module.hot.accept(() => renderApp(routes, Html))
}