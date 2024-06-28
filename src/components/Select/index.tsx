import React from 'react'
import cn from 'classnames';
import styles from './styles.module.css';
import russia from '../Countres/russia.png';
import usa from '../Countres/usa.png';
import germany from '../Countres/germany.png';
import brazil from '../Countres/brazil.png';    
import italy from '../Countres/italy.png';
import canada from '../Countres/canada.png';
import argentina from '../Countres/argentina.png';
import france from '../Countres/france.png';
import en from '../Countres/en.png';



const countersList = [
    {
        img: russia,
        countre: 'Russia',
        id: 0
    },

    {
        img: usa,
        countre: 'USA',
        id: 1
    },

    {
        img: germany,
        countre: 'Germany',
        id: 2
    },

    {
        img: brazil,
        countre: 'Brazil',
        id: 3
    },

    {
        img: italy,
        countre: 'Italy',
        id: 4
    },

    {
        img: canada,
        countre: 'Canada',
        id: 5
    },

    {
        img: argentina,
        countre: 'Argentina',
        id: 6
    },

    {
        img: france,
        countre: 'France',
        id: 7
    },

    {
        img: en,
        countre: 'United Kingdom',
        id: 8
    }
]

type IProps = {
    clickAtive: boolean
    isActive: boolean
    onSelectActive: () => void
}

const Select:React.FC<IProps> =({isActive, clickAtive, onSelectActive}) => {
  return (
    <div>
        <div className={cn(styles.her, {
            [styles.click]:clickAtive
        })}       
        onClick={onSelectActive}
        >Хер
        </div>
            <div
                className={cn(styles.selectWrapper, {
                    [styles.on]: isActive,
                    [styles.off]: !isActive,
                    [styles.click]:clickAtive
                    })}
                    onClick={onSelectActive}
                    >
                    {countersList.map(item => (
                        <div className={styles.optionWrapper}>
                            <div className={styles.iconWapper}>
                            <img src={item.img}/> 
                            </div>
                            <div className={styles.textWrapper}>
                                {item.countre}
                            </div>
                        </div>
                    ))}
            </div>
    </div>
  )
}

export default Select
