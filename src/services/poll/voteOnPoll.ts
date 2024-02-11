import { Id, toast } from 'react-toastify';
import { api } from '../../lib/axios';
import { handleError } from '../../utils/api';
import { options } from '../../lib/toastify';

interface voteOnPollArgs {
  pollId: string;
  pollOptionId: string;
}

/**
 * Vote on a poll
 *
 * @param {Object} voteOnPollArgs - Arguments for voting on a poll.
 * @param {string} voteOnPollArgs.pollId - The ID of the poll.
 * @param {string} voteOnPollArgs.pollOptionId - The ID of the selected poll
 * option.
 *
 * @returns {Promise<void>} - A Promise that resolves when the vote is
 * registered.
 */
export default async function voteOnPoll({
  pollId,
  pollOptionId,
}: voteOnPollArgs) {
  let toastId: Id;
  try {
    toastId = toast.loading('Registrando voto...');
    await api.post(`/polls/${pollId}/votes`, { pollOptionId });
    toast.update(toastId, {
      ...options,
      type: 'success',
      render: 'Voto registrado!',
      isLoading: false,
    });
  } catch (error) {
    const defaultMessage = 'Voto não registrado, tente novamente mais tarde';
    handleError({ error, defaultMessage, toastId: toastId! });
  }
}
