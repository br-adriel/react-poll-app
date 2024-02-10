import Card from './Card';

export default function PollNotFound() {
  return (
    <Card className='w-[450px] max-w-full'>
      <h2 className='text-xl font-bold text-center'>Enquete não encontrada</h2>
      <p className='text-center'>
        Verifique se o ID está correto e tente novamente
      </p>
    </Card>
  );
}
