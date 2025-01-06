import React            from 'react';
// IMAGES
import KITCHAN_LIGHT    from '../../assets/img/vaulted-ceilings.jpg';
import MIDCENTURY_LIGHT from '../../assets/img/mid-century-modern-ideas.jpg';
import BATHROOM_LIGHT   from '../../assets/img/bathroom-lighting-guide.jpg';

function RecentPost() {
    return (
        <div className="row learning">
            <h2>Our Latest Posts</h2>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 gutter-bottom-large">
                <a href="/">
                    <img src={KITCHAN_LIGHT} alt='kitchan light' />
                </a>
                <p>Pro Tips</p>
                <h3>
                    <a href='/'>Kitchen Lighting for Vaulted Ceilings</a>
                </h3>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 gutter-bottom-large">
                <a href="/">
                    <img src={MIDCENTURY_LIGHT} alt='kitchan light' />
                </a>
                <p>Style Spotlight</p>
                <h3>
                    <a href='/'>Mid-Century Modern Lighting Ideas</a>
                </h3>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 gutter-bottom-large">
                <a href="/">
                    <img src={BATHROOM_LIGHT} alt='kitchan light' />
                </a>
                <p>Learn</p>
                <h3>
                    <a href='/'>Bathroom Vanity Lighting</a>
                </h3>
            </div>
        </div>
    )
}

export default RecentPost
