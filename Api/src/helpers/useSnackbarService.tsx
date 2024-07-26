import { useSnackbar } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const useSnackbarService = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const catchSuccessSnackbar = (message: string) => {
    enqueueSnackbar(message, {
      variant: 'success',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      action: key => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: '#FFF' }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  const catchErrorSnackbar = (error: string | undefined) => {
    enqueueSnackbar(error || 'An error occurred.', {
      variant: 'error',
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
      action: key => (
        <IconButton onClick={() => closeSnackbar(key)} sx={{ color: '#FFF' }}>
          <CloseIcon />
        </IconButton>
      ),
    });
  };

  return { catchSuccessSnackbar, catchErrorSnackbar };
};

export default useSnackbarService;
