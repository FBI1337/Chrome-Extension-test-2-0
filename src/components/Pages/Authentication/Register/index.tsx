import React, { useState } from'react'
import styles from './style.module.css'
import Header from '../../../Shared/Header/modelHeader';
import { HEADER_NAME } from '../../../../constants';
import * as Yup from 'yup';
import Footer from '../../../Shared/Footer/modelFooter';
import ButtonSign from '../../../Shared/Button/SignIn';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



interface RegistrFromData { 
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}


const validation = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Имя должно содержать минимум 3 символа')
    .required('Имя пользователя обязательно'),
  email: Yup.string()
    .email('Некоретный e-mail адрес')
    .required('Электронная почта обязательна'),
  password: Yup.string()
    .min(6, 'Пароль должен содержать минимум 6 символов')
    .required('Пароль обязателен'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Пароли должны совпадать')
    .required('Повторите пароль')

});


const Register: React.FC = () => {

  const [formData, setFormData] = useState<RegistrFromData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<Partial<RegistrFromData>>({});
  const [isSwiped, setIsSwiped] = useState(false);
  const navigate = useNavigate();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = await validate();
    if (isValid) {
      try {
        const response = await axios.post(`http://localhost:5000/api/register`, {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        console.log('Регистрация успешна:', response.data);
        setIsSwiped(true);
        navigate('/login');
      } catch (error) {
        if (axios.isAxiosError(error)){
          console.error('Ошибка регистрации:', error.response?.data?.message || error.message);
        } else {
          console.error('Неизвестная ошибка:', error);
        }
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  return (
    <>
      <Header name={HEADER_NAME}/>
      <div className={styles.wrapper}>

        <div className={`${styles.forma} ${isSwiped ? styles.swipeRight : ''}`}>


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

            <div className={styles.cpassword}>
              <div className={styles.inputer}>
                <input 
                type="password"
                placeholder="Repeat the password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={errors.confirmPassword ? styles.inputError : ''}
                 />
                 {errors.confirmPassword && (
                  <div className={styles.error}>{errors.confirmPassword}</div>
                 )}
              </div>
            </div>
        </div>

        <div className={styles.buttoner}>
          <ButtonSign
          handleSubmit={handleSubmit}
          />
        </div>
      </div>
      <Footer />
    </>
  );


};

export default Register
