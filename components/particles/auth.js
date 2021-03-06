import React, { Component } from 'react';
import t from 'tcomb-form';
import { boundMethod } from 'autobind-decorator';

// Forms
import {
  SignUpSchema,
  SignUpOptions,
  SignInSchema,
  SignInOptions
} from '../forms/auth';

// Utils
import Api from '../../utils/api';
import { setAuthCookie } from '../../utils/shortcuts';

export class SignUp extends Component {
  state = {
    loading: false,
    value: null,

    emailError: {},
    usernameError: {}
  };

  login(username, password) {
    return Api.post('/login', { username, password }).then(({ data }) => {
      const { authToken, userId } = data;

      // set
      setAuthCookie(authToken, userId);

      // redirect admin page
      location.href = '/admin';
    });
  }

  @boundMethod
  onSubmit(evt) {
    evt.preventDefault();
    const value = this.refs.form.getValue();

    if (value) {
      this.setState({ loading: true });

      Api.post('/users', this.state.value).then(({ isSuccess, data }) => {
        if (isSuccess) {
          return this.login(value.username, value.password);
        }

        return this.setState({
          loading: false,
          usernameError: data.username,
          emailError: data.email
        });
      });
    }
  }

  @boundMethod
  onChangeForm(value) {
    return this.setState({ value });
  }

  render() {
    return (
      <form className="form-box" id="SignUpForm" onSubmit={this.onSubmit}>
        <h3 className="h4 text-black mb-4 text-center font-weight-bold">
          Sign Up in seconds
        </h3>
        <t.form.Form
          value={this.state.value}
          ref="form"
          type={SignUpSchema}
          options={SignUpOptions(
            this.state.emailError,
            this.state.usernameError
          )}
          onChange={this.onChangeForm}
        />
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-indigo w-100"
            disabled={this.state.loading}
          >
            Create Account
          </button>
        </div>

        {this.props.showLoginText && (
          <p className="text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        )}

        <p className="terms">
          By signing up you agree to the <a href="/terms">Terms of Service.</a>
        </p>
      </form>
    );
  }
}

export class SignIn extends Component {
  state = {
    loading: false,
    value: null,
    isError: false
  };

  @boundMethod
  onSubmit(evt) {
    evt.preventDefault();
    const value = this.refs.form.getValue();

    if (value) {
      this.setState({ loading: true, isError: false });

      Api.post('/login', this.state.value)
        .then(({ data }) => {
          const { authToken, userId } = data;

          // set auth token.
          setAuthCookie(authToken, userId);

          // redirect admin page
          location.href = '/admin';
        })
        .catch(e => {
          this.setState({ loading: false, isError: true });
        });
    }
  }

  @boundMethod
  onChangeForm(value) {
    return this.setState({ value });
  }

  render() {
    return (
      <form className="form-box" id="SignInForm" onSubmit={this.onSubmit}>
        <h3 className="h4 text-black mb-4 text-center font-weight-bold">
          Sign In
        </h3>

        {this.state.isError && (
          <p className="form-box__error mb-4">
            Invalid username and/or password
          </p>
        )}
        <t.form.Form
          value={this.state.value}
          ref="form"
          type={SignInSchema}
          options={SignInOptions}
          onChange={this.onChangeForm}
        />
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-indigo w-100"
            disabled={this.state.loading}
          >
            Sign In
          </button>
        </div>

        <p className="text-center">
          No account yet? <a href="/register">Sign up</a>
        </p>
      </form>
    );
  }
}
