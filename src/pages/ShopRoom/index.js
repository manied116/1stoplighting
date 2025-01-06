import React             from 'react';
// IMAGES
import DINNING_LIGHT     from '../../assets/img/1-aug-dining-room.jpg';
import ENTRY_FOYER       from '../../assets/img/1-aug-entry-room.jpg';
import OUTDOOR_LIGHTS    from '../../assets/img/1-aug-outdoor-room.jpg';
import KITCHEN_LIGHTS    from '../../assets/img/1-aug-kitchen-room.jpg';
import BATHROOM_LIGHTS   from '../../assets/img/1-aug-bath-room.jpg';
import LIVINGROOM_LIGHTS from '../../assets/img/1-aug-living-room.jpg';

function ShopByRoom() {
    return (
       <div className="row cattable2">
            <h2>Shop By Room</h2>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
                <a href='/'>
                    <h3>Dinning Room</h3>
                </a>
                <a href='/'>
                    <img src={DINNING_LIGHT} alt='dinning room' className="img-responsive" width={150} height={150}/>
                </a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
                <a href='/'>
                    <h3>Entry / Foyer</h3>
                </a>
                <a href='/'>
                    <img src={ENTRY_FOYER} alt='dinning room' className="img-responsive" width={150} height={150}/>
                </a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
                <a href='/'>
                    <h3>Outdoor</h3>
                </a>
                <a href='/'>
                    <img src={OUTDOOR_LIGHTS} alt='dinning room' className="img-responsive" width={150} height={150}/>
                </a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
                <a href='/'>
                    <h3>Kitchen</h3>
                </a>
                <a href='/'>
                    <img src={KITCHEN_LIGHTS} alt='dinning room' className="img-responsive" width={150} height={150}/>
                </a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
                <a href='/'>
                    <h3>Bathroom</h3>
                </a>
                <a href='/'>
                    <img src={BATHROOM_LIGHTS} alt='dinning room' className="img-responsive" width={150} height={150}/>
                </a>
            </div>
            <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
                <a href='/'>
                    <h3>Living Room</h3>
                </a>
                <a href='/'>
                    <img src={LIVINGROOM_LIGHTS} alt='dinning room' className="img-responsive" width={150} height={150}/>
                </a>
            </div>
        </div>
    )
}

export default ShopByRoom
