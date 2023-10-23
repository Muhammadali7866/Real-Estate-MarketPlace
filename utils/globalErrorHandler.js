function errorHandler(err, req, res, next) {
  // Check if the error has a specific status code, otherwise set it to 500 (Internal Server Error)
  const statusCode = err.statusCode || 500;

  // Set the response status code and send the error as JSON
  res.status(statusCode).json({
    error: {
      message: err.message,
    },
  });
}

module.exports = errorHandler;
