import React from 'react'
import SKYHERO from '../../assets/img/skyx-hero-100.jpg';
import FINALCHANDELIER from '../../assets/img/final_chandelier_feature_heroslider.webp';

function Gallery() {
    return (
        <div className='gal_row' style={{marginBottom:"20px"}}>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hero-r">
                <a href='/'>
                    <img src={SKYHERO} alt='skyhero' />
                </a>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                <a href="/">
                    <img src={FINALCHANDELIER} alt='final chandelier' />
                </a>
            </div>
        </div>
    )
}

export default Gallery
