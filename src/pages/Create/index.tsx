import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import CirclePulse from '../../components/CirclePulse';
import Container from '../../components/Container';
import LogoHomeLink from '../../components/LogoHomeLink';
import CreateForm from './components/CreateForm';

export default function Create() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'Criar enquete - VotAí!';
  }, []);

  return (
    <main className='bg-pink-100'>
      <Container>
        <LogoHomeLink />
        <Card className='w-full sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-3/12'>
          <h2 className='text-xl font-bold my-2 text-center'>
            {isLoading ? 'Criando' : 'Criar'} enquete
          </h2>
          {isLoading ? (
            <div className='flex items-center justify-center'>
              <CirclePulse />
            </div>
          ) : (
            <CreateForm onSubmit={() => setIsLoading((prev) => !prev)} />
          )}
        </Card>
      </Container>
    </main>
  );
}
