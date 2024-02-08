import CardLink from '../components/CardLink';

export default function Home() {
  return (
    <main className='bg-pink-100'>
      <div className='container mx-auto min-h-dvh p-6 flex justify-center items-center flex-col gap-5'>
        <h1 className='text-7xl italic font-bold'>VotAí!</h1>
        <div className='flex gap-3 flex-col w-[480px] max-w-full'>
          <CardLink to='/create'>Criar uma enquete</CardLink>
          <CardLink to='/vote'>Votar em uma enquete</CardLink>
        </div>
      </div>
    </main>
  );
}
