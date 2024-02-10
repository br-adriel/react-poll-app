import { Poll } from '../../interfaces/Poll';
import { api } from '../../lib/axios';
import { handleError } from '../../utils/api';

interface getPollArgs {
  id: string;
}

/**
 * Retrieves a poll based on its ID.
 *
 * @param {Object} param0 - Parameters for fetching the poll.
 * @param {string} param0.id - The ID of the poll to retrieve.
 *
 * @returns {Promise<Poll|undefined>} - A promise that resolves with the
 * retrieved poll or undefined if its not found or an error occurs.
 */
export default async function getPoll({ id }: getPollArgs) {
  try {
    const {
      data: { poll },
    } = await api.get<{ poll: Poll }>(`/polls/${id}`);
    return poll;
  } catch (error) {
    const defaultMessage = 'Erro ao recuperar dados da enquete';
    handleError({ error, defaultMessage });
  }
}
