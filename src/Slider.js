import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item';
import './Slider.css'
import Image  from './ImageUrls'

const breakPoints = [
    { width: 0, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },

];

export default function Slider() {
    return (
        <dabba>
        <h1 style={{ textAlign: 'center'}}>Carousel for Image</h1>
            <div className='App'>
                <Carousel autoPlaySpeed={2000} transitionMs={500} itemsToShow={1}>
                {Image.map((url)=>{
                    return <Item><img src={url} alt="img" className='img-class' /></Item>
                })}
                    
                </Carousel>
            </div>
        </dabba>
    );
};
