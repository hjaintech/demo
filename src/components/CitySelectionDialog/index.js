import React, {Component} from 'react';
import CityCard from '../CityCard';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import styles from './CitySelectionDialogCss';

const _cityList = [{
    name: 'Bangalore',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/shutterstock_bangalore.jpg'
  },{
    name: 'Gurgaon',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/gurgaon city.jpg'
  },{
    name: 'Pune',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/shutterstock_pune.jpg'
  },{
    name: 'Noida',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/noida.jpg'
  },{
    name: 'Mumbai',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/mumbai.jpg'
  },{
    name: 'Delhi',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/delhi.jpg'
  },{
    name: 'Hyderabad',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/hyderabad.jpg'
  },{
    name: 'Chennai',
    url: ' https://images.oyoroomscdn.com/uploads/city_image/small/chennai.jpg'
  },{
    name: 'Kolkata',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/kolkata.jpg'
  },{
    name: 'Ghaziabad',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/ghaziabad_new.jpg'
  },{
    name: 'Greater Noida',
    url: 'https://images.oyoroomscdn.com/uploads/city_image/small/greater_noida_new.jpg'
  }
  ];

class CitySelectionDialog extends Component {
    
    
    render() {
        return (
          <Dialog onClose={() => { }} open>
            <DialogTitle>Select City</DialogTitle>
            <div style={styles.cityList}>
              {this.getCityList()}
            </div>
          </Dialog>
        );
      }
      
      getCityList = () => {
        return _cityList.map(city => (
          <CityCard
              name={city.name}
              url={city.url}
            />
        ));
      }
}

export default CitySelectionDialog;