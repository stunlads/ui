import { useRouter } from 'next/router';

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

export const absoluteGithubUrl = link => {
  return `${COMMUNITY_URL}${link}`;
};
