/* eslint-disable react/prop-types */
import Message from './Message';

export default function MessageBox({ messages, error }) {
  console.log(messages);
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!messages.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full w-full gap-5 bg-transparent rounded-md p-4 flex flex-col items-center">
      {messages.map((message) => (
        <Message key={message.id} message={message}/>
      ))}
    </div>
  );
}
