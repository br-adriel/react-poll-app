import { Outlet } from 'react-router-dom';
import Container from './components/Container';
import LogoHomeLink from './components/LogoHomeLink';

function App() {
  return (
    <main className='bg-pink-100'>
      <Container>
        <LogoHomeLink />
        <Outlet />
      </Container>
    </main>
  );
}

export default App;
