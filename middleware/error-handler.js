const ErrorHandler = (err, req, res, next) => {

    const errStatus = err.statusCode || 500;
    const errMsg = err.message || 'Something went wrong';
    res.status(errStatus).json({
        status: errStatus,
        data: {},
        message: errMsg,
        //stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

export default ErrorHandler