import React from 'react';

const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt='message-attachment'
        className='message-image'
        style={{ flaot: 'right' }}
      />
    );
  }

  return <div>MyMessage</div>;
};

export default MyMessage;
