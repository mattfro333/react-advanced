import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../App';

const serverRender = async () => {
  const resp = await axios.get('/data');
  const api = new DataApi(resp.data);
  const initialData = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };
  return ReactDOMServer.renderToString(
    <App initialData={initialData} />
  );
};

export default serverRender;
