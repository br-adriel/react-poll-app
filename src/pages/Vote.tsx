import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import CirclePulse from '../components/CirclePulse';
import PollNotFound from '../components/PollNotFound';
import VoteButton from '../components/VoteButton';
import { Poll } from '../interfaces/Poll';
import { getPoll, voteOnPoll } from '../services/poll';

export default function Vote() {
  const { pollId } = useParams();

  const [poll, setPoll] = useState<Poll>();
  const [totalVotes, setTotalVotes] = useState(0);
  const [maxVotes, setMaxVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const vote = async (optionId: string) => {
    if (pollId) {
      voteOnPoll({ pollId, pollOptionId: optionId });
    }
  };

  const loadPollData = async () => {
    document.title = 'Enquete - VotAí';

    setIsLoading(true);
    if (pollId) {
      const fetchedPoll = await getPoll({ id: pollId });

      if (fetchedPoll) {
        const scores: number[] = fetchedPoll.options.map((opt) => opt.score);
        document.title = `Enquete: ${fetchedPoll.title} - VotAí!`;

        setPoll(fetchedPoll);
        setTotalVotes(scores.reduce((a, b) => a + b, 0));
        setMaxVotes(Math.max(...scores));
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadPollData();
  }, [pollId]);

  if (isLoading) return <CirclePulse />;
  if (!poll) return <PollNotFound />;
  return (
    <Card className='w-[400px] max-w-full'>
      <h2 className='text-xl font-bold'>{poll.title}</h2>
      <h3 className='text-sm mb-3'>
        {totalVotes} voto{totalVotes != 1 && 's'}
      </h3>

      <div className='flex flex-col gap-1'>
        {poll.options.map((option) => {
          return (
            <VoteButton
              maxVotes={maxVotes}
              option={option}
              key={option.id}
              onClick={vote}
            />
          );
        })}
      </div>
    </Card>
  );
}
