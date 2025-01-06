import React           from 'react';
//IMAGES
import YOTPO           from '../../assets/img/yotpo-logo-v3.svg';
import SITEJABBER_LOGO from '../../assets/img/sitejabber_logo_light_163x32.1629291773.png';
import TRUSTPILOT      from '../../assets/img/logo-white.svg';

function Customers() {
    return (
        <React.Fragment>
            <div className="row no-gutter" style={{marginBottom:"0px"}}>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-gutter">
                    <h2 className="gutter-bottom">Trusted by Thousands</h2>
                </div>
            </div>
            <div className="row no-gutter" >
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center" style={{padding:"20px"}}>
                    <div style={{padding:"10px"}}>
                        <div className="partners border-bottom gutter-padding-bottom-large gutter-bottom-large gutter-padding-top-large">
                            <img src={YOTPO} alt='yotpo' />
                        </div>
                        <div className="border-bottom gutter-padding-bottom-large gutter-bottom-large"></div>
                        <div>
                            <h4>from 11,200 customers</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center" style={{padding:"20px"}}>
                    <div style={{padding:"10px"}}>
                        <div className="partners border-bottom gutter-padding-bottom-large gutter-bottom-large gutter-padding-top-large">
                            <img src={SITEJABBER_LOGO} alt='sitejabber' />
                        </div>
                        <div className="border-bottom gutter-padding-bottom-large gutter-bottom-large"></div>
                        <div>
                            <h4>from 8,478 customers</h4>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center" style={{padding:"20px"}}>
                    <div style={{padding:"10px"}}>
                        <div className="partners border-bottom gutter-padding-bottom-large gutter-bottom-large gutter-padding-top-large">
                            <img src={TRUSTPILOT} alt='trustpilot' width="40%"/>
                        </div>
                        <div className="border-bottom gutter-padding-bottom-large gutter-bottom-large"></div>
                        <div>
                            <h4>from 3,178 customers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Customers
