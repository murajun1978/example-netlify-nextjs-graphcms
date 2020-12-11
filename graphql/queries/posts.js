export const query = `
  {
    posts() {
      id
      slug
      title
      excerpt
      date
      coverImage {
        id
        url
      }
    }
  }
`
