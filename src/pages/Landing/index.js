import React from 'react';
//import styles from './LandingCss';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import CitySelection from '../../components/CitySelection';
import AboutUs from '../../components/AboutUs';
import WhyUs from '../../components/WhyUs';
import ServicesWeOffer from '../../components/ServicesWeOffer';
import Footer from '../../components/Footer';

import CitySelectionDialog from '../../components/CitySelectionDialog';
const Landing = () => {
  const [banners, setBanners] = React.useState([]);
  const [cities, setCities] = React.useState([]);


  const setHomePageData = (data) => {
    setBanners(data.banners);
    setCities(data.cities);
  };

  React.useEffect(() => {
    fetch('https://my-json-server.typicode.com/hjaintech/mockAPI/homepage')
      .then(results => results.json())
      .then(homepageData => {
        setHomePageData(homepageData);
      });
  }, []);

  return (
    <React.Fragment>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {/* <Header openCitySelector={() => {setShowCitySelector(true)}} selectedCity={selectedCityObj} /> */}
      <Header/>
      <Carousel
        data={banners}
      />
      <CitySelection
        data={cities}
        onCitySelect={(obj) => {alert(JSON.stringify(obj))}}  
      />
      <AboutUs />
      <WhyUs/>
      <ServicesWeOffer />
      <Footer/>
      {/* {<CitySelectionDialog
        open={showCitySelector}
        onCitySelect={
          (obj) => {
            setSelectedCityObj(obj);
            setShowCitySelector(false);
          }
        }
      />} */}

    </React.Fragment>
  );
}

export default Landing;