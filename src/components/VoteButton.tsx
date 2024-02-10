import PollOption from '../interfaces/PollOption';

interface IProps {
  option: PollOption;
  maxVotes: number;
  onClick?: (id: string) => void;
}

export default function VoteButton({ maxVotes, option, onClick }: IProps) {
  return (
    <button
      onClick={() => onClick && onClick(option.id)}
      className='bg-pink-200 rounded px-6 py-3 relative z-0 text-left focus:outline-pink-600 hover:brightness-105 transition-all'
    >
      <div
        className='absolute h-full bg-pink-400 top-0 left-0 rounded -z-10'
        style={{
          width: `calc(${option.score / maxVotes} * 100%)`,
        }}
      />
      <span>{option.title}</span>
      <span className='text-sm opacity-50 ml-3 text-pink-900'>
        ({option.score} voto{option.score !== 1 && 's'})
      </span>
    </button>
  );
}
