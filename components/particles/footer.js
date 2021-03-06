import React, { Component } from 'react';

// Utils
import { absoluteGithubUrl } from '../../utils/shortcuts';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-section bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="/static/images/logo.svg" width={150} />
              <p className="mt-4">© 2020 All rights reserved.</p>
            </div>
            <div className="col-md-4 ml-auto">
              <h3>Community</h3>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href={absoluteGithubUrl('/yoourlink')}>Open Source</a>
                </li>
                <li>
                  <a href={absoluteGithubUrl('/orgs/yoourlink/people')}>
                    Peoples
                  </a>
                </li>
                <li>
                  <a href={absoluteGithubUrl('/yoourlink/ui/issues')}>
                    UI Issues
                  </a>
                </li>
                <li>
                  <a href={absoluteGithubUrl('/yoourlink/api/issues')}>
                    API Issues
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 ml-auto">
              <h3>Company</h3>
              <ul className="list-unstyled footer-links">
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="https://hub.docker.com/u/yoourlink">Docker</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
