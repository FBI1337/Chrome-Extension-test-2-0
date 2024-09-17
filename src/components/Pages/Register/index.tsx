import React, { useState } from'react'
import styles from './style.module.css'
import Header from '../../Shared/modelHeader';
import { HEADER_NAME } from '../../../constants';
import * as Yup from 'yup';



interface RegistrFromData { 
  username: string;
  email: string;
  password: string; 
}

const validation = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Имя должно содержать минимум 3 символа')
    .required('Имя пользователя обязательно'),
  email: Yup.string()
    .email('Некоретный e-mail адрес')
    .required('Электронная почта обязательна'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Пароль обязателен')

});

const Register: React.FC = () => {

  const [formData, setFormData] = useState<RegistrFromData>({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<RegistrFromData>>({});

  const validate = async () => {
    try {
      await validation.validate(formData, {abortEarly: false});
      setErrors({});
      return true;
    } catch (err: unknown) {
       if (err instanceof Yup.ValidationError) {
        const newErrors: Partial<RegistrFromData> = {};

        err.inner.forEach((validationError: Yup.ValidationError) => {
          newErrors[validationError.path as keyof RegistrFromData] = validationError.message;
        });

        setErrors(newErrors);
       } else {
        console.error('Какая-то ошибка: ', err)
       }
       return false;
    }
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      console.log('Отправка данных: ', formData);
    }
  };

  
  return (
    <>
      <Header name={HEADER_NAME}/>
      <div className={styles.wrapper}>

        <div className={styles.forma}>


          <div className={styles.username}>
              <div className={styles.inputer}>
                <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className={errors.username ? styles.inputError : ''}
                />
                {errors.username && (
                  <div className={styles.error}>{errors.username}</div>
                )}
              </div>
          </div>

            <div className={styles.email}>
              <div className={styles.inputer}>
                <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? styles.inputError : ''}
                />
                {errors.email && (
                  <div className={styles.error}>{errors.email}</div>
                )}
              </div>
            </div>

            <div className={styles.password}>
              <div className={styles.inputer}>
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
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
            Sign In
          </button>
        </div>
      </div>
    </>
  );


};

export default Register
