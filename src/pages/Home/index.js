import React from 'react';
import CWI_Logo from '../../assets/img/CWI.png';
import LIVEX_Logo from '../../assets/img/Livex.png';
import PAGEONE_Logo from '../../assets/img/Pageone.png';
import PROGRESSLIGHT_Logo from '../../assets/img/Progress.png';
import SKYHERO from '../../assets/img/skyx-hero-100.jpg';
import FINALCHANDELIER from '../../assets/img/final_chandelier_feature_heroslider.webp';
import CEILLING_LIGHT from '../../assets/img/ken_2203_vg_300.jpg';
import OUTDOOR_LIGHT from '../../assets/img/946411bk_300.jpg';
import CEILLING_FAN from '../../assets/img/gar56fb5_300.jpg';
import LED_MIRROR from '../../assets/img/84165cg_300.jpg';
import WALL_LIGHT from '../../assets/img/9_0901_1_322_300.jpg';
import BATH_LIGHTS from '../../assets/img/45574bk_300.jpg';
import KITCHAN_LIGHT from '../../assets/img/vaulted-ceilings.jpg';
import MIDCENTURY_LIGHT from '../../assets/img/mid-century-modern-ideas.jpg';
import BATHROOM_LIGHT from '../../assets/img/bathroom-lighting-guide.jpg';
import FARMHOUSE from '../../assets/img/brinley-by-kichler.jpg';
import MIDCENTURY_MODERN from '../../assets/img/lazlo-by-lark.jpg';
import DINNING_LIGHT from '../../assets/img/1-aug-dining-room.jpg';
import ENTRY_FOYER from '../../assets/img/1-aug-entry-room.jpg';
import OUTDOOR_LIGHTS from '../../assets/img/1-aug-outdoor-room.jpg';
import KITCHEN_LIGHTS from '../../assets/img/1-aug-kitchen-room.jpg';
import BATHROOM_LIGHTS from '../../assets/img/1-aug-bath-room.jpg';
import LIVINGROOM_LIGHTS from '../../assets/img/1-aug-living-room.jpg';
import NEWARRIVALS_LIGHTS from '../../assets/img/april-hp-23_1stop-new-arrivals.jpg';
import CLOSEOUT_IMG from '../../assets/img/closeout-products-deep-discounts.jpg';
import YOTPO from '../../assets/img/yotpo-logo-v3.svg';
import SITEJABBER_LOGO from '../../assets/img/sitejabber_logo_light_163x32.1629291773.png';
import TRUSTPILOT from '../../assets/img/logo-white.svg';
import KICHLER_CEILING from '../../assets/img/kichler_ceiling.jpeg';
// import Gallery from '../Gallery';
// import Suggestion from '../Suggestion';

const Home = () => {
	return (
		<div className='content_wrapper'>
			<div className='container'>
				<div>
					<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 no-gutter'>
						<div id='homepage'>
							<div className='salesection' style={{marginBottom:"20px"}}>
								<h1 className='glow'>NEW YEAR NEW LIGHTING</h1>
								<h2 className='t2'>
									<span>Lighting Extravaganza - upto 40% OFF until 1/12</span> <br></br><br></br>
									<a className='shop_now glow' href='/'>SHOP NOW</a>
								</h2>
								<hr width="75%" color='#D43900' className='break'></hr>
								<div className='home_feature'>
									<div>
										<a href='/'>
											<img src={CWI_Logo} alt="CWI Logo"/>
										</a>
										<p>
											<a href="/">SHOP</a>
										</p>
									</div>
									<div>
										<a href='/'>
											<img src={LIVEX_Logo} alt="Livex logo"/>
										</a>
										<p><a href="/">SHOP</a></p>
									</div>
									<div>
										<a href='/'>
											<img src={PAGEONE_Logo} alt="pageone logo"/>
										</a>
										<p><a href="/">SHOP</a></p>
									</div>
									<div>
										<a href='/'>
											<img src={PROGRESSLIGHT_Logo} alt="Progress light"/>
										</a>
										<p><a href="/">SHOP</a></p>
									</div>
								</div>
							</div>
							<div className="row" style={{marginBottom:"20px"}}>
								<div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 hero-r gutter-bottom-large">
									<a href='/'>
										<img src={SKYHERO} alt='skyhero' />
									</a>
								</div>
								<div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 gutter-bottom-large">
									<a href="/">
										<img src={FINALCHANDELIER} alt='final chandelier' />
									</a>
								</div>
							</div>
							<div id="suggestions" className="row no-gutter" style={{marginBottom:"20px"}}>
								<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-gutter">
									<h3 style={{textAlign:"center"}}>People are Searching for...</h3>
									<div className='suggestions touchswipe'>
										<a href='/'>floor lamps</a>
										<a href='/'>wall sconces</a>
										<a href='/'>celest</a>
										<a href='/'>visual comfort</a>
										<a href='/'>uttermost decor</a>
										<a href='/'>linear chandelier</a>
										<a href='/'>table lamps</a>
										<a href='/'>wall art</a>
									</div>
								</div>
							</div>
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
							<div className="row learning">
							{/*, ,*/}
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
							<div className="row">
								<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 signup'>
									<h3>Stay in the loop - Get our latest articles, sales, and more!</h3>
									<p><a href="/">Join our Mailing List</a></p>
								</div>
							</div>
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
							<div className="homepage_reboot">
								<div id="socialfollow" className="row socialhero">
									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 no-gutter">
										<div className="socialtext">
											<h3>Are You Following Us?</h3>
											<p>Check out the latest home lighting and decor trends, new arrivals and much more! <strong>#1stoplove</strong></p>
											<a href='/' target='_blank' className="btn socialbtn">Instagram</a>
											<a href='/' target='_blank' className="btn socialbtn">Facebook</a>
											<a href='/' target='_blank' className="btn socialbtn">Pinterest</a>
										</div>
									</div>
								</div>
							</div>
						</div>
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
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home;