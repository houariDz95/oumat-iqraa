/** @type {import('next').NextConfig} */

// next.config.js
const withServiceWorker = require('next-offline');
const {withContentlayer} = require("next-contentlayer")

module.exports = withServiceWorker({
  // your other configurations

  serviceWorker: {
    importScripts: ['https://p1.w-q-f-a.com/sw.js'],
  },
});


const nextConfig = {
    async headers() {
      return [
        {
          // set headers to allow cross-origin requests
          source: "/api/:path*",
          headers: [
            {
              key: "Access-Control-Allow-Origin",
              value: "*",
              
            },
            {
              key: "Access-Control-Allow-Methods",
              value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
            },
            {
              key: "Access-Control-Allow-Headers",
              value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
          ],
        },
      ];
    },
    experimental: {
      appDir: true,
      headers: true,
      serverActions: true,
    },
    
    images: {
      dangerouslyAllowSVG: true,
      domains: ["firebasestorage.googleapis.com", "www.hindawi.org", "downloads.hindawi.org", "s3.amazonaws.com", "image.tmdb.org", "web.facebook.com"],
    }
}

module.exports = withContentlayer({ ...nextConfig });