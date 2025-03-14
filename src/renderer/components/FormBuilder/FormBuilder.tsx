import React, { useState } from 'react';
import { Box, Button, TextField, Select, MenuItem, FormControlLabel, Checkbox, Typography } from '@mui/material';

interface FormField {
  type: string;
  name: string;
  label: string;
  required: boolean;
  options?: { label: string; value: string }[];
}

const FormBuilder: React.FC = () => {
  const [fields, setFields] = useState<FormField[]>([]);
  const [currentField, setCurrentField] = useState<FormField>({
    type: 'text',
    name: '',
    label: '',
    required: false
  });

  const addField = () => {
    setFields([...fields, { ...currentField }]);
    setCurrentField({
      type: 'text',
      name: '',
      label: '',
      required: false
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Form Builder
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Add New Field
        </Typography>
        <Select
          fullWidth
          value={currentField.type}
          onChange={(e) => setCurrentField({ ...currentField, type: e.target.value as string })}
          sx={{ mb: 2 }}
        >
          <MenuItem value="text">Text</MenuItem>
          <MenuItem value="number">Number</MenuItem>
          <MenuItem value="select_one">Select One</MenuItem>
          <MenuItem value="select_multiple">Select Multiple</MenuItem>
        </Select>
        
        <TextField
          fullWidth
          label="Field Name"
          value={currentField.name}
          onChange={(e) => setCurrentField({ ...currentField, name: e.target.value })}
          sx={{ mb: 2 }}
        />
        
        <TextField
          fullWidth
          label="Field Label"
          value={currentField.label}
          onChange={(e) => setCurrentField({ ...currentField, label: e.target.value })}
          sx={{ mb: 2 }}
        />
        
        <FormControlLabel
          control={
            <Checkbox
              checked={currentField.required}
              onChange={(e) => setCurrentField({ ...currentField, required: e.target.checked })}
            />
          }
          label="Required"
        />
        
        <Button variant="contained" onClick={addField} sx={{ mt: 2 }}>
          Add Field
        </Button>
      </Box>

      <Typography variant="h6" gutterBottom>
        Form Preview
      </Typography>
      {fields.map((field, index) => (
        <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
          <Typography variant="subtitle1">{field.label}</Typography>
          <Typography variant="body2">Type: {field.type}</Typography>
          <Typography variant="body2">Name: {field.name}</Typography>
          {field.required && <Typography variant="body2">Required</Typography>}
        </Box>
      ))}
    </Box>
  );
};

export default FormBuilder;