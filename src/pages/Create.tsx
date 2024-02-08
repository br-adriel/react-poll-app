import { FormEvent, useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import FieldWrapper from '../components/FieldWrapper';
import Input from '../components/Input';
import OptionsInput from '../components/OptionsInput';

export default function Create() {
  const [options, setOptions] = useState<string[]>([]);

  const formSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault();

  return (
    <main className='bg-pink-100'>
      <div className='container mx-auto min-h-dvh p-6 flex justify-center items-center flex-col gap-5'>
        <h1 className='text-7xl italic font-bold'>VotAí!</h1>
        <Card>
          <h2 className='text-xl font-bold my-2 text-center'>Criar enquete</h2>
          <form className='flex flex-col gap-2' onSubmit={formSubmit}>
            <FieldWrapper>
              <label htmlFor='title'>Título:</label>
              <Input type='text' name='title' id='title' required />
            </FieldWrapper>
            <FieldWrapper>
              <label htmlFor='options'>Opções:</label>
              <OptionsInput
                id='options'
                options={options}
                setOptions={setOptions}
              />
            </FieldWrapper>
            <Button type='submit'>Criar</Button>
          </form>
        </Card>
      </div>
    </main>
  );
}
