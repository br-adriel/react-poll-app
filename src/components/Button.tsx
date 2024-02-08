import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

interface IProps extends Omit<ComponentPropsWithoutRef<'button'>, 'className'> {
  fullWidth?: boolean;
}

export default function Button({ fullWidth, children, ...props }: IProps) {
  return (
    <button
      className={clsx({
        'bg-pink-500 rounded px-4 py-2 text-white hover:bg-pink-600 transition-colors focus:outline-pink-600 focus:outline-offset-2':
          true,
        'w-full': fullWidth,
      })}
      {...props}
    >
      {children}
    </button>
  );
}
