import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import CirclePulse from '../components/CirclePulse';
import FieldWrapper from '../components/FieldWrapper';
import Input from '../components/Input';
import OptionsInput from '../components/OptionsInput';
import { PollData } from '../interfaces/Poll';
import PollService from '../services/poll';

export default function Create() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [title, setTitle] = useState<string>('');

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
    const pollId = await PollService.create({ data });

    if (pollId) {
      setTitle('');
      setOptions([]);
      navigate(`/poll/${pollId}`);
    }

    setIsLoading(false);
  };

  return (
    <Card className='w-full sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-3/12'>
      <h2 className='text-xl font-bold my-2 text-center'>
        {isLoading ? 'Criando' : 'Criar'} enquete
      </h2>
      {isLoading ? (
        <div className='flex items-center justify-center'>
          <CirclePulse />
        </div>
      ) : (
        <form className='flex flex-col gap-2' onSubmit={formSubmit}>
          <FieldWrapper>
            <label htmlFor='title'>Título:</label>
            <Input
              type='text'
              name='title'
              id='title'
              required
              value={title}
              onChange={(e) => setTitle((e.target as HTMLInputElement).value)}
            />
          </FieldWrapper>
          <FieldWrapper>
            <label htmlFor='options'>Opções de resposta:</label>
            <OptionsInput
              id='options'
              options={options}
              setOptions={setOptions}
            />
          </FieldWrapper>
          <Button type='submit'>Criar</Button>
        </form>
      )}
    </Card>
  );
}
