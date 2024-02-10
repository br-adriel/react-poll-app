import { useEffect } from 'react';
import CardLink from '../components/CardLink';

export default function Home() {
  useEffect(() => {
    document.title = 'VotAí!';
  }, []);

  return (
    <div className='flex gap-3 flex-col w-[480px] max-w-full'>
      <CardLink to='/create'>Criar uma enquete</CardLink>
      <CardLink to='/poll'>Votar em uma enquete</CardLink>
    </div>
  );
}
