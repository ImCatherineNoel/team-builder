import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js'

function App() {
  const [member, setMember] = useState([
    {
      id: 1,
      name: 'First Name',
      email: 'you@here.com',
      role: 'myRole'        
    }
  ]);
  
  
  return (
    <div className='App'>
      <Form />
      
    </div>
  );
}

export default App;
