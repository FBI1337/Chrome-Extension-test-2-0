import { CiPaperplane } from "react-icons/ci"; 
import React, { useEffect, useState } from 'react'
import Header from '../../../../../../Shared/Header/secondHeader';
import { HEADER_NAME } from '../../../../../../../constants';
import styles from './styles.module.css'

interface Message {
    sender: string;
    text: string;
  }

const Support:React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:5000');
    setWs(socket);

    socket.onmessage = (event) =>  {
      const newMessage = JSON.parse(event.data) as Message;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    socket.onclose = () => {
      console.log('WebSocket соединение закрыто');
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && input.trim()) {
      const message: Message = { sender: 'user', text: input}
      ws.send(JSON.stringify(message));
      setMessages((prevMessages) => [...prevMessages, message]);
      setInput('');
    }
  };

  return (
    <>
    <div>
      <Header
        name={HEADER_NAME}
        variant='Support'
      />
      <div className={styles.wrapper}>
      <div className={styles.dont}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.sendMessage}>
      <input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      placeholder="Введите сообщение...."
      className={styles.bmw}
      />
      <div className={styles.buttonWrapper}>
      <button onClick={sendMessage} className={styles.button}>
        <div className={styles.logo}>
        <CiPaperplane />
        </div>
      </button>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Support