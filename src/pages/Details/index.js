import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Package from './Package';
import styles from './DetailsCss';

const Details = () => {
    return (
    <div>
        <Header />
        <div style={styles.packageContainer}>
            <Package />
        </div>
        
        I am details page
        <Footer />
    </div>
    );
};

export default Details;