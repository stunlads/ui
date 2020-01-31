import getConfig from 'next/config';
import axios from 'axios';
import _ from 'underscore';

// configs.
const { publicRuntimeConfig } = getConfig()

class Api {
  constructor() {
    this.instance = axios.create({
      baseURL: publicRuntimeConfig.API_URL
    });
  }

  get(url) {
    return this.instance.get(url);
  }

  post(url, data) {
    return this.instance.post(url, data);
  }

  respToData({ data: { status, data } }) {
    return {
      isError: _.isEqual(status, 'error'),
      data
    }
  }
}

export default new Api();