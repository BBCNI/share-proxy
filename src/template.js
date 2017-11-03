export default ({ body, siteConfig }) => {
  return `
    <!DOCTYPE html>
    <html>
    
      <head>
        <title>${siteConfig.title}</title>
        <meta name="twitter:card" content="${siteConfig.twitterCard}" />
        <meta name="twitter:site" content="${siteConfig.twitterUsername}" />
        <meta name="twitter:creator" content="${siteConfig.twitterCreator}" />
        <meta property="og:url" content="${siteConfig.url}" />
        <meta property="og:title" content="${siteConfig.title}" />
        <meta property="og:description" content="${siteConfig.description}" />
        <meta property="og:image" content="${siteConfig.image}" />
      </head>
      
      <script>
      window.location.replace("${siteConfig.redirect}")
      </script>
      
      <body>
        <div id="root">${body}</div>
      </body>
    </html>
  `;
};
