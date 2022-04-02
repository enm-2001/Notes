//if we do not want errors in html format & we want proper
//1. When the route is not found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
  };  
  
  //2. sees what is the error thrown by the server and it converts it in structured form
  const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  };
  
  module.exports = { notFound, errorHandler };