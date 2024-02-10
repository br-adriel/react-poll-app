import { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'button'> {}

export default function CardButton({ className, children, ...props }: IProps) {
  return (
    <button
      {...props}
      className={`bg-white px-6 py-4 rounded shadow-sm shadow-pink-200 hover:shadow transition-all hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
}
