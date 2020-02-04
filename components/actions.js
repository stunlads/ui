import React, { Component } from 'react';
import Router from 'next/router';
import cookies from 'next-cookies';
import _ from 'underscore';

// Utils
import { ServerApi } from '../utils/api';

export class PublicAction extends Component {
  static async getInitialProps(context) {
    const { userId, authToken } = cookies(context);

    // has userId and authToken
    if (userId && authToken) {

      if (context.res) {
        context.res.writeHead(302, { Location: '/admin' });
        context.res.end();
      }

      Router.push('/admin');
    }

    return {
      status: 'success'
    }
  }
}

export class PrivateAction extends Component {
  static async getInitialProps(context) {
    const { userId, authToken } = cookies(context);

    if (userId && authToken) {
      const Api = new ServerApi(context);
      const { status, data } = await Api.get('/user');

      if (_.isEqual(status, 'success')) {
        return {
          status,
          user: data
        }
      }
    }

    // Redirect login
    if (context.res) {
      context.res.writeHead(302, { Location: '/login' });
      context.res.end();
    }

    Router.push('/login');

    return {
      status: 'error'
    };
  }
}
