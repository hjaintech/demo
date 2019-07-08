import React from 'react';
import styles from './WhyUsCss';
import TitleStrip from '../../../components/TitleStrip';
const CONTENT =
    [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    ];

const WhyUs = () => {
    return (
        <div style={styles.mainContainer}>
            <TitleStrip text='Why us' />
            <div style={styles.aboutUsContent}>
                <ul style={styles.list}>
                    {CONTENT.map((text) => (
                        <li style={styles.listItem}>
                            <img
                                style={styles.tickIcon}
                                src="https://cdn4.iconfinder.com/data/icons/web-app-media-contact-and-essential-simple-fill/512/Accept_Check_Ok-512.png"
                                alt="tick icon"
                            />
                            <p style={styles.aboutUsText}>{text}</p>
                        </li>
                    ))}

                </ul>
            </div>

        </div>
    );
}

export default WhyUs;