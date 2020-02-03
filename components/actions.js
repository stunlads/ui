import React, { Component } from 'react';
import Router from 'next/router';
import cookies from 'next-cookies';

const writeHead = (context, options) => {
  const { condition, location } = options;

  if (condition) {
    context.res.writeHead(302, { Location: location });
    context.res.end();

    // push router.
    Router.push(location);
  }

  return {};
};

export class PublicAction extends Component {
  static async getInitialProps(context) {
    const { userId, authToken } = cookies(context);

    return writeHead(context, {
      condition: userId && authToken,
      location: '/admin'
    });
  }
}

export class PrivateAction extends Component {
  static async getInitialProps(context) {
    const { userId, authToken } = cookies(context);

    return writeHead(context, {
      condition: !userId && !authToken,
      location: '/login'
    });
  }
}
