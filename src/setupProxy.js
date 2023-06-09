const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:5000',
            changeOrigin: true,
        })
    );
    app.use(
        createProxyMiddleware('/v1/search', {
            target: 'https://openapi.naver.com',
            changeOrigin: true,
        })
    );
};
