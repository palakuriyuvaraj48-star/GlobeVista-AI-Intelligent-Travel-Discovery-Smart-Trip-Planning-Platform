function errorHandler(err, req, res, next) {
  const status = Number(err?.status || err?.statusCode || 500)
  const message = err?.message || 'Server error'

  if (status >= 500) {
    console.error(err)
  }

  res.status(status).json({ message })
}

module.exports = { errorHandler }
