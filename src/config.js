const BACKEND_URL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_BACKEND_URL_DEVELOPMENT
    : process.env.REACT_APP_BACKEND_URL_PRODUCTION;
export default BACKEND_URL;