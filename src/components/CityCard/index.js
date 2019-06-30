import React from 'react';
import styles from './CityCardCss';

const CityCard = ({ name, url }) => {
    return (
        <div style={styles.cityWrapper}>
            <img style={styles.cityImage} src={url} alt={name}/>
            <span style={styles.cityName}>{name}</span>
        </div>
    );
}

export default CityCard;