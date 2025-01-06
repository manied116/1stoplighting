import React 		  from 'react';
// IMAGES
import CEILLING_LIGHT from '../../assets/img/ken_2203_vg_300.jpg';
import OUTDOOR_LIGHT  from '../../assets/img/946411bk_300.jpg';
import CEILLING_FAN   from '../../assets/img/gar56fb5_300.jpg';
import LED_MIRROR     from '../../assets/img/84165cg_300.jpg';
import WALL_LIGHT     from '../../assets/img/9_0901_1_322_300.jpg';
import BATH_LIGHTS    from '../../assets/img/45574bk_300.jpg';

const ShopByDepartment = () => {
    return (
		<div className="row cattable1" style={{marginBottom:"0px"}}>
			<h2>Shop by Department</h2>
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
				<a href="/"><h3>Ceilling Lights</h3></a>
				<a href="/">
					<img className="img-responsive" width={150} src={CEILLING_LIGHT} alt='' />
				</a>
			</div>
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
				<a href="/"><h3>Outdoor Lighting</h3></a>
				<a href="/">
					<img className="img-responsive" width={150} src={OUTDOOR_LIGHT} alt='' />
				</a>
			</div>
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
				<a href="/"><h3>Ceilling Fans</h3></a>
				<a href="/"><img className="img-responsive" width={150} src={CEILLING_FAN} alt='' /></a>
			</div>
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
				<a href="/"><h3>LED Mirrors</h3></a>
				<a href="/"><img className="img-responsive" width={150} src={LED_MIRROR} alt='' /></a>
			</div>
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
				<a href="/"><h3>Wall Lighting</h3></a>
				<a href="/"><img className="img-responsive" width={150} src={WALL_LIGHT} alt='' /></a>
			</div>
			<div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 gutter-bottom-large">
				<a href="/"><h3>Ball Lights</h3></a>
				<a href="/"><img className="img-responsive" width={150} src={BATH_LIGHTS} alt='' /></a>
			</div>
		</div>
    )
};

export default ShopByDepartment;
