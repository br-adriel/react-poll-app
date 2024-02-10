import { ComponentPropsWithoutRef } from 'react';
import CirclePulse from './CirclePulse';

interface IProps extends ComponentPropsWithoutRef<'div'> {}

export default function Loading({ className, ...props }: IProps) {
  return (
    <div className={`flex items-center justify-center ${className}`} {...props}>
      <CirclePulse />
    </div>
  );
}
