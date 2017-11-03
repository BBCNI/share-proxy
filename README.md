# Share Proxy
Share Proxy is an express application intended to sit between social media and a static site.  It is a server capable of setting headers / OpenGraph data dynamically, to manipulate how Facebook and Twitter render the site preview when shared

### Basic Usage
By sharing a link to this service, various social media meta tags are populated based on BBC defaults.
These can be overwritten at run time by adding querystring parameters to the link being shared.
For example:

Share this URL for BBC Defaults:
http://share-proxy.9rigwt4tr9.eu-west-1.elasticbeanstalk.com/

Share this URL for BBC Defaults, but using with a different image:
http://share-proxy.9rigwt4tr9.eu-west-1.elasticbeanstalk.com/?image=https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg

Share proxy will redirect real users to the intended site, including querystring parameters.
### Supported Querystring Options
- title
- description
- image
- twitterUsername
- twitterCreator
- twitterCard
- redirect

### Using Preset Site Configurations with a Custom URL
The service supports site configurations, allowing different configurations to be delivered based on the request made.  A typical use case for this would be:
- creating a new domain / subdomain that points to this service
- update `app/siteConfig` to check if the request came from that domain
- if so, setting siteConfig to the values desired when users share that link

An example of this has been set up using Lion.

Share this URL for Lion defaults: http://lion-share.bbcrewind.co.uk
Share this URL for Lion defaults, with a different image: http://lion-share.bbcrewind.co.uk/?image=https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg

### Scripts
- `npm run build` - Build the project (run this before deploying or starting
- `npm run start` - Start the server
- `eb deploy` - Deploy head of current branch to live (requires AWS CLI tools)
