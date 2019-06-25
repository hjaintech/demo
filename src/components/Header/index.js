import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './HeaderCss';


const Header = () => {
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar style={styles.toolbar}>
                <Typography variant="h6" color="inherit" noWrap>
                    Usher
                </Typography>
                <Button href="#" color="primary" variant="outlined" style={styles.loginBtn}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;