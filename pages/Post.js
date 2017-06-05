import React from "react"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import PostLayout from '../layouts/PostLayout'
import PostHeroLayout from '../layouts/PostHeroLayout'
import ErrorPage from './Error'
const LAYOUTS = {
  default: PostLayout,
  "with-hero": PostHeroLayout
}

const BlogPost = ({ page, hasError }) => {
  if (hasError) {
    return <ErrorPage error={page.error} />
  }

  const node = page.node || {}
  const Layout = LAYOUTS[node.layout] || LAYOUTS['default']
  if(!node.body) {
    return <div />
  }
  return (
      <Layout>
        <h1>{ node.title }</h1>
        <BodyRenderer>{ node.body }</BodyRenderer>
      </Layout>
)}

const BlogPostContainer = createContainer(BlogPost, (props) => {
  return {
  page: query({ collection: "posts", id: props.params.splat }),
}})

export default BlogPostContainer