import { Dispatch, FormEvent, SetStateAction } from 'react';
import Button from './Button';
import FieldWrapper from './FieldWrapper';
import Input from './Input';
import OptionsInput from './OptionsInput';

interface IProps {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
  formSubmit: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
}

export default function CreatePollForm(props: IProps) {
  const { options, setOptions } = props;
  const { title, setTitle } = props;
  const { formSubmit } = props;

  return (
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
        <OptionsInput id='options' options={options} setOptions={setOptions} />
      </FieldWrapper>
      <Button type='submit'>Criar</Button>
    </form>
  );
}
