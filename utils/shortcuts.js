import { useRouter } from 'next/router';
import cookie from 'js-cookie';

const COMMUNITY_URL = 'https://github.com';

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

export const absoluteGithubUrl = link => {
  return `${COMMUNITY_URL}${link}`;
};