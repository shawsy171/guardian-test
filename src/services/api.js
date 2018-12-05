const API_KEY = '9wur7sdh84azzazdt3ye54k4';
const URL = 'https://content.guardianapis.com/';
const params = {
  football: 'football?',
  uknews: 'search?section=uk-news&q=news&',
  travel: 'travel?',
};

export const getContent = async tab => {
  const param = params[tab.toLowerCase().replace(/\s/g, '')];
  const response = await fetch(`${URL}${param}api-key=${API_KEY}`);

  return await response.json();
};
