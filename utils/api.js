import getConfig from 'next/config';
import axios from 'axios';
import _ from 'underscore';
import cookie from 'js-cookie';

// configs.
const { publicRuntimeConfig } = getConfig()

class Api {
  constructor() {

    // request axios instance.
    this.instance = axios.create({
      baseURL: publicRuntimeConfig.API_URL,
      headers: this.getHeader()
    });
  }

  getHeader() {
    const authToken = cookie.get('authToken');
    const userId = cookie.get('userId');

    if (authToken && userId) {
      return {
        "X-Auth-Token": authToken,
        "X-User-Id": userId
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
}

export default new Api();