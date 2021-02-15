import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = ({ chats, activeChat, userName, messages }) => {
  const chat = chats && chats[activeChat];

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = username === message.sender.userName;

      return (
        <div key={`msg_${index}`}>
          <div className='message-block'>
            {isMyMessage ? <MyMessage /> : <TheirMessage />}
          </div>
        </div>
      );
    });
  };

  renderMessages();

  return <div>Chat Feed</div>;
};

export default ChatFeed;
