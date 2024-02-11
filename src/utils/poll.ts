import { Poll } from '../interfaces/Poll';
import { UpdateStateWithVotesArgs } from '../interfaces/utils/poll';

export function updateStateWithVotes({
  prev,
  updatedVotes,
}: UpdateStateWithVotesArgs): Poll | undefined {
  if (!prev) return undefined;
  const newState = Object.assign({}, prev);
  newState.options = prev.options.map((op) => {
    if (op.id === updatedVotes.pollOptionId) {
      return {
        id: op.id,
        score: updatedVotes.votes,
        title: op.title,
      };
    }
    return op;
  });
  return newState;
}

export function calculateScores(poll: Poll): number[] {
  return poll.options.map((opt) => opt.score);
}

export function calculateTotalVotes(poll: Poll, scores?: number[]): number {
  const sc = scores || calculateScores(poll);
  return sc.reduce((a, b) => a + b, 0);
}
