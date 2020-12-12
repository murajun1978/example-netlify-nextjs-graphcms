export default async (req, res) => {
  if (req.query.secret !== process.env.PREVIEW_MODE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  res.redirect('/blog')
}
