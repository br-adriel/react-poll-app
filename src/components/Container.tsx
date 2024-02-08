import { ComponentPropsWithoutRef } from 'react';

interface IProps extends ComponentPropsWithoutRef<'div'> {}

export default function Container({ children, className, ...props }: IProps) {
  return (
    <div
      className={`container mx-auto min-h-dvh p-6 flex justify-center items-center flex-col gap-5 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
