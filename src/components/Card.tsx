import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  className?: string;
}

export default function Card({ children, className }: IProps) {
  return (
    <div
      className={`bg-white px-6 py-4 rounded shadow-sm shadow-pink-200 ${className}`}
    >
      {children}
    </div>
  );
}
