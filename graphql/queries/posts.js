export const query = (previewMode) => (`
  {
    posts(${previewMode ? 'stage:DRAFT' : ''}) {
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
`)
