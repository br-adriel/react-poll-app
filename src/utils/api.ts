import { Id, toast } from 'react-toastify';

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
      render: defaultMessage,
      type: 'error',
      isLoading: false,
      autoClose: 5000,
    });
    return;
  }
  toast.error(defaultMessage);
}
