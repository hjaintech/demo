import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './FooterCss';
import ArrowDownIcon from '../../assets/icons/down-arrow.png';


const Footer = () => {
    
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar style={styles.toolbar}>
                <span style={styles.footerText}>Copyright 2019 All Rights Reserved. All digital marketing services are managed by Harshit and Shubham</span>
            </Toolbar>
        </AppBar>
    )
};

export default Footer;