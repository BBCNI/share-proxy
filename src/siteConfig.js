// Maps a request object to a site configuration
export default (req) => {
  const defaultConfig = {
    url: 'http://www.bbc.co.uk',
    title: 'BBC',
    description: 'The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online.',
    image: '',
    twitterUsername: '@bbc',
    twitterCreator: '@bbc',
    twitterCard: 'summary_large_image',
    redirect: 'http://www.bbc.co.uk'
  };

  switch(true) {
    case req.get('host') === 'localhost:3071':
      return Object.assign(defaultConfig, {
        title: 'Lion',
        image: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg',
        redirect: 'http://lion-static-dev.bbcrewind.co.uk/'
      }, req.query);
    default:
      return defaultConfig
  }
}