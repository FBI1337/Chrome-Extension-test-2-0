import React, { useState } from'react'
import styles from './style.module.css'



interface RegistrFromData { 
  username: string;
  email: string;
  password: string; 
}

const Register: React.FC = () => {

  const [formData, setFormData] = useState<RegistrFromData>({
    username: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = () => {
    const {username, email, password} = formData;

    if (!username || !email || !password) {
      setErrorMessage('Все поля должны быть заполнены');
      setSuccessMessage(null);
      return;
    }

    setErrorMessage(null);
    console.log('Отправка даных:', formData);

    setSuccessMessage('Регистрация прошла успешно!');
  };

  
  return (
    <div className={styles.wrapper}>
      Регистрация

      <div className={styles.forma}>


        <div className={styles.username}>
            <div className={styles.laber}>
              Имя пользователя:
            </div>
            <div className={styles.inputer}>
              <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              />
            </div>
        </div>

          <div className={styles.email}>

            <div className={styles.laber}>
              Эл.почта:
            </div>

            <div className={styles.inputer}>
              <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              />
            </div>
          </div>

          <div className={styles.password}>

            <div className={styles.laber}>
              Пароль:
            </div>

            <div className={styles.inputer}>
              <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              />
            </div>
          </div>
        

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {successMessage && <p className={styles.message}>{successMessage}</p>}
      </div>

      <div className={styles.buttoner}>
        <button type="button" onClick={handleSubmit}>
          Зарегистрироваться
        </button>
      </div>

    </div>

  );


};

export default Register
