import React from 'react';
//import styles from './LandingCss';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';
import CitySelection from '../../components/CitySelection';
import AboutUs from './AboutUs';
import WhyUs from './WhyUs';
import ServicesWeOffer from './ServicesWeOffer';
import Footer from '../../components/Footer';
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
    </React.Fragment>
  );
}

export default Landing;