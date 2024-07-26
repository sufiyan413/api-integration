import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { loginSchema } from '../../../HookForm/validations'; 
import CustomTextField from '../../../Components/Common/CustomTextField'; 
import { CenteredContainer, StyledBox } from '../../../Styles/Common/Common'; 
import { Box, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../../Services/authService';
import useSnackbarService from '../../../helpers/useSnackbarService';

interface LoginFormInputs {
  email: string;
  password: string;
  keepMeSignedIn?: boolean;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { catchSuccessSnackbar, catchErrorSnackbar } = useSnackbarService();
  const form = useForm<LoginFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isValid } = formState;

  const onSubmit = async (values: LoginFormInputs) => {
    if (isValid) {
      try {
        const data = await login({
          email: values.email,
          password: values.password,
        });
        console.log('Login successful:', data);

        localStorage.setItem('authToken', data.token);
        localStorage.setItem('firstName', data.firstName); // Store first name
        localStorage.setItem('lastName', data.lastName);   // Store last name

        //success notification
        catchSuccessSnackbar('Login successful!');

        console.log('Navigating to /home');
        navigate('/home');
      } catch (error) {
        console.error('Login error:', error);
        catchErrorSnackbar('Login failed. Please check your credentials.');
      }
    }
  };

  return (
    <CenteredContainer>
      <StyledBox>
        <Box textAlign="center">
          <Typography variant="h4">Welcome Back</Typography>
          <Typography mt={1} variant="h6">Join Our Community</Typography>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)} style={{marginTop:'30px'}}>
          <CustomTextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            type="email"
            {...register('email')}
            errorText={errors.email?.message}
          />
          <CustomTextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            {...register('password')}
            errorText={errors.password?.message}
          />
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <FormControlLabel
              control={<Checkbox {...register('keepMeSignedIn')} color="primary" />}
              label="Keep me signed in"
            />
            <Typography variant="body2">
              <Link to="/forgot-password">Forgot Password?</Link>
            </Typography>
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>

        <Box my={4} textAlign="center">
          <Box display="flex" alignItems="center">
            <hr style={{ flex: 1, border: '1px solid #ccc' }} />
            <Typography variant="body2" style={{ margin: '0 8px' }}>
              or continue with
            </Typography>
            <hr style={{ flex: 1, border: '1px solid #ccc' }} />
          </Box>
          <Box display="flex" justifyContent="center" mt={2}>
            <Button variant="outlined" style={{ borderRadius: '50%', width: 50, height: 60 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" style={{ width: 60, height: 60 }} />
            </Button>
            <Button variant="outlined" style={{ borderRadius: '50%', margin: '0 8px', width: 50, height: 60  }}>
              <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Google" style={{  width: 60, height: 60  }} />
            </Button>
            <Button variant="outlined" style={{ borderRadius: '50%', margin: '0 8px', width: 50, height: 60  }}>
              <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="Twitter" style={{  width: 60, height: 60 }} />
            </Button>
          </Box>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </StyledBox>
    </CenteredContainer>
  );
};

export default Login;
