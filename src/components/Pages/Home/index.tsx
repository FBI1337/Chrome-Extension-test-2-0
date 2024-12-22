import { useEffect, useState } from 'react'
import Toggle from '../../Shared/Toggle/on or off';
import Select from '../../Shared/Select';
// import cn from 'classnames';
import styles from './styles.module.css'


const Home : React.FC = () => {

  const [isActive, setIsactive] = useState(() => {
    const savedState = localStorage.getItem('isActive');
    return savedState ? JSON.parse(savedState) : false;
  });

  const [timer, setTimer] = useState<number>(() => {
    const savedTimer = localStorage.getItem('timer');
    return savedTimer ? JSON.parse(savedTimer) : 0;
  });

  const [speed, setSpeed] = useState<number>(0);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    localStorage.setItem('isActive', JSON.stringify(isActive));

    if (isActive) {
      const interval = setInterval(() => {
        setTimer((prev) => {
          const updatedTimer = prev + 1;
          localStorage.setItem('timer', JSON.stringify(updatedTimer));
          return updatedTimer;
        });
        setSpeed(Math.floor(Math.random() * 100)+ 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setTimer(0);
      setSpeed(0);
      localStorage.setItem('timer', JSON.stringify(0));
    }
  }, [isActive]);

  const onToggleActive = () => setIsactive((prev: boolean) => !prev);


  return (
    <div className={styles.wrapper}>
      <Select />
        <div className={styles.info}>
          <p>Timer: { isActive ? formatTime(timer) : '00:00:00'}</p>
          <p>Speed: { isActive ? `${speed} MB/s` : '-'}</p>
        </div>
      <Toggle isActive={isActive} onToggleActive={onToggleActive} />
    </div>
   )
}

export default Home
