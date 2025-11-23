/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://viral-gajera.vercel.app",
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: "weekly",
    priority: 0.7,
    exclude: ["/private/*"], // optional
  };
  