import React from 'react'
import styles from './styles.module.css';
import russia from '../Countres/russia.png';
import usa from '../Countres/usa.png';



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
    }
]



const Select:React.FC = () => {
  return (
    <div className={styles.selectWrapper}>
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
  )
}

export default Select
