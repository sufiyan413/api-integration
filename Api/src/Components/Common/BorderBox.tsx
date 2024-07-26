// src/components/BorderBox.tsx

import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

interface BorderBoxProps {
  children: React.ReactNode;
}

const BorderBox: React.FC<BorderBoxProps> = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

export default BorderBox;
