import { Dispatch, KeyboardEvent, SetStateAction, useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import Button from '../Button';
import Input from '../Input';
import OptionBadge from './components/OptionBadge';

interface IProps {
  id?: string;
  options: string[];
  setOptions: Dispatch<SetStateAction<string[]>>;
  required?: boolean;
}

export default function OptionsInput({
  id,
  options,
  setOptions,
  required = true,
}: IProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const addOption = () => {
    if (!options.includes(inputValue) && inputValue) {
      setOptions((prev) => [...prev, inputValue]);
    }
    setInputValue('');
  };

  const removeOption = (option: string) => {
    setOptions((prev) => prev.filter((op) => op !== option));
  };

  const enterOnInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addOption();
    }
  };

  return (
    <div className='flex flex-col gap-1'>
      <div className='flex gap-1 max-w-full flex-wrap sm:flex-nowrap justify-stretch'>
        <Input
          id={id}
          className='flex-grow max-w-full'
          value={inputValue}
          onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
          onKeyDown={enterOnInput}
          required={required && options.length == 0}
        />
        <Button
          onClick={addOption}
          type='button'
          title='Adicionar'
          className='ml-auto'
        >
          <BiPlus />
        </Button>
      </div>
      <div className='flex flex-wrap gap-1'>
        {options.map((option) => (
          <OptionBadge
            option={option}
            removeOption={removeOption}
            key={option}
          />
        ))}
      </div>
    </div>
  );
}
