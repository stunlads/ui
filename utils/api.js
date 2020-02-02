import getConfig from 'next/config';
import axios from 'axios';
import _ from 'underscore';
import store from 'store';

// configs.
const { publicRuntimeConfig } = getConfig()

class Api {
  constructor() {

    // authToken and userId
    this.token = store.get("@token");

    // request axios instance.
    this.instance = axios.create({
      baseURL: publicRuntimeConfig.API_URL,
      headers: this.getHeader()
    });
  }

  getHeader() {
    const { token } = this;

    if (token) {
      return {
        "X-Auth-Token": token.authToken,
        "X-User-Id": token.userId
      }
    }

    return {}
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    return this.instance.post(url, data);
  }

  respToData({ data: { status, data, message } }) {
    return {
      isError: _.isEqual(status, 'error'),
      data,
      message
    }
  }

  user() {
    return this.get('/user');
  }
}

export default new Api();