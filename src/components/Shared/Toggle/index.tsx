import React, { useMemo } from 'react'
import cn from 'classnames'
import styles from './styles.module.css'

type IProps = {
    isActive: boolean
    onToggleActive: () => void
}

const Toggle: React.FC<IProps> = ({ isActive, onToggleActive }) => {

    const currentType = useMemo(() => (
      isActive ? 'On' : 'Off'
    ), [isActive])

    return (
        <div className={styles.toggleWrapper}>
            <div 
                className={cn(styles.switch, {
                    [styles.on]: isActive,
                    [styles.off]: !isActive,
                })} 
                onClick={onToggleActive}
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