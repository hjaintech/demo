import React, { useState } from 'react';
import styles from './PackageCss';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TitleStrip from '../../../components/TitleStrip';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const Package = () => {
    const [expandedPackage, setExpandedPackage] = useState(0);
    const [showPackageDetails, setShowPackageDetails] = useState(false);
    const data = [1, 2, 3, 4, 5, 6];

    const onExpandCollapse = (index) => {
        if (expandedPackage === index) {
            setExpandedPackage(-1);
        } else {
            setExpandedPackage(index);
        }
    }

    const getPackageJSX = (index) => {
        return (
            <Paper>
                <span>package name 1</span>
                <Button variant="contained" onClick={() => { setShowPackageDetails(true) }}>
                    View Details
                </Button>
                <Button variant="contained" onClick={() => { alert('Buy') }}>
                    Buy
                </Button>
            </Paper>
        );
        // return (
        //     <ExpansionPanel expanded={expandedPackage === index} onChange={() => { onExpandCollapse(index) }}>
        //         <ExpansionPanelSummary
        //             expandIcon={<ExpandMoreIcon />}
        //         >
        //             Package name 1
        //         </ExpansionPanelSummary>
        //         <ExpansionPanelDetails style={styles.detailsContainer}>
        //             {getPackageDesc()}
        //         </ExpansionPanelDetails>
        //     </ExpansionPanel>
        // );
    }

    const getpackageDetailsJSX = () => (
        <Dialog style={styles.dialog} open={true} onClose={() => { }} >
            <AppBar position="static" color="default" elevation={0}>
                <Toolbar style={styles.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap>
                        Package Details
                </Typography>
                </Toolbar>
            </AppBar>
            {getPackageDesc()}
        </Dialog>
    )

    const getPackageDesc = () => {
        return (
            <div style={styles.pkgDescContainer}>
                <TitleStrip text='Package Details' element='h4' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

                <TitleStrip text='Inclusions & Exlusions' element='h4' />
                <ul style={styles.inclusionsList}>
                    <li style={styles.inclusionsListItem}>
                        <CheckIcon style={styles.tickIcon} />
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </li>
                    <li style={styles.inclusionsListItem}>
                        <CloseIcon style={styles.closeIcon} />
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                    </li>
                </ul>

                <TitleStrip text='Terms and Conditions' element='h4' />
                <ol>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                    <li>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </li>
                </ol>


                <TitleStrip text='Frequently Asked Questions' element='h4' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
        );
    }

    return (
        <div>
            {data.map((obj, index) => getPackageJSX(index))}
            {showPackageDetails && getpackageDetailsJSX()}
        </div>
    );
}

export default Package;