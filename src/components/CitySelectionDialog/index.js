import React, { Component } from 'react';
import CityCard from '../CityCard';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import styles from './CitySelectionDialogCss';

const _cityList = [{
    name: 'Bangalore',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/shutterstock_bangalore.jpg'
}, {
    name: 'Gurgaon',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/gurgaon city.jpg'
}, {
    name: 'Pune',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/shutterstock_pune.jpg'
}, {
    name: 'Noida',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/noida.jpg'
}, {
    name: 'Mumbai',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/mumbai.jpg'
}, {
    name: 'Delhi',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/delhi.jpg'
}, {
    name: 'Hyderabad',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/hyderabad.jpg'
}, {
    name: 'Chennai',
    url: ' https://images.oyoroomscdn.com/uploads/city_image/small/chennai.jpg'
}, {
    name: 'Kolkata',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/kolkata.jpg'
}, {
    name: 'Ghaziabad',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/ghaziabad_new.jpg'
}, {
    name: 'Greater Noida',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/greater_noida_new.jpg'
}
];

const getCityListJSX = (cityList) => {
    return cityList.map(city => (
        <CityCard
            name={city.name}
            url={city.url}
        />
    ));
}
const CitySelectionDialog = () => {
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