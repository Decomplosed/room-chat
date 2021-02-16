import React from 'react';

const MessageForm = () => {
  const handleSubmit = () => {};

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <input
        className='message-input'
        placeholder='Send a message...'
        value={value}
      />
    </form>
  );
};

export default MessageForm;
