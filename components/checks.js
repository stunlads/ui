import React, { Component } from 'react';
import cookies from 'next-cookies';

export class Auth extends Component {
  static async getInitialProps(context) {
    const { userId, authToken } = cookies(context);
    
		if (userId && authToken) {
      context.res.writeHead(302, { Location: '/admin' });
      context.res.end();
    }
    
    return {
			status: 'success'
		};
  }
}