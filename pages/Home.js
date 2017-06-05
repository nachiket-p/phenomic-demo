import React from "react"
import { createContainer, query, BodyRenderer } from "@phenomic/preset-react-app/lib/client"
import { Link } from "react-router"
import Head from "react-helmet"

const Home = ({posts}) => (
  <div>
    <Head>
      <title>Hello world</title>
      <meta name="description" content="Everything is awesome!" />
    </Head>
    <p>This is a homepage</p>
    <ul>
      { posts && posts.node && posts.node.list &&
        posts.node.list.map((post) => (
          <li key={post.id}>
            <Link to={ `/blog/${ post.id }`}>{ post.title || post.id }</Link>
          </li>
        ))
      }
    </ul>

     {
        posts.node && posts.node.hasNextPage &&
        <Link to={ `/after/${ posts.node.next }`}>Older posts</Link>
     }
  </div>
)

const HomeContainer = createContainer(Home, (props) => ({
  posts: query({ collection: "posts", sortBy: "date", limit: 5, after: props.params.after }),
}))

export default HomeContainer