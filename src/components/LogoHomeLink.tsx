import { Link } from 'react-router-dom';

export default function LogoHomeLink() {
  return (
    <Link to='/'>
      <h1 className='text-7xl italic font-bold'>VotAí!</h1>
    </Link>
  );
}
