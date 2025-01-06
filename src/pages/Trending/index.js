import React             from 'react';
// IMAGES
import FARMHOUSE         from '../../assets/img/brinley-by-kichler.jpg';
import MIDCENTURY_MODERN from '../../assets/img/lazlo-by-lark.jpg';

function TrendingStyle() {
    return (
        <div className="row styles">
            <h2>Trending Styles</h2>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 gutter-bottom-large">
                <a href='/' className='img'>
                    <img src={FARMHOUSE} alt='farmhouse' className="img-responsive" width={785} height={400}/>
                </a>
                <div className="styledesc">
                    <h3>Farmhouse</h3>
                    <p>Feast your eyes on neutrals and vintage accents.</p>
                    <p><a href='/'>Shop Now</a></p>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 gutter-bottom-large">
                <a href='/'>
                    <img src={MIDCENTURY_MODERN} alt='mid_century_modern' className="img-responsive" width={785} height={400}/>
                </a>
                <div className="styledesc">
                    <h3>Mid-Century Modern</h3>
                    <p>Bold, functional, curvy, oh-so-chic.</p>
                    <p><a href='/'>Shop Now</a></p>
                </div>
            </div>
        </div>
    )
}

export default TrendingStyle
