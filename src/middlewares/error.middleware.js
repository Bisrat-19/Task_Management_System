const errorMiddleware = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Server error' });
};

module.exports = errorMiddleware;
