export const errorMiddleware = (err, req, res ,next) => {
    console.log('ERROR MIDDLEWARE WORKS')
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode).json({
        message: err.message,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
     })
}
