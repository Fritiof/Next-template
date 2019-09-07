const withCSS = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

module.exports = withCSS(
    withSass({
        publicConfig: {
            isDev: process.env.NODE_ENV === 'development',
            env: process.env.NODE_ENV,
        },
    })
);
