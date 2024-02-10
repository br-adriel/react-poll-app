import { toast } from 'react-toastify';
import CardButton from './CardButton';
import CardLink from './CardLink';

interface IProps {
  pollId: string;
}

export default function PollCreatedCard({ pollId }: IProps) {
  const relPollPageLink = `/poll/${pollId}/vote`;
  const absPollPageLink = `${import.meta.env.VITE_SITE_URL}${relPollPageLink}`;

  const copyLink = () => {
    navigator.clipboard.writeText(absPollPageLink);
    toast.info('Link copiado para a área de transferência!');
  };

  return (
    <div className='w-[400px] max-w-full'>
      <h2 className='font-bold text-2xl mb-3 text-center'>Enquete criada</h2>
      <div className='flex flex-col gap-2 w-full'>
        <CardLink to={relPollPageLink}>Ir para a enquete</CardLink>
        <CardButton className='text-left' onClick={copyLink}>
          Copiar link para a enquete
        </CardButton>
      </div>
    </div>
  );
}
