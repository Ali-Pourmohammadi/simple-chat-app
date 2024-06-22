/* eslint-disable no-unused-vars */
import { Avatar } from 'antd';

export default function Message({ message }) {
  return (
<div className="flex items-start p-4 mb-4 bg-white shadow-lg rounded-lg w-[90rem] ">
        <Avatar
        // src={message.userImage}
        className="mr-4"
        size="large"
      />
      <div className="flex flex-col">
        <p className="text-gray-700 mt-2">{message.text}</p>
      </div>
    </div>
  );
}
