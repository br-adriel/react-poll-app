import { useEffect } from 'react';
import CardLink from '../components/CardLink';
import Container from '../components/Container';
import LogoHomeLink from '../components/LogoHomeLink';

export default function Home() {
  useEffect(() => {
    document.title = 'VotAí!';
  }, []);

  return (
    <main className='bg-pink-100'>
      <Container>
        <LogoHomeLink />
        <div className='flex gap-3 flex-col w-[480px] max-w-full'>
          <CardLink to='/create'>Criar uma enquete</CardLink>
          <CardLink to='/vote'>Votar em uma enquete</CardLink>
        </div>
      </Container>
    </main>
  );
}
