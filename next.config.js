/** @type {import('next').NextConfig} */
const path = require('path')
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "main.sass"`,
      },
      output: "standalone",
}

// module.exports = nextConfig
module.exports =  withNextIntl(nextConfig);
