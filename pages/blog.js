import { GraphQLClient } from "graphql-request";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { query } from '../graphql/queries/posts'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const getStaticProps = async (context) => {
  const client = new GraphQLClient(process.env.GRAPHCMS_API, {
    headers: {
      authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
    }
  })
  const { posts } = await client.request(query(context.preview))

  return {
    props: {
      posts
    }
  }
}

const Blog = ({ posts }) => {
  const classes = useStyles();

  return (
    <>
      {
        posts.map(post => {
          return (
            <Card key={post.id} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={post.coverImage.url}
                  title={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )
        })
      }
    </>
  )
}

export default Blog
