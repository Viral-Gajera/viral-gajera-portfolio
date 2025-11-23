const { writeFileSync } = require("fs");
const { projects } = require("../src/lib/portfolio-data.ts");

const urls = projects.map(
  (p) => `<url><loc>https://viral-gajera.vercel.app/project/${p.slug}</loc></url>`
);

const xml = `
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

writeFileSync("public/project-sitemap.xml", xml.trim());
console.log("project-sitemap.xml generated");
