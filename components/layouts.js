import React, { Component } from 'react';

// Components
import Footer from './particles/footer';
import { LogoHeader, Header, AuthHeader } from './particles/header';
import Head from './particles/head';

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
    return (
      <div className="site-wrap">
        <Head />
        <AuthHeader />

        <div className="container-fluid">
          <div className="row">
            <div className="col-6">{this.props.children}</div>
            <div className="col-6">
              <h3 className="h4 section-title text-center py-3">Profile Preview</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
