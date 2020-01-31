import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
            <img src="/static/images/logo.svg" width={150} />
              <p className="mt-4">
                © 2020 All rights reserved.
              </p>
            </div>
            <div className="col-md-4 ml-auto">
              <h3>Community</h3>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="#">Open Source</a>
                </li>
                <li>
                  <a href="#">Issues</a>
                </li>
                <li>
                  <a href="#">Peoples</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ml-auto">
              <h3>Products</h3>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Release Notes</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
              </ul>
            </div>
          </div>
        
        
        </div>
      </footer>
    );
  }
}
