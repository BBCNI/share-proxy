// Maps a request object to a site configuration
export default (req) => {
  const defaultConfig = {
    title: 'BBC',
    description: 'The best of the BBC, with the latest news and sport headlines, weather, TV & radio highlights and much more from across the whole of BBC Online.',
    image: '',
    twitterUsername: '@bbc',
    twitterCreator: '@bbc',
    twitterCard: 'summary_large_image',
    redirect: `http://www.bbc.co.uk?${require('url').parse(req.url).query || ''}`
  };

  switch(true) {
    case req.get('host') === 'lion-share.bbcrewind.co.uk':
      return Object.assign(defaultConfig, {
        title: 'The Queen & I',
        description: 'A life of service: discover your personalised journey through the life of her Majesty the Queen.',
        image: 'http://ichef.bbci.co.uk/images/ic/raw/p059kztq.jpg',
        redirect: `http://lion-static-dev.bbcrewind.co.uk/?${require('url').parse(req.url).query || ''}`
      }, req.query);
    default:
      return Object.assign(defaultConfig, req.query);
  }
}