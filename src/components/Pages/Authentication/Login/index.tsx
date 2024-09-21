import React, { useState } from 'react'
import styles from './style.module.css'
import Header from '../../../Shared/modelHeader'
import { HEADER_NAME } from '../../../../constants'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Footer from '../../../Shared/modelFooter'



interface LoginFormData {
  login: string;
  password: string;
}

const validation = Yup.object().shape({
  login: Yup.string()
    .required('Enter the Username/E-mail'),
  password: Yup.string()
    .required('Enter the password')
});

const Login: React.FC = () => {


  const [formData, setFormData] = useState<LoginFormData>({
    login: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [loginError, setLoginError] = useState<string | null>(null);
  const [passwordError, setPasswordErrors] = useState<string | null>(null);
  const [isSwiped, setIsSwiped] = useState(false);

  const navigate = useNavigate();
 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setLoginError(null);
    setPasswordErrors(null);
  };

  const validate = async () => {
    try {
      await validation.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (err: unknown) {
      if (err instanceof Yup.ValidationError) {
        const newErrors: Partial<LoginFormData> = {};
        err.inner.forEach((validationError) => {
          newErrors[validationError.path as keyof LoginFormData] = validationError.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async () => {
    const isValid = await validate();
    if (!isValid) return;

    const savedUsername = localStorage.getItem('username');
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    let isLoginValid = false;
    if (formData.login === savedUsername || formData.login === savedEmail) {
      isLoginValid = true;
    } else {
      setLoginError('Неправильный Логин');
    }

    if (formData.password === savedPassword) {
      if (isLoginValid) {
        console.log('Успешный вход');
        localStorage.setItem('isAuthenticated', 'true');
        window.close();
      }
    } else {
      setPasswordErrors('Неправильный пароль');
    }
  };

  const handeleSwipeToRegister = () => {
    setIsSwiped(true);

    setTimeout(() => {
      navigate('/register');
    }, 300)
  };




  return (
    <>
    <Header name={HEADER_NAME}/>
    <div className={styles.wrapper}>
        <div className={`${styles.forma} ${isSwiped ? styles.swipeLeft : ''}`}>

            <div className={styles.login}>
                <div className={styles.inputer}>
                    <input 
                    type="login" 
                    placeholder="Username/E-mail"
                    name="login"
                    value={formData.login}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.login || loginError ? styles.inputError : ''}`}
                    />
                    {errors.login && <div className={styles.error}>{errors.login}</div>}
                    {loginError && <div className={styles.error}>{loginError}</div>}
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
                    className={`${styles.input} ${errors.password || passwordError ? styles.inputError : ''}`}
                    />
                    {errors.password && <div className={styles.error}>{errors.password}</div>}
                    {passwordError && <div className={styles.error}>{passwordError}</div>}
                </div>
            </div>

            <div className={styles.buttoner}>
              <button type="button" onClick={handleSubmit} className={styles.downer}>
                Login
              </button>
            </div>
        </div>
        <div className={styles.registerLink}>
          <div className={styles.texter}>
          Еще нет аккаунта?
          </div>
          <div className={styles.linker}>
          <div onClick={handeleSwipeToRegister} className={styles.swipeLink}>
            Зарегистрироватся!
          </div>
          </div>
        </div>
    </div>
    <Footer />
    </>
  );
};

export default Login
