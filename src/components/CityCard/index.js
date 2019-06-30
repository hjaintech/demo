import React from 'react';
import styles from './CityCardCss';

const CityCard = ({city, onCitySelect}) => {
    return (
        <div style={styles.cityWrapper} onClick={() => onCitySelect(city)}>
            <img style={styles.cityImage} src={city.url} alt={city.name}/>
            <span style={styles.cityName}>{city.name}</span>
        </div>
    );
}

export default CityCard;