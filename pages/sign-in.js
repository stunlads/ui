import React, { Component } from 'react';

// Components
import { SignLayout } from '../components/layouts';
import { SignUp, SignIn as AuthSignIn } from '../components/particles/auth';

export default class SignIn extends Component {
  render() {
    return (
      <SignLayout>
        <div className="container">
          <div className="align-items-center">
            <div className="row">
              <div className="col-12">
                <div className="row align-items-center">
                  <div className="col-lg-5 ml-auto mr-auto">
                    <AuthSignIn />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-center pt-3 pb-3">
                <p>
                  Don't have an account? <a href="/">Create one now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SignLayout>
    );
  }
}
