import { Link } from '@chakra-ui/react';
import { MouseEvent, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAppLinkProps {
  href: string;
  fontWeight?: string;
  children: ReactNode;
}

const AppLink = ({ href, fontWeight = 'bold', children }: IAppLinkProps) => {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <Link href={href} fontWeight={fontWeight} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default AppLink;
