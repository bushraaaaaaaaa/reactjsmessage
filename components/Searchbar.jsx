import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(props) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-password-input"
          label="Enter Your Messages"
          type="text"
          autoComplete="current-password"
          variant="standard"
          onChange={(event) => props.onChange(event)}
          value={props.value}
        />
      </div>
    </Box>
  );
}
