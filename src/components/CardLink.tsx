import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

interface IProps extends PropsWithChildren {
  to: string;
}

export default function CardLink({ to, children }: IProps) {
  return (
    <Link
      to={to}
      className='bg-white px-6 py-4 rounded shadow-sm shadow-pink-200 hover:shadow transition-all hover:scale-105'
    >
      {children}
    </Link>
  );
}
