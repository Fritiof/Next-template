const nextConfig = require('next/config');

function getClientConfig() {
    return nextConfig && nextConfig.default() && nextConfig.default().publicConfig;
}

module.exports = {
    getClientConfig,
};
