import { FormEvent, useState } from 'react';
import Button from '../../../components/Button';
import FieldWrapper from '../../../components/FieldWrapper';
import Input from '../../../components/Input';
import OptionsInput from '../../../components/OptionsInput';

interface IProps {
  onSubmit: () => void;
}

export default function CreateForm({ onSubmit }: IProps) {
  const [options, setOptions] = useState<string[]>([]);
  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    onSubmit();
    e.preventDefault();
    setTimeout(() => onSubmit(), 5000);
  };
  return (
    <form className='flex flex-col gap-2' onSubmit={formSubmit}>
      <FieldWrapper>
        <label htmlFor='title'>Título:</label>
        <Input type='text' name='title' id='title' required />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor='options'>Opções de resposta:</label>
        <OptionsInput id='options' options={options} setOptions={setOptions} />
      </FieldWrapper>
      <Button type='submit'>Criar</Button>
    </form>
  );
}
