import React, { Component } from 'react';
import Router from 'next/router';
import cookies from 'next-cookies';
import _ from 'underscore';

// Utils
import { ServerApi } from '../utils/api';

export class PublicAction extends Component {
  static async getInitialProps(context) {
    const Api = new ServerApi(context);
    
    // Get User
    const { status } = await Api.get('/user');

    if (_.isEqual(status, 'success')) {
      context.res.writeHead(302, { Location: '/admin' });
      context.res.end();

      // push router.
      Router.push(location);
    }

    return {
       status
    };
  }
}

export class PrivateAction extends Component {
  static async getInitialProps(context) {
    const Api = new ServerApi(context);
    
    // Get User
    const { status, data } = await Api.get('/user');

    if (_.isEqual(status, 'success')) {
      return {
        status,
        user: data
      }
    }

    context.res.writeHead(302, { Location: '/login' });
    context.res.end();

    // push router.
    Router.push(location);

    return {
      status,
      user: null
    };
  }
}
