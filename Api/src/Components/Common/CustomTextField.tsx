import React from 'react';
import TextField, { OutlinedTextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/system';

interface CustomTextFieldProps extends OutlinedTextFieldProps {
  errorText?: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  width: '100%',
}));

const CustomTextField = React.forwardRef<HTMLInputElement, CustomTextFieldProps>(
  ({ errorText, ...props }, ref) => {
    return (
      <StyledTextField
        {...props}
        ref={ref}
        error={Boolean(errorText)}
        helperText={errorText || props.helperText}
      />
    );
  }
);

export default CustomTextField;
