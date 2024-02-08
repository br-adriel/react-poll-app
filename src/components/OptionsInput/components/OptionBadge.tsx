import { BiX } from 'react-icons/bi';

interface IProps {
  option: string;
  removeOption: (option: string) => void;
}

export default function OptionBadge({ option, removeOption }: IProps) {
  return (
    <div className='flex gap-2 bg-pink-200 py-1 pl-3 pr-1 rounded-lg items-center flex-grow'>
      <p className='flex-grow text-sm'>{option}</p>
      <button
        type='button'
        className='bg-pink-500 text-pink-200 py-2 px-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center focus:outline-pink-600 focus:outline-offset-2'
        onClick={() => removeOption(option)}
        title='Remover'
      >
        <BiX />
      </button>
    </div>
  );
}
