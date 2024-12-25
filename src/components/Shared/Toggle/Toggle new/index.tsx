import React, { useMemo } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import { useTheme } from '../../../../layouts/ThemeLayout'


const Toggle: React.FC = () => {

    const { theme, toggleTheme } = useTheme();

    const isThemeDark = theme === 'dark';


    const currentType = useMemo(() => (isThemeDark ? 'On' : 'Off'), [isThemeDark]);
    
    const handeleToggle = () => {
        toggleTheme();
    };
    return (
        <div className={styles.toggleWrapper}>
            <div 
                className={cn(styles.switch, {
                    [styles.on]: isThemeDark,
                    [styles.off]: !isThemeDark,
                })} 
                onClick={handeleToggle}
            >
                <div className={styles.toggle}>
                    <span 
                        className={cn(styles.text, {
                            [styles.textOn]: isThemeDark,
                            [styles.textOff]: !isThemeDark,
                        })} 
                    >
                    {currentType}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Toggle