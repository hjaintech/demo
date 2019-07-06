import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './HeaderCss';
import ArrowDownIcon from '../../assets/icons/down-arrow.png';


const Header = ({openCitySelector, selectedCity = {}}) => {
    
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar style={styles.toolbar}>
                <Typography variant="h6" color="inherit" noWrap>
                    Usher
                </Typography>
                {/* <div style={styles.currentLocContainer} onClick={() => {openCitySelector()}}>
                    {
                        selectedCity && selectedCity.name ? 
                            `Currently showing results for ${selectedCity.name}`:
                            `Select City`
                    }
                    
                    <img src={ArrowDownIcon} style={{marginLeft: 10, height: 15, width: 15, cursor: 'pointer'}} alt='down arrow'/>
                </div> */}
                
                <div style={styles.marginLeftAuto}>
                    <Button href="#" color="primary" variant="contained" style={styles.marginRight10}>
                        Signup
                    </Button>
                    <Button href="#" color="primary" variant="contained">
                        Login
                    </Button>
                </div>
                
            </Toolbar>
        </AppBar>
    )
};

export default Header;