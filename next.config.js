const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  })
   
module.exports = withNextra({
    images: {
        unoptimized: true,
    },
    // output: process.env.NODE_ENV === "production" ? 'export' : undefined,
    basePath: process.env.NODE_ENV === "production" ? "/robomaster_docs" : undefined,
    assetPrefix: process.env.NODE_ENV === "production" ? "/robomaster_docs/" : undefined,
})
   
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })