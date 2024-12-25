import React , {useEffect, useState}from 'react'
import styles from './styles.module.css'
import ReportProblem from './Blocks/ReportAProblem'
import { BsQuestionCircle } from "react-icons/bs";
import SupportChat from './Blocks/SupportChat';
import Support from './Blocks/Support/idex'
import cn from 'classnames'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const HelpCenter: React.FC = () => {

  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const location = useLocation();

  const isVisible = isAdmin
    ? location.pathname === '/supportchat'
    : location.pathname === '/support';

  const onToggleVisbility = () => {
    if (isVisible) {
      navigate(-1);
    } else {
      navigate(isAdmin ? '/supportchat' : '/support');
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

        <div onClick={onToggleVisbility} className={styles.wrapper}>
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
      
        <ReportProblem/>
    </div>
  )
}

export default HelpCenter
