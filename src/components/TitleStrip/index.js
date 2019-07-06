import React from 'react';
import styles from './TitleStripCss';

const TitleStrip = ({text}) => (
    <React.Fragment>
        <h1 style={styles.title}>{text}</h1>
        <div style={styles.yellowLineBelowTitle}/>
    </React.Fragment>
);

export default TitleStrip;