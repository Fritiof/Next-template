const nextConfig = require('next/config');

function getClient() {
    return nextConfig && nextConfig.default() && nextConfig.default().publicRuntimeConfig;
}

module.exports = {
    getClientConfig: getClient,
};
