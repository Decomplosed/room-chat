import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPaddword] = useState('');

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'></h1>
      </div>
    </div>
  );
};
