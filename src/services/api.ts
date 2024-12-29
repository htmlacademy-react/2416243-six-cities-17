import axios, {AxiosInstance, InternalAxiosRequestConfig} from 'axios';
import {getToken} from './token.ts';
import {BACKEND_REQUEST_TIMEOUT, BACKEND_URL} from '../const.ts';

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: BACKEND_REQUEST_TIMEOUT
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if(token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  return api;
};
