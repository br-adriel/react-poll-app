import { PollData } from '../../interfaces/Poll';
import { api } from '../../lib/axios';
import { handleError } from '../../utils/api';

interface createPollArgs {
  data: PollData;
}

/**
 * Create a new poll.
 *
 * @param {Object} param0 - The parameters for creating the poll.
 * @param {PollData} param0.data - The data necessary to create the poll.
 *
 * @returns {Promise<string|undefined>} - The unique identifier (pollId) of
 * the created poll or undefined if an error occurs.
 */
export default async function createPoll({ data }: createPollArgs) {
  try {
    const {
      data: { pollId },
    } = await api.post<{ pollId: string }>('/polls', data);
    return pollId;
  } catch (error) {
    const defaultMessage = 'Não foi possível criar a enquete';
    handleError({ error, defaultMessage });
  }
}
