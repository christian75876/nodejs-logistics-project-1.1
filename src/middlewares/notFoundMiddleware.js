const notFoundMiddleware = (req, res,) => {
    res.status(404).json({
        message: 'Not Found, please check the URL',
        status: 404
    });
}

export default notFoundMiddleware;