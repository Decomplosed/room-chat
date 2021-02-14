import { ChatEngine } from 'react-chat-engine';

import './App.css';

const App = () => {
  return (
    <ChatEngine
      height='100vh'
      projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
      userName=''
      userSecret=''
    />
  );
};

export default App;
