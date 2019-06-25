
import React from 'react';
import NukaCarousel from 'nuka-carousel';

const Carousel = (props) => {
    const images = props.urls.map((url) => (<img alt="Banner" style={{height: 400, width: '100%'}} src={url}/>));
    return (
        <NukaCarousel
            autoplay
            width='100%'
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
            bullets
        >
            {images}
      </NukaCarousel>
    );
}

export default Carousel;