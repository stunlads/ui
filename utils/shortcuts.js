import { useRouter } from 'next/router';

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