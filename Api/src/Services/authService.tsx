// import axios from 'axios';

// const API_URL = 'https://localhost:7074/api/auth';

// // Login function
// export const login = async (credentials: { email: string; password: string }) => {
//   try {
//     const response = await axios.post(`${API_URL}/login`, credentials);
//     return response.data;
//   } catch (error) {
//     console.error('Login error:', error);
//     throw error;
//   }
// };

// // Register function
// export const register = async (
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string,
//   confirmPassword: string
// ) => {
//   try {
//     const response = await axios.post(`${API_URL}/register`, {
//       firstName,
//       lastName,
//       email,
//       password,
//       confirmPassword,
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw error;
//   }
// };
import axios from 'axios';

const API_URL = 'https://localhost:7074/api/auth';

// Login function
export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data; // Ensure this contains the user details (firstName, lastName, token)
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register function
export const register = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axios.post(`${API_URL}/register`, {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
    return response.data; // Ensure this contains any necessary information after registration
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
