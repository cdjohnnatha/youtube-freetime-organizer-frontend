import axiosInstance from 'axios';
import store from '../store/store';
import { isObjectNotEmpty } from 'simple-object-handler';
import RequestErrorHelper from '../helpers/request-error-helpers';

const defaultAxiosConfig = {
  baseUrl: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {},
};

class Axios {
  constructor({ baseUrl, timeout, headers } = defaultAxiosConfig) {
    const auth = store ? store.getState().auth : null;

    headers = {
      ...headers,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (isObjectNotEmpty(auth)) {
      headers = { ...headers, 'Authorization': `Bearer ${auth.accessToken}` };
    }

    this._instance = axiosInstance.create();
    this._instance.defaults.baseURL = baseUrl;
    this._instance.defaults.headers = headers;
    this._instance.defaults.timeout = timeout;
    this._buildInterceptos();
  }

  get instance() {
    return this._instance;
  }

  _buildInterceptos() {

    this._instance.interceptors.request.use((config) => config, (error) => {
      const requestErrorHelper = new RequestErrorHelper(error);
      return { success: false, data: null, error: requestErrorHelper.error };
    });

    this._instance.interceptors.response.use((response) => ({
      success: true,
      data: response.data,
      error: null,
    }), (error) => {
      const requestErrorHelper = new RequestErrorHelper(error);
      return { success: false, data: null, error: requestErrorHelper.error };
    });
    return this;
  }
};

export default Axios;