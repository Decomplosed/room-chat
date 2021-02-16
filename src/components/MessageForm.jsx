import React from 'react';

const MessageForm = () => {
  const handleSubmit = () => {};

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input className='message-input' />
    </form>
  );
};

export default MessageForm;
