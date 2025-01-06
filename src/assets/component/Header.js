
import React, { useState } from "react";
import Logo from "../img/1stop_logo.png";
import SubMenu from "./subMenu";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Popover,
	PopoverButton,
	PopoverGroup,
	PopoverPanel,
  } from '@headlessui/react'
  import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
	EnvelopeIcon,
	QuestionMarkCircleIcon,
	UserIcon,
	ShoppingCartIcon,
	HomeIcon
  } from '@heroicons/react/24/outline';
  import { ChevronDownIcon, PhoneIcon, PlayCircleIcon,UserCircleIcon,HeartIcon } from '@heroicons/react/20/solid';
  import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

  const Brands = [
	{
		name:"Shop All Brands",
		children:["Kichler Lighting","Maxim Lighting","Quoizel Lighting","Justice Design","Craftmade Lighting","Progress Lighting","ET2 Lighting","Visual Comfort Fan Collection","Minka Aire Fans","Hinkley Lighting","All Brands"]
	},
	]
const Ceiling_Lights=[
	{
		name:"Shop All Ceiling Lights",
		children:["Chandeliers","Pendants","Mini Pendants","Close To Ceiling","Track Lighting","Flush Mount Lights","Semi FLush Mounts","Island Lighting","Recessed Lighting","Fluorescent Wraps","LED Ceiling Lights"]
	}
]
const Chandeliers   =[
	{
		name:"Shop All Chandeliers",
		children:["Crystal Chandeliers","Orb Chandeliers","Foyer Lights","Drum Chandeliers","LED Chandeliers","Traditional Chandeliers","Contemporary Chandeliers","Transitional Chandeliers","Shop All"]
	}
]
const Wall_Lights   =[
	{
		name:"Shop All Wall Lights",
		children:["Vanity Lighting","Wall Sconces","Swing-Arm","Flush Mount Wall Lights","Wall Laterns","Spot Lighting","Candle Wall Lights","LED Wall Lighting"]
	}
]
const Outdoor_Lights=[
	{
		name:"Shop All Outdoor",
		children:["Outdoor Post Lights","Outdoor Ceiling Lights","Outdoor Wall Lights","Outdoor Ceiling Fans","Security Lighting","Outdoor Chandeliers","Address Lights","LED Outdoor Lighting","Outdoor Pathway Lighting","Outdoor Spot/Accent Lighting","Outdoor Deck & Steps Lights","Well Underwater Lights","Shop all Landscape Lighting","Bollard Lighting","Flood Lighting","Landscape Solar Lights","Patio Heaters","Patio Umbrellas","Patio Shading","Fire Pits & Bowls"]
	}
]
const Ceiling_Fans  =[
	{
		name:"Shop All Ceiling Fans",
		children:["Outdoor Fans","Energy Star Fans","Hugger Fans","Dual Ceiling Fans","Portable Fans","Light Kits","LED Fans","BLOG: Windmill Ceiling Fan"]
	}
]
const Shop_By_Fans  =[
	{
		name:"Shop All Shop By Room",
		children:["Living Room","Entryway/Foyer","Dining Room","Game Room","Kitchen Lighting","Children's Lighting","Bedroom Lighting","Bathroom Lighting","Outdoor Lighting","Office"]
	}
]
const New_Lights    =[
	{
		name:"Shop All New",
		children:["Top New Arrivals","Trending"]
	}
]
const Learn_Lights  =[
	{
		name:"Shop All Learn",
		children:["Farmhouse Kitchen ideas","Smart Lighting","50 Kitchen Lighting Ideas","20 Bathroom Lighting Ideas","6 Small Kitchen Lighting Ideas","16 Pathway Lighting Ideas","10 Kitchen Lighting Ideas","Bathroom Vanity Ideas","3 Farmhouse Dining Room Style","Quorum Windmill Ceiling Fan","Top 3 Fall Lighting Trends","Tips For Hanging Wall Sconces","How To Choose Kitchen Pendants","How To Plan Kitchen Recessed","Create an Inviting Front Yard","Bath Recessed Lighting Tips","Update Outdoor Lights For Fall","Trendy Farmhouse Chandeliers","Choosing the Right Ceiling Fan","Before & After Room Makeover"]
	}
]
const Sale_Lights   =[
	{
		name:"Shop All Sale",
		children:["Clearance Lighting and Decor","On Sale Products","Chandeliers Sale","Outdoor Lighting Sale","Ceiling Light Sale","Ceiling Fan Sale","Pendant Lighting Sale","Wall Lighting Sale"]
	}
]
  
  const products = [
	{ name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
	{ name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
	{ name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
	{ name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
	{ name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
  ]
  const callsToAction = [
	{ name: 'Watch demo', href: '#', icon: PlayCircleIcon },
	{ name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* Top bar */}
		<div className="contract bg-gray-800 text-white py-2 px-4 flex justify-between items-center">
			<UserCircleIcon className="h-5 w-5 ml-3 mr-1" />
			<p className="text-sm"> Are you a Contractor or Design Pro? </p>
		</div>

      {/* Main navigation */}
		<nav aria-label="Global">
			<div className="main_nav max-w-7xl mx-auto sm:px-6 lg:px-8">
				<div className="flex justify-between items-center gap-6 mobile-header">
					{/* Logo */}
					<div style={{padding: "0px 0px 15px 0px"}}>
						<a href="/">
							<img src={Logo} alt="1stoplighting Logo" />
						</a>
					</div>

					{/* Search Bar */}
					<div className=" md:flex flex-grow mx-3 items-center rounded-md hidden border border-gray-300" style={{maxWidth:"350px"}}>
						<input
							type="text"
							className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md "
							placeholder="Search for anything..."
						/>
						<MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-3 mr-2" />
					</div>

				{/* Navigation Links */}
					<div className="hidden md:flex items-center space-x-6 gap-6" >
						{/* <a href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600"> */}
							<button
								type="button"
								className="save p-1.5 rounded-full text-white hover:bg-blue-600 flex items-center justify-center gap-x-1"
							>
								<EnvelopeIcon className="h-4 w-4"/>
								Save Up to 25%
							</button>
						{/* </a> */}
						<div className="menu_list">
							<ul className="gap-6">
								<li className='menus'>
									<a href='/'>
										<QuestionMarkCircleIcon className="h-7 w-7"/>
										<p>Support</p>
									</a>
								</li>
								<li className='menus'>
									<a href='/'>
										<UserIcon className="h-7 w-7"/>
										<p>Account</p>
									</a>
								</li>
								<li className='menus'>
									<a href='/'>
										<HeartIcon className="h-7 w-7"/>
										<p>My Favorites</p>
									</a>
								</li>
								<li className='menus'>
									<a href='/' className="relative inline-block">
										<ShoppingCartIcon className="h-7 w-7"/>
										<span
											className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
										>
											0
										</span>
										<p>Your cart</p>
									</a>
								</li>
							</ul>
						</div>
					</div>
					{/* Mobile menu button */}
					<li className='menus' 
						style={{display:"flex",justifyContent:"end",padding:"0px 0px 8px"}}>
					<a href='/' className="relative inline-block md:hidden">
						<ShoppingCartIcon className="h-7 w-7"/>
						<span
							className="absolute top-1 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
						>
							0
						</span>
					</a>
					</li>
					
				</div>
				<div className="mobile-menubar-grid">
					<button
						className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100"
						onClick={() => setMobileMenuOpen(true)}
					>
						<Bars3Icon className="h-6 w-6" />
					</button>
					<div>
						<QuestionMarkCircleIcon className="h-7 w-7"/>
					</div>
					<div>
						<UserIcon className="h-7 w-7"/>
					</div>
					<div>
						<HeartIcon className="h-7 w-7"/>
					</div>
					<div className=" md:flex flex flex-grow items-center rounded-md border border-gray-300">
						<input
							type="text"
							className="flex-1 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md mobile-search"
							placeholder="Search for anything..."
						/>
						<MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-3 mr-2" />
					</div>
				</div>
			</div>
		</nav>
		<div className="mobile-discount-ribbon visible-xs visible-sm hidden-md hidden-lg">
			<button
				type="button"
				className="save p-1.5 text-white hover:bg-blue-600 flex items-center justify-center gap-x-1"
				style={{width:"100%"}}
			>
				<EnvelopeIcon className="h-4 w-4"/>
				Save Up to 25%
			</button>
		</div>
		{mobileMenuOpen ? "" :
			<SubMenu />
		}
		
      {/* Mobile Menu */}
		<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
			<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-200 overflow-y-auto bg-white px-3 py-3 transition-transform transform sm:max-w-sm sm:ring-1 sm:ring-gray-900/10" style={{width:"250px"}}>
					<nav className="megaMenu menu3dmega">
						<ul className="nav navbar-nav">
							<li className="LICategories navHomeLink menu-non-dropdown visible-xs-inline hidden-sm hidden-md hidden-lg hidden-xl">
								<div className="flex items-center justify-between">
									<a href="/" className="-m-1.5 p-1.5 mobile-text">
									<i className="fa fa-home" style={{fontSize:"20px",color:"#1f3e60"}}></i>
										Home
									</a>
									<button
										type="button"
										onClick={() => setMobileMenuOpen(false)}
										className="-m-2.5 rounded-md p-2.5 text-gray-700"
									>
										<span className="sr-only">Close menu</span>
										<XMarkIcon aria-hidden="true" className="h-6 w-6" />
									</button>
								</div>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
										Brands
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Brands[0].name}</a>
											</p>
										</div>
										{Brands[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li>
								<a href="/feature" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
								Plug & Play
								</a>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
										Ceiling Lights
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Ceiling_Lights[0].name}</a>
											</p>
										</div>
										{Ceiling_Lights[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
										Chandeliers
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Chandeliers[0].name}</a>
											</p>
										</div>
										{Chandeliers[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
										Wall Lights
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Wall_Lights[0].name}</a>
											</p>
										</div>
										{Wall_Lights[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
										Outdoor
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Outdoor_Lights[0].name}</a>
											</p>
										</div>
										{Outdoor_Lights[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
										Ceiling Fans
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Ceiling_Fans[0].name}</a>
											</p>
										</div>
										{Ceiling_Fans[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50" style={{color:"#2E6BA7"}}>
										Shop by Room
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Shop_By_Fans[0].name}</a>
											</p>
										</div>
										{Shop_By_Fans[0].children.map((item) => (
										<DisclosureButton
											key={item}
											as="a"
											className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
										>
											{item}
										</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50" style={{color:"#2E6BA7"}}>
										New
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{New_Lights[0].name}</a>
											</p>
										</div>
										{New_Lights[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50" style={{color:"#2E6BA7"}}>
										Learn
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Learn_Lights[0].name}</a>
											</p>
										</div>
										{Learn_Lights[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
							<li className="LICategories visible-xs hidden-sm hidden-md hidden-lg hidden-xl">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50" style={{color:"#D43900"}}>
										Sale
										<ChevronDownIcon aria-hidden="true" className="h-5 w-5 group-open:rotate-180" />
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										<div style={{padding:"10px 20px 10px",borderBottom:"1px solid #e5e7eb"}}>
											<p style={{margin:"0px"}}>
												<a href="/f">{Sale_Lights[0].name}</a>
											</p>
										</div>
										{Sale_Lights[0].children.map((item) => (
											<DisclosureButton
												key={item}
												as="a"
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</li>
						</ul>
					</nav>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default Header;
