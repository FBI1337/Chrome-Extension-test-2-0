import { useState } from 'react'
import Toggle from '../Toggle';
import Select from '../Select';
// import cn from 'classnames';
// import styles from './styles.module.css'


const Home : React.FC = () => {

  const [isActive, setIsactive] = useState(false);
  
  const onToggleActive = () => setIsactive(prev => !prev);


  return (
    <div>
      <Select />
      <Toggle isActive={isActive} onToggleActive={onToggleActive} />
    </div>
   )
}

export default Home
