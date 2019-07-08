import React from 'react';
import styles from './TitleStripCss';

const TitleStrip = ({ text, element = 'h1' }) => (
    <React.Fragment>
        {getTitleElement(element, text)}
        <div style={styles.yellowLineBelowTitle} />
    </React.Fragment>
);

const getTitleElement = (element, text) => {
    // eslint-disable-next-line default-case
    switch (element) {
        case 'h1':
            return (<h1 style={styles.title}>{text}</h1>);
        case 'h2':
            return (<h2 style={styles.title}>{text}</h2>);
        case 'h3':
            return (<h3 style={styles.title}>{text}</h3>);
        case 'h4':
            return (<h4 style={styles.title}>{text}</h4>);
        case 'h5':
            return (<h5 style={styles.title}>{text}</h5>);
        case 'h6':
            return (<h6 style={styles.title}>{text}</h6>);
    }
}

export default TitleStrip;