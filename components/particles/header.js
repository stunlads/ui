import React, { Component } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';
import { boundMethod } from 'autobind-decorator';

// Utils
import Api from '../../utils/api';
import { ActiveLink, absoluteGithubUrl } from '../../utils/shortcuts';

export class LogoHeader extends Component {
  render() {
    return (
      <header className="site-navbar relative-navbar py-4">
        <div className="container">
          <div className="d-flex align-items-center">
            <div className="mx-auto text-center">
              <div className="site-logo mr-auto w-25">
                <a href="/">
                  <img src="/static/images/text-logo.svg" width={120} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export class Header extends Component {
  render() {
    return (
      <div className="sticky-wrapper">
        <header className="site-navbar py-4">
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="site-logo mr-auto w-25">
                <a href="/">
                  <img src="/static/images/text-logo.svg" width={120} />
                </a>
              </div>
              <div className="mx-auto text-center">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                    <li>
                      <ActiveLink href="/">Home</ActiveLink>
                    </li>
                    <li>
                      <a
                        href={absoluteGithubUrl('/yoourlink')}
                        className="nav-link"
                      >
                        Github
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ml-auto w-25">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <a href="/login" className="btn btn-white">
                    <span>Sign in</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export class AuthHeader extends Component {
  @boundMethod
  logout(e) {
    e.preventDefault();

    return Api.post('logout').then(() => {
      
      // remove cookies.
      cookie.remove('authToken');
      cookie.remove('userId');

      // redirect home page
      location.href = '/';
    });
  }

  render() {
    return (
      <div className="sticky-wrapper relative-wrapper">
        <header className="site-navbar relative-navbar py-4">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <div className="site-logo mr-auto w-25">
                <a href="/admin">
                  <img src="/static/images/text-logo.svg" width={120} />
                </a>
              </div>
              <div className="mx-auto text-center">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                    <li>
                      <ActiveLink href="/admin">Links</ActiveLink>
                    </li>
                    <li>
                      <ActiveLink href="/admin/settings">Settings</ActiveLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="ml-auto w-25">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <a
                    href="/login"
                    className="btn btn-white"
                    onClick={this.logout}
                  >
                    <span>Sign Out</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
