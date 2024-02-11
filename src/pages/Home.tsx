import { useEffect } from 'react';
import { BiCheckSquare, BiPlus } from 'react-icons/bi';
import CardLink from '../components/CardLink';

export default function Home() {
  useEffect(() => {
    document.title = 'VotAí!';
  }, []);

  return (
    <div className='flex gap-3 flex-col w-[480px] max-w-full'>
      <CardLink to='/create'>
        <div className='flex gap-2 items-center'>
          <BiPlus className='text-pink-600 text-2xl' />
          Criar uma enquete
        </div>
      </CardLink>
      <CardLink to='/poll'>
        <div className='flex gap-2 items-center'>
          <BiCheckSquare className='text-pink-600 text-2xl' />
          Votar em uma enquete
        </div>
      </CardLink>
    </div>
  );
}
