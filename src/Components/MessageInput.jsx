import { useState } from 'react';
import { Input, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { createMessage } from '../api-service';

function MessageInput({ addMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = async () => {
    if (message.trim()) {
      try {
        const newMessage = await createMessage(message);
        addMessage(newMessage);
        setMessage(''); // Clear the input after sending
      } catch (error) {
        console.error("Failed to send message:", error);
      }
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Input
        placeholder="Type your message ..."
        style={{ padding: '1.2rem', flex: 1 }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onPressEnter={handleSend} // Send message on Enter key press
      />
      <Button
        type="primary"
        icon={<SendOutlined />}
        onClick={handleSend}
        style={{ marginLeft: '0.5rem', padding: '1.2rem' }}
      />
    </div>
  );
}

export default MessageInput;
