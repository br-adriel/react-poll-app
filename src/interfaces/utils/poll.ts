import { Poll } from '../Poll';

export interface UpdateStateWithVotesArgs {
  prev: Poll | undefined;
  updatedVotes: {
    pollOptionId: string;
    votes: number;
  };
}
