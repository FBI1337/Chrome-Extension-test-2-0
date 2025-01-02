import { CiPaperplane } from "react-icons/ci"; 
import React, { useEffect, useState } from 'react'
import Header from '../../../../../../Shared/Header/secondHeader';
import { HEADER_NAME } from '../../../../../../../constants';
import styles from './styles.module.css'
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface Message {
    sender: string;
    text: string;
  }

  interface DecodedToken {
    id: string;
    username: string;
  }

const Support:React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [isAuthor, setIsAuthorized] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {

    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthorized(true);
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setUserId(decoded.id);
      } catch (error) {
        console.error('Ошибка при декодировании токена:', error);
    }
  }
    
    const socket = new WebSocket('ws://localhost:5000');
    setWs(socket);

    socket.onmessage = (event) =>  {
      const newMessage = JSON.parse(event.data) as Message;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    return () => {
      socket.close();
      };
  }, []);

  const sendMessage = async () => {
    if (ws && input.trim() && userId) {
        try {

          const message: Message = { sender: userId, text: input };

          await axios.post('http://localhost:5000/api/messages', {
            userId,
            text: input
          });

          ws.send(JSON.stringify(message));
          setMessages((prevMessages) => [...prevMessages, message]);
          setInput("");

        } catch (error) {
          console.error("Ошибка при сохранении сообщения:", error);
        }

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
      type="text"
      placeholder={
        isAuthor
        ? 'Введите сообщение...'
        : 'Авторизуйтесь, чтобы отправить сообщение'
      }
      name="text"
      value={isAuthor ? input : ""}
      onChange={(e) => setInput(e.target.value)}
      onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      className={styles.bmw}
      />
      <div className={styles.buttonWrapper}>
      <button 
      onClick={sendMessage}
      disabled={!isAuthor}
      className={styles.button}
      >
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