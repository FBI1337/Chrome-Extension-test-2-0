import React from 'react'
import Header from "../../../../../../Shared/Header/secondHeader";
import { HEADER_NAME } from "../../../../../../../constants";
import styles from './styles.module.css'
import ThemeProvider from '../../../../../../../layouts/ThemeLayout'




const Preference: React.FC = () => {

//   const { theme, toggleTheme } = useTheme();

//   const [isActive, setIsactive] = useState(false);
  
//   const onToggleActive = () => setIsactive(prev => !prev);
  
//   const handeleToggle = () => {
//     onToggleActive();
//     toggleTheme();
//     theme;
// };

  return (
    <>
    <ThemeProvider>
      <Header 
      name={HEADER_NAME}
      variant='Preference'
      />
      <div className={styles.wrapper}>
      <div className={styles.block}>
        <div>
          Dark Mode
        </div>
        <div className={styles.button}>
        
        </div>
      </div>
      </div>
    </ThemeProvider>
    </>
  )
}

export default Preference
