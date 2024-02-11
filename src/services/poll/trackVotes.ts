import { Options } from 'react-use-websocket';

interface TrackVotesArgs {
  pollId: string;
  onMessage?: (event: MessageEvent<any>) => void;
  onError?: (event: Event) => void;
}

interface TrackVotesReturn {
  url: string;
  options: Options;
}

export interface TrackVotesResponse {
  pollOptionId: string;
  votes: number;
}

export default function trackVotesUrl({
  pollId,
  onMessage,
  onError,
}: TrackVotesArgs): TrackVotesReturn {
  return {
    url: `ws:${import.meta.env.VITE_API_URL}/polls/${pollId}/results`,
    options: {
      onMessage,
      onError,
      shouldReconnect: () => true,
      reconnectAttempts: 3,
      reconnectInterval: 3000,
    },
  };
}
