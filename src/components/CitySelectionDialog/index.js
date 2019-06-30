import React from 'react';
import CityCard from '../CityCard';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import styles from './CitySelectionDialogCss';

const CitySelectionDialog = ({open, onCitySelect}) => {
    // State to maintain city list
    const [cityList, setCityList] = React.useState([]);

    React.useEffect(() => {
        fetch('https://my-json-server.typicode.com/hjaintech/mockAPI/cities')
          .then(results => results.json())
          .then(data => {
            setCityList(data);
          });
      }, []);

    const getCityListJSX = () => {
        return cityList.map(city => (
            <CityCard
                city={city}
                key={city.cityId}
                onCitySelect={onCitySelect}
            />
        ));
    };
    return (
        <Dialog onClose={() => { }} open={open}>
            <DialogTitle>{'Please select a city'}</DialogTitle>
            <div style={styles.cityList}>
                {getCityListJSX()}
            </div>
        </Dialog>
    );


}

export default CitySelectionDialog;