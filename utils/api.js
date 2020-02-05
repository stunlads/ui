import getConfig from 'next/config';
import axios from 'axios';
import _ from 'underscore';
import cookie from 'js-cookie';
import cookies from 'next-cookies';

// configs.
const { publicRuntimeConfig } = getConfig();

class ClientApi {
  constructor() {
    const authToken = cookie.get('authToken');
    const userId = cookie.get('userId');

    // request axios instance.
    this.instance = axios.create({
      baseURL: publicRuntimeConfig.API_URL,
      headers: this.headers(authToken, userId)
    });
  }

  headers(authToken, userId) {
    if (authToken && userId) {
      return {
        'X-Auth-Token': authToken,
        'X-User-Id': userId
      };
    }

    return {};
  }

  get(url) {
    return this.instance
      .get(url)
      .then(this.transform)
      .catch(this.catchTransform);
  }

  post(url, data) {
    return this.instance
      .post(url, data)
      .then(this.transform)
      .catch(this.catchTransform);
  }

  put(url, data) {
    return this.instance.put(url, data).then(this.transform);
  }

  delete(url) {
    return this.instance.delete(url).then(this.transform);
  }

  transform({ data }) {
    return {
      isSuccess: _.isEqual(data.status, 'success'),
      ...data
    };
  }

  catchTransform({ response: { data } }) {
    return data;
  }
}

export class ServerApi extends ClientApi {
  constructor(context) {
    super();

    const { userId, authToken } = cookies(context);

    // request axios instance.
    this.instance = axios.create({
      baseURL: publicRuntimeConfig.API_URL,
      headers: this.headers(authToken, userId)
    });
  }
}

export default new ClientApi();
