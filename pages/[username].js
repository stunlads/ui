import React, { Component } from 'react';

// Components
import { ProfileLayout } from '../components/layouts';

// Utils
import { ServerApi } from '../utils/api';

const NotFound = () => {
  return <div>KULLANICI YOK!</div>;
};

const Profile = ({ data }) => {
  const { username, links } = data;

  return (
    <div className="container">
      <div className="row">
        <div className="col-7 m-auto">
          <div className="preview-container no-border">
            <div className="preview-container__avatar">
              <img src="/static/images/avatar.png" />
            </div>
            <div className="preview-container__username">
              <p>@{username}</p>
            </div>
            <div className="preview-container__links">
              {links.map(link => {
                return (
                  <a
                    href={link.url}
                    className="preview-container__links--link"
                    target="_blank"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default class User extends Component {
  static async getInitialProps(context) {
    const { username } = context.query;
    const Api = new ServerApi(context);
    const { isSuccess, data } = await Api.get(`/preview/${username}`);

    return {
      isSuccess,
      data
    };
  }

  render() {
    const { isSuccess, data } = this.props;

    return (
      <ProfileLayout>
        {isSuccess ? <Profile data={data} /> : <NotFound />}
      </ProfileLayout>
    );
  }
}
