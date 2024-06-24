import { env } from '../src/config';

const BASE_URL = env.baseURL;

const API = {
  /** AUTH **/
  login: BASE_URL + '/login',
};

export default API;
