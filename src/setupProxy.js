const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://mightyzeus.housing.com/api/gql',
            changeOrigin: true,
        })
    );
};