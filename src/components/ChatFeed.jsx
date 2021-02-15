import React from 'react';
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = ({ chats, activeChat, userName, messages }) => {
  const chat = chats && chats[activeChat];

  const renderMessages = () => {};

  return <div>Chat Feed</div>;
};

export default ChatFeed;
