import React              from 'react';
// IMAGES
import NEWARRIVALS_LIGHTS from '../../assets/img/april-hp-23_1stop-new-arrivals.jpg';
import CLOSEOUT_IMG       from '../../assets/img/closeout-products-deep-discounts.jpg';

function MoreWaysToShop() {
    return (
        <div className="row styles">
            <h2>More Ways to Shop</h2>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 gutter-bottom-large">
                <a href='/' className='img'>
                    <img src={NEWARRIVALS_LIGHTS} alt='new arrivals' className="img-responsive" width={785} height={400}/>
                </a>
                <div className="styledesc">
                    <h3>This Just In - New arrivals</h3>
                    <p>Shop for only the best and brightest.</p>
                    <p><a href='/'>Shop Now</a></p>
                </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 gutter-bottom-large">
                <a href='/'>
                    <img src={CLOSEOUT_IMG} alt='new arrivals' className="img-responsive" width={785} height={400}/>
                </a>
                <div className="styledesc">
                    <h3>Sale and Clearance Center</h3>
                    <p>You can have an eye for a bargain AND for style.</p>
                    <p><a href='/'>Shop Now</a></p>
                </div>
            </div>
        </div>
    )
}

export default MoreWaysToShop
