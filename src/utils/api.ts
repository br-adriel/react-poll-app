import { Id, toast } from 'react-toastify';
import { options } from '../lib/toastify';

interface handleErrorArgs {
  error: any;
  defaultMessage?: string;
  toastId?: Id;
}

export function handleError({
  error,
  defaultMessage = 'Erro interno, tente novamente mais tarde!',
  toastId,
}: handleErrorArgs) {
  let message = defaultMessage;

  if (error.response?.status < 500 && error.response?.data.message) {
    message = error.response.data.message;
  }

  if (toastId) {
    toast.update(toastId, {
      ...options,
      render: message,
      type: 'error',
      isLoading: false,
    });
    return;
  }
  toast.error(message);
}
