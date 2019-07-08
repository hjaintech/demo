import React from 'react';
import styles from './ServicesWeOfferCss';
import TitleStrip from '../../../components/TitleStrip';
import Paper from '@material-ui/core/Paper';

const CONTENT = [
    {
        imgSource: 'http://theme.drivingschoolwebsite.org/wp-content/uploads/2017/04/1.jpg',
        title: 'Lorem ipsum dolor',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        imgSource: 'http://theme.drivingschoolwebsite.org/wp-content/uploads/2017/04/2.jpg',
        title: 'Lorem ipsum dolor',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },{
        imgSource: 'http://theme.drivingschoolwebsite.org/wp-content/uploads/2017/04/3.jpg',
        title: 'Lorem ipsum dolor',
        desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
];

const ServicesWeOffer = () => {
    return (
        <div style={styles.mainContainer}>
        <TitleStrip text='Services We Offer'/>
        <div style={styles.servicesWeOfferContent}>
            {CONTENT.map((obj) => (
                <Paper style={styles.paper}>
                    <img
                        src={obj.imgSource}
                        style={styles.image}
                        alt="About us"
                    />
                    <div style={styles.content}>
                        <span style={styles.title}>{obj.title}</span>
                        <p style={styles.desc}>{obj.desc}</p>
                    </div>
                </Paper>
            ))}
        </div>
        
      </div>
    );
}

export default ServicesWeOffer;