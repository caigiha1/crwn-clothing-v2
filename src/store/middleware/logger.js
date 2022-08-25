import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleWares = [
  process.env.NODE_ENV === 'development' && logger,
  thunk,
].filter(Boolean);

export default middleWares;
