import React from 'react';
import t from 'tcomb-form';
import { boundMethod } from 'autobind-decorator';

// Components
import { AuthLayout } from '../../components/layouts';
import { PrivateAction } from '../../components/actions';

// Forms
import { SettingsSchema, SettingsOptions } from '../../components/forms/auth';

// Utils
import Api from '../../utils/api';

export default class Settings extends PrivateAction {
  state = {
    loading: false,
    value: null
  };

  componentDidMount() {
    const { user } = this.props;

    this.setState({
      value: user
    });
  }

  @boundMethod
  async onSubmit(evt) {
    evt.preventDefault();
    const { _id } = this.props.user;
    const value = this.refs.form.getValue();

    if (value) {
      // set loading.
      this.setState({ loading: true });

      await Api.put(`/users/${_id}`, {
        name: value.name
      });

      return this.setState({ loading: false });
    }
  }

  @boundMethod
  onChangeForm(value) {
    return this.setState({ value });
  }

  render() {
    return (
      <AuthLayout {...this.props}>
        <h3 className="h4 section-title text-center py-3">My information</h3>
        <form className="form-box" onSubmit={this.onSubmit}>
          <t.form.Form
            value={this.state.value}
            ref="form"
            type={SettingsSchema}
            options={SettingsOptions}
            onChange={this.onChangeForm}
          />
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-indigo w-100"
              disabled={this.state.loading}
            >
              Save details
            </button>
          </div>
        </form>
      </AuthLayout>
    );
  }
}
