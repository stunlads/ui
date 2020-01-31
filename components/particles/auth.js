import React, { Component } from 'react';
import t from 'tcomb-form';
import { boundMethod } from 'autobind-decorator'

// Forms
import { SignUpSchema, SignUpOptions } from '../forms/auth';

export class SignUp extends Component {

  @boundMethod
  onSubmit(evt) {
    evt.preventDefault();

    const value = this.refs.form.getValue()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} className="form-box">
        <h3 className="h4 text-black mb-4 text-center font-weight-bold">
          Sign Up in seconds
        </h3>
        <t.form.Form ref="form" type={SignUpSchema} options={SignUpOptions} />
        <div className="form-group">
          <button type="submit" className="btn btn-indigo w-100">Create Account</button>
        </div>
      </form>
    );
  }
}
