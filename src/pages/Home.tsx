import { useEffect } from 'react';
import CardLink from '../components/CardLink';
import Container from '../components/Container';

export default function Home() {
  useEffect(() => {
    document.title = 'VotAí!';
  }, []);

  return (
    <main className='bg-pink-100'>
      <Container>
        <h1 className='text-7xl italic font-bold'>VotAí!</h1>
        <div className='flex gap-3 flex-col w-[480px] max-w-full'>
          <CardLink to='/create'>Criar uma enquete</CardLink>
          <CardLink to='/vote'>Votar em uma enquete</CardLink>
        </div>
      </Container>
    </main>
  );
}
