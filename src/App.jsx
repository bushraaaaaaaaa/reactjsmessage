// src/App.js
import React from 'react';
import MessageList from '../components/Messagelist';
import { Container, Typography, CssBaseline, Paper, ThemeProvider, createTheme } from '@mui/material';
import "./App.css"
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="md" style={{ marginTop: '50px',backgroundColor:"purple" }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom >
            Messaging App
          </Typography>
          <MessageList/>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
