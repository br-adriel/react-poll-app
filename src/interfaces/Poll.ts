import PollOption from './PollOption';

/**
 * Poll as returned by the API
 */
export interface Poll {
  id: string;
  title: string;
  options: PollOption[];
}

/**
 * The data necessary to create a Poll
 */
export interface PollData {
  title: string;
  options: string[];
}
