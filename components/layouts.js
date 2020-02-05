import React, { Component } from 'react';

// Components
import Footer from './particles/footer';
import Head from './particles/head';
import Preview from './particles/preview';
import { LogoHeader, Header, AuthHeader } from './particles/header';

// styles
import '../scss/style.scss';

export class Layout extends Component {
  render() {
    return (
      <div className="site-wrap">
        <Head />
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export class LogoLayout extends Component {
  render() {
    return (
      <div>
        <Head />
        <LogoHeader />
        {this.props.children}
      </div>
    );
  }
}

export class AuthLayout extends Component {
  render() {
    const { user } = this.props;

    return (
      <div className="site-wrap admin">
        <Head />
        <AuthHeader />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">{this.props.children}</div>
            <div className="col-6">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
