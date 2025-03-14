import React from 'react';
import { Box, Container } from '@mui/material';
import FormBuilder from './components/FormBuilder/FormBuilder';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <FormBuilder />
      </Box>
    </Container>
  );
};

export default App;