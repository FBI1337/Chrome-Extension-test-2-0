import React, { useMemo } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'
import { useTheme } from '../../../../layouts/ThemeLayout'

type IProps = {
    isActive: boolean
    onToggleActive: () => void
    handeleToggle: () => void
}

const Toggle: React.FC<IProps> = ({ isActive, onToggleActive }) => {

    const { theme, toggleTheme } = useTheme();

    const currentType = useMemo(() => (
      isActive ? 'On' : 'Off'
    ), [isActive])
    
    const handeleToggle = () => {
        onToggleActive();
        toggleTheme();
        theme;
    };
    return (
        <div className={styles.toggleWrapper}>
            <div 
                className={cn(styles.switch, {
                    [styles.on]: isActive,
                    [styles.off]: !isActive,
                })} 
                onClick={handeleToggle}
            >
                <div className={styles.toggle}>
                    <span 
                        className={cn(styles.text, {
                            [styles.textOn]: isActive,
                            [styles.textOff]: !isActive,
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