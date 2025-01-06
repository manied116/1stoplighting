import React from 'react';
import { ArrowLongRightIcon, SparklesIcon, ChevronRightIcon ,ChatBubbleOvalLeftIcon} from '@heroicons/react/24/outline';
import {  PhoneIcon, } from '@heroicons/react/20/solid';
import RELIABILITY_LOGO from '../img/reliabilityseal3.gif';
import PAYPAL_LOGO from '../img/paypal-bml.png';
import BRAINTREE_LOGO from '../img/braintree-badge-dark.png';
import CREDICTCARD_LOGO from '../img/creditcards-no-paypal.png';

const Footer = () => {
	return (
		<div className='footer-wrapper'>
			<div className='footer-bar gutter-top-large hidden-xs'>
				<div className='footer-container container'>
					<div className='cl tc'>
						<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 vpspicks'>
							<h2>
								<SparklesIcon className="h-6 w-6"/>
								Our Expert's Picks - Best of the Best
							</h2>
							<p>Check out our hand-selected products and why we think you'll love them!</p>
							<button
								type="button"
								className="view-products -m-2.5 p-2.5 text-gray-700"
							>
								View Products
								<ArrowLongRightIcon aria-hidden="true" className="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className='footerBar special-bg-pattern'>
				<div className='container container-clamp no-vertical-gutter screen-only'>
					<div className='mob-footer footer'>
						<div className='col-xs-12 col-sm-3 col-md-3 col-lg-3 no-gutter-left mob-footer footer-links'>
							<h4>Customer Service</h4>
							<ul>
								<li>
									<a href='./'>Help Center</a>
								</li>
								<li>
									<a href='./'>Order Status</a>
								</li>
								<li>
									<a href='./'>Returns & Replacements</a>
								</li>
								<li>
									<a href='./'>International Shipping</a>
								</li>
								<li>
									<a href='./'>Login</a>
								</li>
							</ul>
						</div>
						<div className='col-xs-12 col-sm-3 col-md-3 col-lg-3 no-gutter-right mob-footer footer-links'>
							<h4>Shooping</h4>
							<ul>
								<li>
									<a href='./'>On Sale Items</a>
								</li>
								<li>
									<a href='./'>Our Brands</a>
								</li>
								<li>
									<a href='./'>Product Features</a>
								</li>
								<li>
									<a href='./'>Trade Customers</a>
								</li>
								<li>
									<a href='./'>View Your Cart</a>
								</li>
							</ul>
						</div>
						<div className='col-xs-12 col-sm-3 col-md-3 col-lg-3 no-gutter-right mob-footer footer-links'>
							<h4>Company Info</h4>
							<ul>
								<li>
									<a href='./'>About Us</a>
								</li>
								<li>
									<a href='./'>Partners</a>
								</li>
								<li>
									<a href='./'>Careers</a>
								</li>
								<li>
									<a href='./'>Privacy Policy</a>
								</li>
								<li>
									<a href='./'>Terms of use</a>
								</li>
								<li>
									<a href='./'>Afflicate Program</a>
								</li>
								<li>
									<a href='./'>Accessibility</a>
								</li>
							</ul>
						</div>
						<div className='col-xs-12 col-sm-3 col-md-3 col-lg-3 no-gutter-right mob-footer'>
							<h4 className='hidden-xs'>Customer Support</h4>
							<div>
								<div id='service'>
									<p>Already Ordered?</p>
									<span>
										<p>
											<a href='//'>
											File a <strong style={{display:"flex",alignItems:"center"}}>Return or Replcement <ChevronRightIcon className="h-4 w-4"/> </strong></a>
										</p>
										<p>
											<a href='//'>
											 <strong style={{display:"flex",alignItems:"center"}}>View Order Status <ChevronRightIcon className="h-4 w-4"/> </strong></a>
										</p>
										<p>
											<a href='//'>Visit
											<strong style={{display:"flex",alignItems:"center"}}>Help Desk <ChevronRightIcon className="h-4 w-4"/> </strong></a>
										</p>
									</span>
									<p style={{marginTop:"20px"}}>Ready To Order ?</p>
									<span>
										<p>
											<a href='//'>
											<strong style={{display:"flex",alignItems:"center"}}> <PhoneIcon className="h-4 w-4"/><u>Call Us</u> </strong> </a>
										</p>
										<p><strong>Monday-Friday</strong> 6 am - 5pm PST</p>
										<p>
											<a href='//'>
											 <strong style={{display:"flex",alignItems:"center"}}><ChatBubbleOvalLeftIcon className="h-4 w-4"/>Online Chat </strong></a>
										</p>
										<p><strong>Monday-Friday</strong> 6 am - 4pm PST</p>
										<p><strong>Saturday & Sunday</strong> 6 am - 3pm PST</p>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container container-clamp'>
					<div className='row'>
						<div className='auxiliary-information col-xs-12 screen-only'>
							<div className='row no-gutter mob-footer mob-center'>
								© 2025 1STOPlighting.com. All Rights Reserved
							</div>
							<div className='row no-gutter mob-footer mob-center vertical-gutter-small hidden-xs screen-only'>
								<div className='socialNav'>
									<ul>
										<li>
											<a href='/'><i className="fa fa-instagram" style={{fontSize:"24px",color:"#1f3e60"}}></i></a>
										</li>
										<li>
											<a href='./.'><i className="fa fa-pinterest" style={{fontSize:"24px",color:"#1f3e60"}}></i></a>
										</li>
										<li>
											<a href='./'><i className="fa fa-twitter" style={{fontSize:"24px",color:"#1f3e60"}}></i></a>
										</li>
										<li>
											<a href='/.'><i className="fa fa-facebook-square" style={{fontSize:"24px",color:"#1f3e60"}}></i></a>
										</li>
										<li>
											<a href='/'><i className="fa fa-youtube-play" style={{fontSize:"24px",color:"#1f3e60"}}></i></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container container-clamp screen-only'>
					<div className='row vertical-gutter'>
						<div className='badges'>
							<a href="//" className='hidden-xs margin-right'>
								<img src={RELIABILITY_LOGO} alt='RELIABILITY_LOGO' />
							</a>
							<a href="//" className='margin-right'>
								<img src={PAYPAL_LOGO} alt='PAYPAL' style={{width:"150px"}}/>
							</a>
							<img src={CREDICTCARD_LOGO} alt='creditcard' />
							<a href="//">
								<img src={BRAINTREE_LOGO} alt='braintree' style={{borderWidth:"0px",width:"164px"}}/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
