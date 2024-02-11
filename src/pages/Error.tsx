import { useRouteError } from 'react-router-dom';
import Card from '../components/Card';
import Container from '../components/Container';
import LogoHomeLink from '../components/LogoHomeLink';
import notFoundSvg from '../assets/img/not-found.svg';

export default function Error() {
  const error: any = useRouteError();

  const errorTitles: Record<string, string> = {
    '404': 'Página não encontrada',
    default: 'Um erro ocorreu!',
  };

  return (
    <main className='bg-pink-100'>
      <Container>
        <LogoHomeLink />
        <Card className='text-center'>
          <img
            src={notFoundSvg}
            alt=''
            className='w-[300px] max-w-90% px-8 py-6'
          />
          <h2 className='text-2xl font-bold'>
            {errorTitles[error.status] || errorTitles.default}
          </h2>
          <p className='mb-3'>Erro: {error.statusText || error.message}</p>
        </Card>
      </Container>
    </main>
  );
}
