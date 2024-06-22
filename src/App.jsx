import  { useState, useEffect } from 'react';
import styled from 'styled-components';
import MessageInput from './Components/MessageInput';
import MessageBox from './Components/MessageBox';
import fetchMessages from './api-service';

// Styled components using CSS Grid
const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 25rem 1fr; /* Sidebar takes 25rem, remaining is 1fr */
  grid-template-rows: 1fr auto; /* First row takes 1fr, second row takes auto (remaining height) */
  height: 100vh;
  overflow: hidden; /* Prevents MainContainer from scrolling */
`;

const Sidebar = styled.aside`
  background-color: #e97272;
  padding: 3rem;
  border: 3px solid #242222;
  border-radius: 0.4rem;
  margin-right: 1rem;
`;

const ChatArea = styled.main`
  background-color: #8cb0df;
  border: 3px solid #242222;
  border-radius: 0.4rem;
  padding: 1.5rem 2rem;
  display: grid;
  grid-template-rows: auto 1fr; /* First row takes auto height (content), second row takes 1fr (remaining space) */
  overflow: hidden; /* Prevents ChatArea from scrolling */
`;

const MessageWrapper = styled.div`
  /* No styles needed here for scrolling */
  display: flex;
  justify-content: center; /* Centers horizontally */
  align-items: center; /* Centers vertically */
  height: 100%; /* Ensures it takes the full height of the grid area */
  width: 100%;
  overflow-y: auto;
`;

const MessageBoxWrapper = styled.div`
  height: 100%; /* Takes full height of MessageWrapper */
  width: 100%;
`;

const InputWrapper = styled.div`
  align-self: end; /* Aligns the input to the bottom of its grid area */
  width: 100%;
`;

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMessages() {
      try {
        const { messages, error } = await fetchMessages();
        if (error) throw new Error(error);
        setMessages(messages);
      } catch (err) {
        setError(err.message);
      }
    }

    getMessages();
  }, []);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <MainContainer>
      <Sidebar>
        {/* Sidebar content */}
        <h2>Sidebar</h2>
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      </Sidebar>
      <ChatArea>
        <MessageWrapper>
          <MessageBoxWrapper>
            <MessageBox messages={messages} error={error} />
          </MessageBoxWrapper>
        </MessageWrapper>
        <InputWrapper>
          <MessageInput addMessage={addMessage} />
        </InputWrapper>
      </ChatArea>
    </MainContainer>
  );
}

export default App;
