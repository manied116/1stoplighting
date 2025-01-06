import React from "react";

const SubMenu = () => {
  const menuData = [
    {
        id:"1",
        name: "Brands",
        title:"Featured Brands",
        link : "SHOW ALL BRANDS",
        children :["a1","a2"],
        childrens: [
            {id:"1",name:"Kichler Lighting"},
            {id:"2",name:"Maxim Lighting"},
            {id:"3",name:"Quoizel Lighting"},
            {id:"4",name:"Justice Design"},
            {id:"5",name:"Craftmade Lighting"},
            {id:"6",name:"Progress Lighting"},
            {id:"7",name:"ET2 Lighting"},
            {id:"8",name:"Visual Comfort Fan Collection"},
            {id:"9",name:"Minka Aire Fans"},
            {id:"10",name:"Hinkley Lighting"},
            {id:"11",name:"Golden Lighting"},
            {id:"12",name:"Generation Lighting"},
            {id:"13",name:"Crystoama Lighting"},
            {id:"14",name:"Quorum Lighting"},
            {id:"15",name:"Eurofase Lighting"},
        ] 
    },
    {id:"2",name:"Plug & Play",children:[]},
    {
        id:"3",
        name: "Ceiling Lights",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"CEILING LIGHTS",child:[
                {id:"1",name:"Track Lighting"},
                {id:"2",name:"Flush Mount Lights"},
                {id:"3",name:"Semi-Flush Mount Lights"},
                {id:"4",name:"Island Lighting"},
                {id:"5",name:"Recessed Lighting"},
                {id:"6",name:"Flourescent Wrap Lights"},
                {id:"7",name:"LED Ceiling Lights"},
                {id:"8",name:"Plug-In Ceiling Lights"},
            ]},
            {id:"2",name:"CHANDELIERS",child:[
                {id:"1",name:"Oversized Chandeliers (Greater than 34)"},
                {id:"2",name:"Crystal Chandeliers"},
                {id:"3",name:"Orb Chandeliers"},
                {id:"4",name:"Foyer Lights"},
                {id:"5",name:"Recessed Lighting"},
                {id:"6",name:"Drum Chandeliers"},
                {id:"7",name:"Outdoor Chandeliers"},
                {id:"8",name:"LED Chandeliers"},
                {id:"9",name:"Plug-In Chandeliers"},
            ]},
            {id:"3",name:"PENDANTS",child:[
                {id:"1",name:"Mini-Pendants"},
                {id:"2",name:"Over-Sized Pendants"},
                {id:"3",name:"Plug-In Pendants"},
            ]},
            {id:"4",name:"SPECIALTY",child:[
                {id:"1",name:"Energy Star"},
                {id:"2",name:"Dark Sky"},
                {id:"3",name:"Damp Rated"},
                {id:"4",name:"Wet Rated"},
            ]},
            {id:"5",name:"",child:[
                {id:"1",name:"On Sale"},
                {id:"2",name:"Coupons & Promotions"},
            ]},
            {id:"6",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Hinkley"},
                {id:"2",name:"Elk Home"},
                {id:"3",name:"Crystorama"},
                {id:"4",name:"Kichler"},
                {id:"5",name:"Quoizel"},
                {id:"6",name:"Progress"},
                {id:"7",name:"Maxim"},
                {id:"8",name:"Justice Design"},
            ]},
        ],
        children: ["B1", "B2", "B3"],
    },
    {
        id:"4",
        name: "Chandeliers",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"CHANDELIERS",child:[
                {id:"1",name:"Crystal Chandeliers"},
                {id:"2",name:"Orb Chandeliers"},
                {id:"3",name:"Foyer Lights"},
                {id:"4",name:"Drum Chandeliers"},
                {id:"5",name:"Outdoor Chandeliers"},
                {id:"6",name:"LED Chandeliers"},
                {id:"7",name:"Plug-In Chandeliers"},
            ]},
            {id:"2",name:"",child:[
                {id:"1",name:"On Sale"},
                {id:"2",name:"Coupons & Promotions"},
            ]},
            {id:"3",name:"SHOP BY SIZE",child:[
                {id:"1",name:"Mini - less 14"},
                {id:"2",name:"Small - 14-20"},
                {id:"3",name:"Medium - 20-26"},
                {id:"4",name:"Large - 26-34"},
                {id:"5",name:"Oversized - greater 34"},
            ]},
            {id:"4",name:"TOP FINISHED",child:[
                {id:"1",name:"Bronze"},
                {id:"2",name:"Brushed Nickel"},
                {id:"3",name:"Chrome"},
                {id:"4",name:"Pewter / Silver"},
                {id:"5",name:"Black"},
            ]},
            {id:"5",name:"TOP STYLES",child:[
                {id:"1",name:"Traditional Chandeliers"},
                {id:"2",name:"Contemporary Chandeliers"},
                {id:"3",name:"Transitional Chandeliers"},
                {id:"4",name:"Exposed Bulb"},
                {id:"5",name:"Round Globe"},
                {id:"6",name:"Farmhouse"},
            ]},
            {id:"6",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Hinkley"},
                {id:"2",name:"Crystorama"},
                {id:"3",name:"Elk Home"},
                {id:"4",name:"Maxim"},
                {id:"5",name:"Kichler"},
                {id:"6",name:"Justice Design"},
            ]},
            {id:"7",name:"Popular Chandeliers",img:""}
        ],
      children: ["C1", "C2", "C3"],
    },
    { 
        id:"5",
        name: "Wall Lights",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"WALL LIGHTING",child:[
                {id:"1",name:"Vanity Lighting"},
                {id:"2",name:"Wall Sconces"},
                {id:"3",name:"Swing-Arm Lights"},
                {id:"4",name:"Flush Mount"},
                {id:"5",name:"Wall Lanterns"},
                {id:"7",name:"Candle Wall Lights"},
                {id:"8",name:"Spot Lighting"},
                {id:"9",name:"LED Wall Lighting"},
            ]},
            {id:"2",name:"DESIGN STYLES",child:[
                {id:"1",name:"Transitional"},
                {id:"2",name:"Contemporary"},
                {id:"3",name:"Traditional"},
                {id:"4",name:"Farmhouse"},
                {id:"5",name:"Industrial"},
                {id:"7",name:"Candle Wall Lights"},
                {id:"8",name:"Spot Lighting"},
                {id:"9",name:"LED Wall Lighting"},
            ]},
            {id:"3",name:"SPECIALTY",child:[
                {id:"1",name:"Energy Star"},
                {id:"2",name:"Outdoor"},
            ]},
            {id:"4",name:"Popular Wall Lights",img:""},
            {id:"5",name:"SPOTLIGHT",child:[
                {id:"1",name:"New Arrivals"},
                {id:"2",name:"LifeTime Warranty"},
            ]},
            {id:"6",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Hinkley"},
                {id:"2",name:"Justice"},
                {id:"3",name:"Elk Home"},
                {id:"4",name:"Progress"},
            ]},
            {id:"7",name:"",child:[
                {id:"1",name:"On Sale"},
                {id:"2",name:"Coupons & Promotions"},
            ]},
        ],
        children: [] 
    },
    {
        id:"6",
        name: "Outdoor",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"OUTDOOR LIGHTING",child:[
                {id:"1",name:"Outdoor Post Lights"},
                {id:"2",name:"Outdoor Wall Lights"},
                {id:"3",name:"Outdoor Ceiling Fans"},
                {id:"4",name:"Outdoor Security Lighting"},
                {id:"5",name:"Wall Lanterns"},
                {id:"7",name:"Address Lights"},
                {id:"8",name:"LED Outdoor Lighting"},
                {id:"9",name:"Coastal/Marine Environments"},
            ]},
            {id:"2",name:"LANDSCAPE LIGHTING",child:[
                {id:"1",name:"Outdoor Path Lighting"},
                {id:"2",name:"Outdoor Spot / Accent lights"},
                {id:"3",name:"Outdoor Deck & Step Lights"},
                {id:"4",name:"In-Ground Well Lights"},
                {id:"5",name:"Bollard Lighting"},
                {id:"7",name:"Flood Lighting"},
                {id:"8",name:"Landscape Solar Lights"},
                {id:"9",name:"All Landscape"},
            ]},
            {id:"3",name:"OUTDOOR PATIO",child:[
                {id:"1",name:"Patio Heaters"},
                {id:"2",name:"Patio Umbrellas"},
                {id:"3",name:"Patio Shading"},
                {id:"4",name:"Fire Pits & Bowls"},
            ]},
            {id:"4",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Hinkley"},
                {id:"2",name:"Justice"},
                {id:"3",name:"Elk Home"},
                {id:"4",name:"Progress"},
            ]},
            {id:"5",name:"",child:[
                {id:"1",name:"On Sale"},
                {id:"2",name:"Coupons & Promotions"},
            ]},
        ],
      children: ["E1", "E2", "E3"],
    },
    {
        id:"7",
        name: "Ceiling Fans",
         title:"",
         link : "",
         childrens: [
             {id:"1",name:"CEILING FANS",child:[
                 {id:"1",name:"Indoor Ceiling Fans"},
                 {id:"2",name:"Outdoor Ceiling Fans"},
                 {id:"3",name:"Energy Star Ceiling Fans"},
                 {id:"4",name:"Hugger Ceiling Fans"},
                 {id:"5",name:"Dual Ceiling Fans"},
                 {id:"7",name:"Portable Fans"},
                 {id:"8",name:"LED Ceiling Fans"},
                 {id:"9",name:"Light Kits"},
             ]},
             {id:"2",name:"NUMBER OF BLADES",child:[
                 {id:"1",name:"1 Blade"},
                 {id:"2",name:"2 Blades"},
                 {id:"3",name:"3 Blades"},
                 {id:"4",name:"4 Blades"},
                 {id:"5",name:"5 Blades"},
             ]},
             {id:"3",name:"TOP STYLES",child:[
                 {id:"1",name:"Traditional"},
                 {id:"2",name:"Farmhouse"},
                 {id:"3",name:"Contemporary"},
                 {id:"4",name:"Industrial"},
             ]},
             {id:"4",name:"TOP FINISHED",child:[
                 {id:"1",name:"Bronze"},
                 {id:"2",name:"Oil Rubbed Bronze"},
                 {id:"3",name:"Nickel"},
                 {id:"4",name:"Brass"},
                 {id:"5",name:"Wood"},
                 {id:"6",name:"Chrome"},
             ]},
             {id:"5",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Hinkley"},
                {id:"2",name:"Craftmade"},
                {id:"3",name:"Casablanca"},
                {id:"4",name:"Visual Comfort Fan Collection"},
                {id:"5",name:"Minka Aire"},
            ]},
             {id:"6",name:"",child:[
                 {id:"1",name:"On Sale"},
                 {id:"2",name:"Coupons & Promotions"},
                 {id:"3",name:"Blog: Windmill Ceiling Fan"},
             ]},
         ],
       children: ["E1", "E2", "E3"],
     },
     {
        id:"8",
        color:"#2E6BA7",
        name: "Shop By Room",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"LIVING ROOM",child:[
                {id:"1",name:"Chandeliers"},
                {id:"2",name:"Ceiling Lights"},
                {id:"3",name:"Wall Art"},
                {id:"4",name:"Mirrors"},
                {id:"5",name:"Coffee Tables"},
            ]},
            {id:"2",name:"ENTRYWAY FOYER",child:[
                {id:"1",name:"Pendant Lighting"},
                {id:"2",name:"Chandeliers"},
                {id:"3",name:"Recessed Lighting"},
                {id:"4",name:"Flush & Semi Flush Mounts"},
                {id:"5",name:"Console Tables"},
                {id:"5",name:"Mirrors"},
            ]},
            {id:"3",name:"KITCHEN",child:[
                {id:"1",name:"Mini Pendants"},
                {id:"2",name:"Recessed Lighting"},
                {id:"3",name:"Track Lighting"},
                {id:"4",name:"Undercabinet Lighting"},
            ]},
            {id:"4",name:"BATHROOM",child:[
                {id:"1",name:"Vanity Lighting"},
                {id:"2",name:"LED Bathroom Lighting"},
                {id:"3",name:"Exhaust Fans"},
                {id:"4",name:"Mirrors"},
                {id:"5",name:"Lit Mirrors"},
            ]},
            {id:"5",name:"BEDROOM",child:[
            {id:"1",name:"Lamps"},
            {id:"2",name:"Ceiling Fans"},
            {id:"3",name:"Ceiling Lighting"},
            {id:"4",name:"Dressers Comfort Fan Collection"},
            {id:"5",name:"Mirrors"},
        ]},
        {id:"6",name:"DINING ROOM",child:[
            {id:"1",name:"Chandeliers"},
            {id:"2",name:"Wall Sconces"},
            {id:"3",name:"Large Pendants"},
            {id:"4",name:"Chairs"},
            {id:"5",name:"Mirrors"},
        ]},
            {id:"7",name:"TOP STYLES",child:[
                {id:"1",name:"Vintage Glam"},
                {id:"2",name:"Natural Twine / Rope"},
                {id:"3",name:"Mercury Glass"},
                {id:"4",name:"Industrial"},
                {id:"5",name:"Colored Glass"},
                {id:"6",name:"Bubble Glass"},
                {id:"7",name:"Beach / Seaside"},
            ]},
        ],
        children: ["E1", "E2", "E3"],
    },
    {
        id:"9",
        name: "New",
        color:"#2E6BA7",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"NEW & NERWORTHY",child:[
                {id:"1",name:"Top New Releases"},
                {id:"2",name:"All New Releases"},
            ]},
            {id:"2",name:"TRENDING",child:[]},
            {id:"3",name:"DESIGNERS",child:[
                {id:"1",name:"Tamara Day"},
                {id:"2",name:"Breegan Jane"},
                {id:"3",name:"Steven Sabados"},
                {id:"4",name:"Natalie Papier"},
                {id:"5",name:"Dann Foley"},
                {id:"6",name:"Lauren Liess"},
                {id:"7",name:"Kelly Wearstler"},
                {id:"8",name:"Alexa Hampton"},
                {id:"9",name:"Robin Baron"},
            ]},
            {id:"4",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Capital Lighting"},
                {id:"2",name:"Craftmade"},
                {id:"3",name:"Crystorama"},
                {id:"4",name:"Eurofase"},
                {id:"5",name:"Fanimation"},
                {id:"6",name:"Golden Lighting"},
                {id:"7",name:"Hinkley"},
                {id:"8",name:"Hudson Valley"},
                {id:"9",name:"Kichler"},
            ]},
            {id:"5",name:"FEATURED BRANDS",child:[
                {id:"1",name:"Livex Lighting"},
                {id:"2",name:"Maxim Lighting"},
                {id:"3",name:"Minka Aire"},
                {id:"4",name:"Minka Lavery"},
                {id:"5",name:"Progress"},
                {id:"6",name:"Quoizel"},
                {id:"7",name:"Quorum"},
                {id:"8",name:"Savoy House"},
                {id:"9",name:"All Brands"},
            ]},
        ],
       children: ["E1", "E2", "E3"],
    },
    {id:"10",name:"Learn",color:"#2E6BA7",children:[]},
    {
        id:"11",
        name: "Sale",
        color:"#D43900",
        title:"",
        link : "",
        childrens: [
            {id:"1",name:"ON SALE PRODUCTS",child:[
                {id:"1",name:"Chandelier Sale"},
                {id:"2",name:"Outdoor Lighting Sale"},
                {id:"3",name:"Ceiling Light Sale"},
                {id:"4",name:"Ceiling Fan Sale"},
                {id:"5",name:"Pendant Lighting Sale"},
                {id:"6",name:"Wall Lighting Sale"},
            ]},
            {id:"2",name:"LIGHTS UNDER $100",child:[
                {id:"1",name:"Chandeliers Under $100"},
                {id:"2",name:"Outdoor Lights Under $100"},
                {id:"3",name:"Ceiling Light Under $100"},
                {id:"4",name:"Ceiling Fan Under $100"},
                {id:"5",name:"Pendant Lighting Under $100"},
                {id:"5",name:"Lights Under $100"},
                {id:"5",name:"Wall Lighting Under $100"},
            ]},
            {id:"3",name:"CLEARANCE PRODUCTS",child:[
            {id:"1",name:"Ceiling Mounted Clearance"},
            {id:"2",name:"Outdoor Lighting Clearance"},
            {id:"3",name:"Wall Mounted Clearance"},
        ]},
            {id:"4",name:"Clearance Products",child:[]},
        ],
        children: ["E1", "E2", "E3"],
    },
  ];

    return (
        <div className="relative sub_menu_wrapper">
            <div className="container container-clamp no-vertical-gutter">
                <div className="navbar-inner">
                    <ul>
                    {menuData.map((item, index) => (
                        <li>
                            <h2 style={{marginTop:"0px"}}>
                                <a 
                                    href="/"
                                    className="px-4 sub_title py-2 text-gray-800 hover:underline rounded-md"
                                    style={{color:item.color ? item.color : ""}}
                                    >
                                    {item.name}
                                </a>
                            </h2>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            {/* <div className="flex space-x-4 p-4 sub_parent_container">
                {menuData.map((item, index) => (
                <div key={index} className="relative group sub_parent">
                    <a
                    href="/"
                    className="px-4 sub_title py-2 text-gray-800 hover:underline rounded-md"
                    >
                    {item.name}
                    </a>
                </div>
                ))}
            </div> */}
        </div>
    );
};

export default SubMenu;
