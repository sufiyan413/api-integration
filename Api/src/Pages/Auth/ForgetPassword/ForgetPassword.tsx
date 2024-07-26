import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { forgetPasswordSchema } from '../../../HookForm/validations';
import CustomTextField from '../../../Components/Common/CustomTextField';
import { CenteredContainer, StyledBox } from '../../../Styles/Common/Common';
import { Box, Typography } from '@mui/material';

interface ForgetPasswordFormInputs {
  email: string;
}

const ForgetPassword: React.FC = () => {
  const navigate = useNavigate();
  const form = useForm<ForgetPasswordFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(forgetPasswordSchema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onSubmit = (values: ForgetPasswordFormInputs) => {
    if (isValid) {
      const data = {
        email: values.email,
      };
      console.log(data);
      // Navigate to a different page or display a success message
      navigate('/reset-password');
    }
  };

  return (
    <CenteredContainer>
      <StyledBox>
        <Box>
          <Typography variant="h4">Forget Password</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomTextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            {...register('email')}
            errorText={errors.email?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </StyledBox>
    </CenteredContainer>
  );
};

export default ForgetPassword;
