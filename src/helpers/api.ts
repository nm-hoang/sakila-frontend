import {  UrlConstants } from '../constants';
import axios from 'axios';
import env from 'react-dotenv';
import { history } from './history';

const api = axios.create({
  baseURL: `${env.API_URL}/api`,
  headers: {
  },
});

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      history.push(UrlConstants.ERROR);
    }
    return Promise.reject(err);
  }
);

export { api };
