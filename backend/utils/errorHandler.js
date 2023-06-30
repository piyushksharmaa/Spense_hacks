class ErrorHandler extends Error {
  constructor(message, statusCode) {
    // Constructor which will take message and statusCode as arguments
    super(message); // Super is the constructor of the class from which we inherited in this case error
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
module.exports = ErrorHandler;
