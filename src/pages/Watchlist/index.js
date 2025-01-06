import React           from 'react';
// IMAGES
import KICHLER_CEILING from '../../assets/img/kichler_ceiling.jpeg';

function Watchlist() {
    return (
        <div className='watched-wrapper'>
            <div className='watched-wrapper-new'>
                <div className='watched-box'>
                    <h4>People Who Viewed Items You Browsed Also Viewed</h4>
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3 watched-grid hawk-recommendation-list">
                        <div className="hawk-recommendation-item" style={{minHeight:"250px"}}>
                            <a href='/'>
                                <img src={KICHLER_CEILING} alt='kichler ceiling' className='img-responsive center-block'/>
                            </a>
                            <div className='row gutter-top'>
                                <a href='./'>
                                    <span className='brand'>
                                        Kichler Lighting <br></br>
                                        <span className='model'>30032</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watchlist
