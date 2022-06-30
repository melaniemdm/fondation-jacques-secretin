import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './style.scss';

function Banner(props){
  
    return (
      <div className="slide-container"> <div className="separator"></div>
        <Slide   duration={1000} transitionDuration={3000}  cssClass='slideShow'  arrows={false} slidesToShow={1}>
          {
            props.data.map((each, index) => <img key={index} style={{width: "100%"}} src={process.env.PUBLIC_URL +'/'+ each} alt="images Jacques Secrétin " className="slideShowImg"/>)
          } 
        </Slide>
     
      </div>
    )
}



export default Banner