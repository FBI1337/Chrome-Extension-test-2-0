import React, { useState } from 'react'
import cn from 'classnames';
import styles from './styles.module.css';
import SelectItem from './Item';
import { useAppSelector } from '../../hooks';

const Select: React.FC = () => {


    const countriesList = useAppSelector(state => state.countries.countriesList)
    
    const [isShow, setIsShow] = useState(false)

    const savedCountryId = localStorage.getItem('selectedCountryId')

    const selectedCountry = savedCountryId 
    ? countriesList.find(el => el.id === Number(savedCountryId)) || countriesList[0] : countriesList[0];


    const [currentCountry, setCurrentCountry] = useState(selectedCountry)

    const filteredCountriesList = countriesList.filter(el => el.id !== currentCountry.id)

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