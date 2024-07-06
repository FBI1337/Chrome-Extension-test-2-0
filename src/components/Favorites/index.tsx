import { useState } from 'react'
import Toggle from '../Toggle';
import Select from '../Select';
import styles from './styles.module.css'

const Favorites: React.FC = () => {

    const [isActive, setIsactive] = useState(false);
  
    const onToggleActive = () => setIsactive(prev => !prev);



  return (
    <div className={styles.wrapper}>
      <Select />
      <Toggle isActive={isActive} onToggleActive={onToggleActive} />
    </div>
  )
}

export default Favorites
