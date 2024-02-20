// src/components/MessageList.js
import React, { useState, useEffect } from 'react';
import { onValue, ref, push, update, remove } from 'firebase/database';
import { TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import db from '../config/firebase';


const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const messagesRef = ref(db, 'messages');

  useEffect(() => {
    // Fetch messages from Firebase Realtime Database
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.entries(data).map(([key, value]) => ({ key, ...value }));
        setMessages(messageList);
      } else {
        setMessages([]);
      }
    });
  }, []);

  const addMessage = () => {
    // Add a new message to Firebase Realtime Database
    if (newMessage.trim() !== '') {
      push(messagesRef, { text: newMessage });
      setNewMessage('');
    }
  };

  const editMessage = (id, updatedText) => {
    // Edit a message in Firebase Realtime Database
    update(ref(messagesRef, `${id}/text`), updatedText);
  };

  const deleteMessage = (id) => {
    // Delete a message from Firebase Realtime Database
    remove(ref(messagesRef, id));
  };

  return (
    <Paper style={{ padding: '20px', marginTop: '20px',backgroundColor:"rgb(201, 179, 183)" }}>
      <Typography variant="h5" gutterBottom>
      
      </Typography>
      <TextField
        variant="outlined"
        label="Type your message"
        fullWidth
        margin="normal"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addMessage}>
        Add Message
      </Button>
      <Divider style={{ margin: '20px 0' }} />
      <List>
        {messages.map((message) => (
          <ListItem key={message.key} alignItems="flex-start" style={{ marginBottom: '10px' }}>
            <ListItemText primary={message.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit" onClick={() => editMessage(message.key, prompt('Edit message:', message.text))}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteMessage(message.key)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default MessageList;
