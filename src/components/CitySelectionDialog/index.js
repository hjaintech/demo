import React, { Component } from 'react';
import CityCard from '../CityCard';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import styles from './CitySelectionDialogCss';

const getCityListJSX = (cityList) => {
    return cityList.map(city => (
        <CityCard
            name={city.name}
            url={city.url}
        />
    ));
}
const CitySelectionDialog = () => {
    // State to maintain city list
    const [cityList, setCityList] = React.useState([]);

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/hjaintech/mockAPI/cities')
          .then(results => results.json())
          .then(data => {
            setCityList(data);
          });
      }, []);

    return (
        <Dialog onClose={() => { }} open>
            <DialogTitle>{'Please select a city'}</DialogTitle>
            <div style={styles.cityList}>
                {getCityListJSX(cityList)}
            </div>
        </Dialog>
    );


}

export default CitySelectionDialog;