import React, {useState, useEffect} from 'react';
import {Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input , setInput] = useState('');
  const [messages, setMessages] = useState([
    {username:'Rohan', message:'Hello myself'},
    {username:'Raju', message:'Hello yourself'}
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamps','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc =>({id: doc.id, message :doc.data()}) ))
    })
  }, [])


  useEffect(() => {
    setUsername(prompt('Please Enter your name'));
  }, [])


  const sendMessage = (event) =>{
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamps:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput('');
  }
    return (
    <div className="App">
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'/>
      <h1>Hello Clever Programmer!</h1>
      <h2>Hello {username}</h2>
      {/* Input field and button */}
      <form className='app__form'>
      <FormControl className='app__formControl'>
      
      <Input className='app__input' placeholder='Enter a message..' value={input} onChange={event => setInput(event.target.value)} />
      
      <IconButton className='app__iconButton' disabled={!input} type='submit' variant='contained' color='primary' onClick={sendMessage}>
      <SendIcon/> 
      </IconButton>
  </FormControl>
      
      
      </form>
      
      
      {/* Messages themselves */}
      <FlipMove>
      {
        messages.map(({id, message}) =>(
          <Message key={id} username={username} message={message}/>
          
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
