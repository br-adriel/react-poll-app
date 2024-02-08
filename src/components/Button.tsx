import { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'button'> {}

export default function Button({ children, className, ...props }: IProps) {
  return (
    <button
      className={`bg-pink-500 rounded px-4 py-2 text-white hover:bg-pink-600 transition-colors focus:outline-pink-600 focus:outline-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
