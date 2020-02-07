import React, { Component } from 'react';
import Head from 'next/head';

// Components
import { ProfileLayout } from '../components/layouts';

// Utils
import { ServerApi } from '../utils/api';

const NotFound = () => {
  return (
    <div className="preview-profile__not-found">
      <h2>The page you’re looking for doesn’t exist.</h2>
      <a href="/">Return to the homepage</a>
    </div>
  );
};

const Profile = ({ data }) => {
  const { username, links } = data;

  return (
    <div className="preview-profile__container">
      <Head>
        <title>@{username} | Yoourlink</title>
      </Head>
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
              {links.map((link, i) => {
                return (
                  <a
                    href={link.url}
                    className="preview-container__links--link"
                    target="_blank"
                    key={i}
                    style={{
                      backgroundColor: link.color
                    }}
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
        <div className="preview-profile">
          {isSuccess ? <Profile data={data} /> : <NotFound />}
        </div>
      </ProfileLayout>
    );
  }
}
