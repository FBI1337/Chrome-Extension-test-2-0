import axios from 'axios';
import React, { useEffect } from 'react'
import styles from './styles.module.css'

interface User {
  id: string;
  username: string;
}

interface Message {
  sender: string;
  text: string;
}

const SupportChat: React.FC = () => {

  const [users, setUsers] = React.useState<User[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  const [messages, setMessages] = React.useState<Message[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/support/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error("Ошибка при загрузке пользователей: ", error);
    }
  };

  const loadMessages = async (userId: string) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/support/messages/${userId}`
      );
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Ошибка при загрузке сообщений: ", error);
    }
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    loadMessages(user.id);
  };

    
  return (
    <div className={styles.wrapper}>
      <div className={styles.userList}>
        <h2>Пользователи</h2>
        {users.map((user) => (
          <div
          key={user.id}
          className={styles.user}
          onClick={() => handleUserClick(user)}
          >
            {user.username}
          </div>
        ))}
      </div>
      <div className={styles.chat}>
        {selectedUser ? (
          <>
          <h2>Чат с {selectedUser.username}</h2>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div key={index} className={styles.message}>
                <strong>{msg.sender}:</strong> {msg.text}
              </div>
            ))}
          </div>
          </>
        ) : (

          <h2>Выберите пользователя</h2>

        )}
      </div>
    </div>
  )
}

export default SupportChat
