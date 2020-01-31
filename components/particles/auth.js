import React, { Component } from 'react';
import t from 'tcomb-form';
import { boundMethod } from 'autobind-decorator';

// Forms
import { SignUpSchema, SignUpOptions } from '../forms/auth';

// Utils
import Api from '../../utils/api';

export class SignUp extends Component {
  state = {
    loading: false,
    value: null
  };

  @boundMethod
  async onSubmit(evt) {
    evt.preventDefault();
    const value = this.refs.form.getValue();

    if (value) {
      this.setState({ loading: true });

      const response = await Api.post('/users', {
        email: value.email,
        username: value.username,
        password: value.password
      });

      console.log(response);
    }
  }

  @boundMethod
  onChangeForm(value) {
    return this.setState({ value });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-box">
        <h3 className="h4 text-black mb-4 text-center font-weight-bold">
          Sign Up in seconds
        </h3>
        <t.form.Form
          value={this.state.value}
          ref="form"
          type={SignUpSchema}
          options={SignUpOptions}
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
      </form>
    );
  }
}
