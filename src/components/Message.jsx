import React from 'react';
import {auth} from '../firebase'

const style = {
  message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `aboslute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#7F6095] text-white float-right text-end rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`
};

const Message = ({ message }) => {
  const messageClass = 
  message.uid === auth.currentUser.uid
  ? `${style.sent}`
  : `${style.received}`

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <p className={style.name}>{message.name}</p>
        <p className={style.msg}>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
