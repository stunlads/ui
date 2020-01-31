import getConfig from 'next/config';
import axios from 'axios';

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
}

export default new Api();