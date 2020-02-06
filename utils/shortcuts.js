import { useRouter } from 'next/router';
import getConfig from 'next/config';
import cookie from 'js-cookie';

// Configs
const { publicRuntimeConfig } = getConfig();

export const ActiveLink = props => {
  const router = useRouter();
  const isActive = router.pathname === props.href;

  const handleClick = e => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <a
      onClick={handleClick}
      className={`nav-link ${isActive ? 'active' : ''}`}
      {...props}
    >
      {props.children}
    </a>
  );
};

export const setAuthCookie = (authToken, userId) => {
  cookie.set('authToken', authToken);
  cookie.set('userId', userId);
};

export const absoluteUrl = (link, http = true) => {
  const { ROOT_URL } = publicRuntimeConfig;

  if (http) {
    return `${ROOT_URL}${link}`;
  }

  const URL = ROOT_URL.replace(/(^\w+:|^)\/\//, '');

  return `${URL}${link}`;
};

export const absoluteGithubUrl = link => {
  return `${publicRuntimeConfig.COMMUNITY_URL}${link}`;
};
