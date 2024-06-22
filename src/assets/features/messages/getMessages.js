import { useState, useEffect } from 'react';
import fetchMessages from '../../../api-service';

export default function useMessages() {
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

  return { messages, error };
}
