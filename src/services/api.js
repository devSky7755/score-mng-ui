import axios from 'axios';
import { GetToken, UpdateToken } from './token.service';

const instance = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    'Content-Type': 'application/json',
  },
});
instance.interceptors.request.use(
  (config) => {
    const token = GetToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== '/auth/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 403 && !originalConfig.retry) {
        err.config.retry = true;
        try {
          const rs = await instance.get('/auth/refreshtoken', {
          });
          const { accessToken, user } = rs.data;
          UpdateToken(accessToken, user);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
export default instance;