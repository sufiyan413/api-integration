import styled from 'styled-components';
import { TextField,Box } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background: #ffffff;
  }

  & .MuiOutlinedInput-input {
    height: 20px;
  }

  & .MuiInputAdornment-root {
    padding: 0;
  }
`;

export const InputAdornmentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 14px;
`;

export const StyledBox = styled(Box)`
border: 1px solid #ddd;
border-radius: 8px;
padding: 16px;
background-color: #fff;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
max-width:600px;
 display: flex;
 flex-direction:column;
justify-content: center;
align-items: center;
text-align: center;
`;

export const CenteredContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('https://e1.pxfuel.com/desktop-wallpaper/966/456/desktop-wallpaper-login-page-login.jpg') no-repeat center center fixed;
  background-size: cover; /* Ensures the image covers the whole container */
  background-color: #f0f0f0; /* Optional: Add a background color */
`;
