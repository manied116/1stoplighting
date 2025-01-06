import React from 'react';
// IMAGES
import CWI_Logo           from '../../assets/img/CWI.png';
import LIVEX_Logo         from '../../assets/img/Livex.png';
import PAGEONE_Logo       from '../../assets/img/Pageone.png';
import PROGRESSLIGHT_Logo from '../../assets/img/Progress.png';
import SKYHERO            from '../../assets/img/skyx-hero-100.jpg';
import FINALCHANDELIER    from '../../assets/img/final_chandelier_feature_heroslider.webp';
// COMPONENTS
import Suggestion       from '../Suggestion';
import ShopByDepartment from '../ShopDepartment';
import RecentPost       from '../Posts';
import TrendingStyle    from '../Trending';
import ShopByRoom       from '../ShopRoom';
import Customers        from '../Customers';
import MoreWaysToShop   from '../MoreShop';
import SocialFollow     from '../SocialFollow/inedx';
import Watchlist        from '../Watchlist';
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
										<a href='/'> <img src={CWI_Logo} alt="CWI Logo"/> </a>
										<p> <a href="/">SHOP</a> </p>
									</div>
									<div>
										<a href='/'><img src={LIVEX_Logo} alt="Livex logo"/></a>
										<p><a href="/">SHOP</a></p>
									</div>
									<div>
										<a href='/'> <img src={PAGEONE_Logo} alt="pageone logo"/> </a>
										<p><a href="/">SHOP</a></p>
									</div>
									<div>
										<a href='/'><img src={PROGRESSLIGHT_Logo} alt="Progress light"/></a>
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
							{/* SUGGESTIONS */}
							<Suggestion />
							{/* SHOP BY DEPARTMENT */}
							<ShopByDepartment />
							{/* RECENT POST */}
							<RecentPost />
							{/* MAILING LIST */}
							<div className="row">
								<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 signup'>
									<h3>Stay in the loop - Get our latest articles, sales, and more!</h3>
									<p><a href="/">Join our Mailing List</a></p>
								</div>
							</div>
							{/* TRENDING STYLES */}
							<TrendingStyle />
							{/* SHOP BY ROOM */}
							<ShopByRoom />
							{/* MORE WAYS TO SHOP */}
							<MoreWaysToShop />
							{/* CUSTOMERS */}
							<Customers />
							{/* SOCIAL FOLLOW */}
							<SocialFollow />
						</div>
						<Watchlist />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home;