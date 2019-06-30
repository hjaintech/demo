import React from 'react';
//import styles from './LandingCss';
import Header from '../../components/Header';
import Carousel from '../../components/Carousel';

import CitySelectionDialog from '../../components/CitySelectionDialog';
const Landing = () => {
  const [showCitySelector, setShowCitySelector] = React.useState(false);
  const [selectedCityObj, setSelectedCityObj] = React.useState({});
  return (
    <React.Fragment>
      <Header openCitySelector={() => {setShowCitySelector(true)}} selectedCity={selectedCityObj} />
      <Carousel
        urls={[
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_1920,/v1556780415/banner/oovabghxg54esiugrkne.webp",
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_1920,/v1556780471/banner/aahbivubzzplrfd5brwk.webp",
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_1920,/v1556780457/banner/zjpdjgvjmwfh6tdydteh.webp",
          "https://res.klook.com/image/upload/fl_lossy.progressive,q_85/c_fill,,w_1920,/v1556780466/banner/wg7sgxppdf51wfyprqtc.webp"
        ]}
      />
      {<CitySelectionDialog
        open={showCitySelector}
        onCitySelect={
          (obj) => {
            setSelectedCityObj(obj);
            setShowCitySelector(false);
          }
        }
      />}

    </React.Fragment>
  );
}

export default Landing;