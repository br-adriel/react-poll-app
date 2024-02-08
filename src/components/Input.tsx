import { HTMLProps } from 'react';

interface IProps extends HTMLProps<HTMLInputElement> {}

export default function Input({ className, ...props }: IProps) {
  return (
    <input
      className={`p-2 rounded focus:outline-pink-600 border-2 border-pink-200 ${className}`}
      {...props}
    />
  );
}
