import { toast } from 'react-toastify';

interface handleErrorArgs {
  error: any;
  defaultMessage?: string;
}

export function handleError({
  error,
  defaultMessage = 'Erro interno, tente novamente mais tarde!',
}: handleErrorArgs) {
  if (error.response?.status == 500) {
    toast.error(defaultMessage);
    return;
  }

  toast.error(error.response?.data.message || defaultMessage);
}
