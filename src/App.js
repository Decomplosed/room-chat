import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      userName='Bart'
      userSecret='123456'
      renderChatFeed={(chatAppProps) => {}}
    />
  );
};

export default App;
