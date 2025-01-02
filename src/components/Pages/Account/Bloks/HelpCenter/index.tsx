import React , {useEffect, useState}from 'react'
import styles from './styles.module.css'
import cn from 'classnames'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";
import { BsChatLeftDots } from "react-icons/bs";
import ReportProblem from './Blocks/ReportAProblem'
import SupportChat from './Blocks/SupportChat';
import Support from './Blocks/Support/idex'


const HelpCenter: React.FC = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const isShow = location.pathname === '/report';

  const isVisible = isAdmin
    ? location.pathname === '/supportchat'
    : location.pathname === '/support';

  const supportAndsupportChat = () => {
    if (isVisible) {
      navigate(-1);
    } else {
      navigate(isAdmin ? '/supportchat' : '/support');
    }
  };

  const ReportAProblem = () => {
    if (isShow) {
      navigate(-1);
    } else {  
      navigate('/report');
    } 
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const response = await axios.get('http://localhost:5000/api/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setIsAdmin(response.data.adminLevel === 1);
      } catch (error) {
        console.error('Ошибка получения данных пользователя:', error);
      }
    };

    fetchUserData();
  }, []);
  
  return (
    <div className={styles.text}>
        Help center

        <div onClick={supportAndsupportChat} className={styles.wrapper}>
        <div className={styles.support}>
            <div className={styles.logo}>
                <BsQuestionCircle />
            </div>
            <span>{isAdmin ? 'Support Chat' : 'Support'}</span>
        </div>
        </div>

        <div
        className={cn(styles.supportBlock, {
          [styles.show]: isVisible,
        })}
      >
        {isAdmin ? <SupportChat /> : <Support />}
      </div>

      <div onClick={ReportAProblem} className={styles.wrapper}>
        <div className={styles.reportproblem}>
          <div className={styles.logo}>
            <BsChatLeftDots />
          </div>
          <span>Report a problem</span>
        </div>
      </div>

      <div
      className={cn(styles.reportBlock, {
        [styles.show]: isShow,
      })}
      >
        <ReportProblem />
      </div>
    </div>
  )
}

export default HelpCenter
