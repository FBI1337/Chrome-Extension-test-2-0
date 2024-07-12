import { useState } from 'react'
import Toggle from '../../Shared/Toggle';
import Select from '../../Shared/Select';
// import cn from 'classnames';
import styles from './styles.module.css'


const Home : React.FC = () => {

  const [isActive, setIsactive] = useState(false);
  
  const onToggleActive = () => setIsactive(prev => !prev);


  return (
    <div className={styles.wrapper}>
      <Select />
      <Toggle isActive={isActive} onToggleActive={onToggleActive} />
    </div>
   )
}

export default Home
