import React, { useState } from 'react'
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
import SelectItem from './Item';

const countersList = [
    {
        img: russia,
        country: 'Russia',
        id: 0
    },

    {
        img: usa,
        country: 'USA',
        id: 1
    },

    {
        img: germany,
        country: 'Germany',
        id: 2
    },

    {
        img: brazil,
        country: 'Brazil',
        id: 3
    },

    {
        img: italy,
        country: 'Italy',
        id: 4
    },

    {
        img: canada,
        country: 'Canada',
        id: 5
    },

    {
        img: argentina,
        country: 'Argentina',
        id: 6
    },

    {
        img: france,
        country: 'France',
        id: 7
    },

    {
        img: en,
        country: 'United Kingdom',
        id: 8
    }
]

// type IProps = {
//     clickAtive: boolean
//     isActive: boolean
//     onSelectActive: () => void
// }

// const Select:React.FC<IProps> =({isActive, clickAtive, onSelectActive}) => {
//   return (
//     <div>
//         <div 
//             className={cn(styles.her, {
//                 [styles.click]:clickAtive
//             })}       
//             onClick={onSelectActive}
//         >
//             Хер
//         </div>
//         <div
//             className={cn(styles.selectWrapper, {
//                 [styles.on]: isActive,
//                 [styles.off]: !isActive,
//                 [styles.click]:clickAtive
//             })}
//             onClick={onSelectActive}
//         >
//             {countersList.map(item => (
//                 <div className={styles.optionWrapper}>
//                     <div className={styles.iconWapper}>
//                         <img src={item.img}/> 
//                     </div>
//                     <div className={styles.textWrapper}>
//                         {item.country}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Select


const Select: React.FC = () => {

    const [isShow, setIsShow] = useState(false)

    const savedCountryId = localStorage.getItem('selectedCountryId')

    const selectedCountry = savedCountryId 
    ? countersList.find(el => el.id === Number(savedCountryId)) || countersList[0] : countersList[0];


    const [currentCountry, setCurrentCountry] = useState(selectedCountry)

    const filteredCountriesList = countersList.filter(el => el.id !== currentCountry.id)

    const onSelectCurrentCountry = (id: number) => {
        const newCountry = filteredCountriesList.find(el => el.id === id)

        if (!newCountry) return

        setCurrentCountry(newCountry)
        localStorage.setItem('selectedCountryId', newCountry.id.toString());
    }

    const onToggleIsShow = () => setIsShow(prev => !prev) 

    const onSelect = (id: number) => {
        onSelectCurrentCountry(id)
        onToggleIsShow()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.diveWrapper}>
                Choose location
            </div>
            <>
                <SelectItem 
                    isCurrent
                    id={currentCountry.id}
                    text={currentCountry.country}
                    img={currentCountry.img}
                    onClick={onToggleIsShow}
                />
                <div className={cn(styles.listWrapper, {
                    [styles.showListWrapper]: isShow
                })}>
                    {filteredCountriesList.map(el => (
                       <SelectItem 
                            key={el.id}
                            id={el.id}
                            text={el.country}
                            img={el.img}
                            onClick={onSelect}
                       />
                    ))}
                </div>
            </>
        </div>
    )
}

export default Select