import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Package from './Package';
import styles from './DetailsCss';

const Details = () => {
    return (
    <div>
        <Header />
        <Package />
        I am details page
        <Footer />
    </div>
    );
};

export default Details;