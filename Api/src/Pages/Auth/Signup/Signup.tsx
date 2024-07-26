import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { signupSchema } from '../../../HookForm/validations';
import CustomTextField from '../../../Components/Common/CustomTextField';
import { CenteredContainer, StyledBox } from '../../../Styles/Common/Common';
import { Box, Typography, Grid } from '@mui/material';
import useSnackbarService from '../../../helpers/useSnackbarService';
import { register } from '../../../Services/authService';

interface SignupFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { catchSuccessSnackbar, catchErrorSnackbar } = useSnackbarService();
  const form = useForm<SignupFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(signupSchema),
  });

  const { register: formRegister, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onSubmit = async (values: SignupFormInputs) => {
    if (isValid) {
      try {
        const response = await register(
          values.firstName,
          values.lastName,
          values.email,
          values.password,
          values.confirmPassword
        );
        console.log('Signup response:', response);
        if (response) {
          catchSuccessSnackbar('Signup successful!');
          navigate('/');
        } else {
          catchErrorSnackbar('Signup failed. Please check your details.');
        }
      } catch (error) {
        console.error('Signup error:', error);
        catchErrorSnackbar('An error occurred. Please try again.');
      }
    }
  };

  return (
    <CenteredContainer>
      <StyledBox>
        <Box>
          <Typography variant="h4">Signup</Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                label="First Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formRegister('firstName')}
                errorText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomTextField
                label="Last Name"
                variant="outlined"
                fullWidth
                margin="normal"
                {...formRegister('lastName')}
                errorText={errors.lastName?.message}
              />
            </Grid>
          </Grid>
          <CustomTextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            {...formRegister('email')}
            errorText={errors.email?.message}
          />
          <CustomTextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            {...formRegister('password')}
            errorText={errors.password?.message}
          />
          <CustomTextField
            label="Confirm Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            {...formRegister('confirmPassword')}
            errorText={errors.confirmPassword?.message}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </StyledBox>
    </CenteredContainer>
  );
};

export default Signup;
