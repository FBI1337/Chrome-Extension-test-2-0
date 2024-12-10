import React, {useState} from 'react'
import Header from "../../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../../constants";
<<<<<<< HEAD
import styles from './styles.module.css'
=======
import styles from "./styles.module.css"
import Toggle from '../../../../../../../Shared/Toggle/Toggle new';
import { useTheme } from './../../../../../../../../layouts/ThemeLayout'
>>>>>>> a67ca81c74ed27f08cfb1f3376eb07cf506719b5

type IProps = {
    onToggleIsShow: () => void
    onCloseExstention: () => void
}



const PreferenceList: React.FC<IProps> = ({onToggleIsShow, onCloseExstention}) => {
  
  const { theme, toggleTheme } = useTheme();

  const [isActive, setIsactive] = useState(false);
  
  const onToggleActive = () => setIsactive(prev => !prev);

  const handeleToggle = () => {
    onToggleActive();
    toggleTheme();
    theme;
};

  return (
    <>
    <Header 
    name={HEADER_NAME}
    onCloseExstention={onCloseExstention}
    onToggleIsShow={onToggleIsShow}
    variant='Preference'
    />
    <div className={styles.wrapper}>
<<<<<<< HEAD
        
=======
      <div>

      </div>
      <div className={styles.block}>
        <div>
          Dark Mode
        </div>
        <div className={styles.button}>
        <Toggle isActive={isActive} onToggleActive={onToggleActive} handeleToggle={handeleToggle}/>
        </div>
      </div>
>>>>>>> a67ca81c74ed27f08cfb1f3376eb07cf506719b5
    </div>
    </>
  )
}

export default PreferenceList
