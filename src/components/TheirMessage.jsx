import React from 'react';

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;

  return <div className='message-row'>TheirMessage</div>;
};

export default TheirMessage;
