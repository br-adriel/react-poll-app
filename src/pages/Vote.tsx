import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWebSocket from 'react-use-websocket';
import Card from '../components/Card';
import CirclePulse from '../components/CirclePulse';
import PollNotFound from '../components/PollNotFound';
import VoteButton from '../components/VoteButton';
import { Poll } from '../interfaces/Poll';
import { getPoll, trackVotes, voteOnPoll } from '../services/poll';
import {
  calculateMaxVotes,
  calculateScores,
  calculateTotalVotes,
  updateStateWithVotes,
} from '../utils/poll';
import { TrackVotesResponse } from '../services/poll/trackVotes';

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

  const computePollRelatedStates = (poll: Poll) => {
    const scores = calculateScores(poll);
    setTotalVotes(calculateTotalVotes(poll, scores));
    setMaxVotes(calculateMaxVotes(poll, scores));
  };

  const updatePollRelatedStates = () => {
    if (poll) computePollRelatedStates(poll);
  };

  const onMessage = (e: MessageEvent<string>) => {
    const response: TrackVotesResponse = JSON.parse(e.data);
    setPoll((prev) => {
      return updateStateWithVotes({ prev, updatedVotes: response });
    });
    updatePollRelatedStates();
  };

  if (pollId) {
    const { options, url } = trackVotes({ pollId, onMessage });
    useWebSocket(url, options);
  }

  const loadPollData = async () => {
    document.title = 'Enquete - VotAí';

    setIsLoading(true);
    if (pollId) {
      const fetchedPoll = await getPoll({ id: pollId });

      if (fetchedPoll) {
        setPoll(fetchedPoll);
        computePollRelatedStates(fetchedPoll);

        document.title = `Enquete: ${fetchedPoll.title} - VotAí!`;
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
