import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Card from '../components/Card';
import FieldWrapper from '../components/FieldWrapper';
import Input from '../components/Input';

export default function Poll() {
  const navigate = useNavigate();

  const [id, setId] = useState<string>('');

  const submitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/poll/${id.trim()}/vote`);
  };

  useEffect(() => {
    document.title = 'Encontrar enquete - VotAí!';
  }, []);

  return (
    <Card>
      <h2 className='text-xl font-bold text-center mb-3'>Encontrar enquete</h2>
      <form
        className='flex flex-col gap-2 max-w-full w-[300px]'
        onSubmit={submitForm}
      >
        <FieldWrapper>
          <label htmlFor='id'>Id da enquete:</label>
          <Input
            id='id'
            name='id'
            required
            value={id}
            onChange={(e) => setId((e.target as HTMLInputElement).value)}
          />
        </FieldWrapper>
        <Button type='submit'>Procurar enquete</Button>
      </form>
    </Card>
  );
}
