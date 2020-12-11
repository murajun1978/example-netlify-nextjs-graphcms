import { GraphQLClient } from "graphql-request";

import { query } from '../graphql/queries/posts'

export const getStaticProps = async () => {
  const client = new GraphQLClient(process.env.GRAPHCMS_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })
  const { posts } = await client.request(query)

  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }) => {
  return (
    <>
      {
        posts.map(post => {
          return (
            <div>{post.title}</div>
          )
        })
      }
    </>
  )
}

export default Blog
