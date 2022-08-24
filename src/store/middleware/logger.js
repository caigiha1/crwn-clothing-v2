import logger from 'redux-logger';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

export default middleWares;
