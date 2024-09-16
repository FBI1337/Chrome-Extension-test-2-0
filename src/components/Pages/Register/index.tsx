import React, { useState } from'react'
import styles from './style.module.css'
import Header from '../../Shared/modelHeader';
import { HEADER_NAME } from '../../../constants';



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

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({...errors, [e.target.name]: ''});
  };


  const handleSubmit = () => {
    const newErrors = { username: '', email: '', password: ''};

    if (!formData.username) {
      newErrors.username = 'Это поле обязательно!';
    }
    if (!formData.email) {
      newErrors.email = 'Это поле обязательно!';
    }
    if (!formData.password) {
      newErrors.password = 'Это поле обязательно!';
    }

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.email && !newErrors.password) {
      console.log('Данные формы: ', formData);
    }
  };

  
  return (
    <>
      <Header name={HEADER_NAME}/>
      <div className={styles.wrapper}>
        <div className={styles.uper}>Регистрация</div>

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
                className={errors.username ? styles.inputError : ''}
                />
                {errors.username && (
                  <div className={styles.error}>{errors.username}</div>
                )}
              </div>
          </div>

            <div className={styles.email}>

              <div className={styles.laber}>
                Электронная почта:
              </div>

              <div className={styles.inputer}>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className={errors.email ? styles.inputError : ''}
                />
                {errors.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
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
                className={errors.password ? styles.inputError : ''}
                />
                {errors.password && (
                  <div className={styles.error}>{errors.password}</div>
                )}
              </div>
            </div>
        </div>

        <div className={styles.buttoner}>
          <button type="button" onClick={handleSubmit} className={styles.downer}>
            Зарегистрироваться
          </button>
        </div>
      </div>
    </>
  );


};

export default Register
