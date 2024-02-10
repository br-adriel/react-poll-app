import { FormEvent, useEffect, useState } from 'react';
import Card from '../components/Card';
import CreatePollForm from '../components/CreatePollForm';
import Loading from '../components/Loading';
import PollCreatedCard from '../components/PollCreatedCard';
import { PollData } from '../interfaces/Poll';
import { createPoll } from '../services/poll';

export default function Create() {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');
  const [pollId, setPollId] = useState<string>();

  useEffect(() => {
    document.title = 'Criar enquete - VotAí!';
  }, []);

  const formSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    const data: PollData = {
      options,
      title,
    };
    const res = await createPoll({ data });
    setPollId(res);

    if (pollId) {
      setTitle('');
      setOptions([]);
    }

    setIsLoading(false);
  };

  if (pollId) return <PollCreatedCard pollId={pollId} />;
  return (
    <Card className='w-full sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-3/12'>
      <h2 className='text-xl font-bold my-2 text-center'>
        {isLoading ? 'Criando' : 'Criar'} enquete
      </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <CreatePollForm
          formSubmit={formSubmit}
          options={options}
          setOptions={setOptions}
          setTitle={setTitle}
          title={title}
        />
      )}
    </Card>
  );
}
