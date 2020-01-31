import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="sticky-wrapper">
        <header
          className="site-navbar py-4 js-sticky-header site-navbar-target"
          role="banner"
        >
          <div className="container-fluid">
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
                      <a href="#home-section" className="nav-link active">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#courses-section" className="nav-link">
                        Github
                      </a>
                    </li>
                    <li>
                      <a href="#programs-section" className="nav-link">
                        Contact
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
                      <a href="/sign-in" className="btn btn-white">
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
