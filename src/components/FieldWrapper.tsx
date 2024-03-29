import { PropsWithChildren } from 'react';

export default function FieldWrapper({ children }: PropsWithChildren) {
  return <div className='flex flex-col gap-1 w-full'>{children}</div>;
}
