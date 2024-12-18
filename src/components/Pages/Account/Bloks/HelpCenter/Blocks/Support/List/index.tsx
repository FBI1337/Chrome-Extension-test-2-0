import React, { useEffect, useState } from 'react'
import Header from '../../../../../../../Shared/Header/secondHeader';
import { HEADER_NAME } from '../../../../../../../../constants';
import styles from './styles.module.css'

interface Message {
  sender: string;
  text: string;
}


const SupportList:React.FC = () => {


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
    <Header
    name={HEADER_NAME}
    variant='Support'
    />
    <div className={styles.wrapper}>
      <div className={styles.dont}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.lol}>
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <input
      type='text'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      placeholder="Введите сообщение...."
      className={styles.bmw}
      />
      <button onClick={sendMessage} className={styles.button}>
        Отправить
      </button>
    </div>
    </>
  )
}

export default SupportList
