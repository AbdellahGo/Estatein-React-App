import {
    money, sun, building, shop, bed, bathroom, villa,
    Profile1, Profile2, Profile3, stareRating, facebook, twitter, linkedin, youtube,
    purpleStar, hat, people, image1, image2, image3, image4, lightning, checkerboard,
    chessBoardPlus, circularStatistics, dataBase, fire, lamp, magicStars, magnifier, signal, tags,
    miniLogo, location, phone, purpleMessage, whiteLocation, whiteMessage, whitePhone
} from '../assets'

export const pagesLinks = [
    {
        id: 1,
        text: 'Home',
        link: '/',
    },
    {
        id: 2,
        text: 'About Us',
        link: '/about',
    },
    {
        id: 3,
        text: 'Properties',
        link: '/properties',
    },
    {
        id: 4,
        text: 'Services',
        link: '/services',
    },
]

export const heroSectionData = {
    title: 'Discover Your Dream Property with Estatein',
    description: 'Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.',
    buttons: [
        {
            id: 1,
            link: '/services',
            content: 'Learn More',
            classes: 'border-1 border-grey-15'
        },
        {
            id: 2,
            link: '/properties',
            content: 'Browse Properties',
            classes: 'bg-purple-60'
        },
    ],
    stats: [
        {
            id: 1,
            number: '200+',
            text: 'Happy Customers',
        },
        {
            id: 2,
            number: '10k+',
            text: 'Properties For Clients',
        },
        {
            id: 3,
            number: '16+',
            text: 'Years of Experience',
        },
    ],
    services: [
        {
            id: 1,
            icon: shop,
            link: '',
            page: '/properties',
            serviceTitle: 'Find Your Dream Home'
        },
        {
            id: 2,
            icon: money,
            link: 'negotiation_wizardry',
            page: '/services',
            serviceTitle: 'Unlock Property Value'
        },
        {
            id: 3,
            icon: building,
            link: 'property_management',
            page: '/services',
            serviceTitle: 'Effortless Property Management'
        },
        {
            id: 4,
            icon: sun,
            link: 'closing_success',
            page: '/services',
            serviceTitle: 'Smart Investments, Informed Decisions'
        },
    ]
}

export const propertiesDetails = {
    title: 'Featured Properties',
    description: 'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.',
    propertiesList: [
        {
            "id": 1,
            "propertyArea": "700-799",
            "propertyTitle": "6303 - 55 COOPER ST",
            "propertyAddress": "Toronto, Ontario, Canada, M5E0G1",
            "propertyPrice": "$899,000",
            "propertyDescription": "Property Profile\nASSIGNMENT SALE - An Incredible Opportunity to Acquire a Pristine Condominium in the Heart of Vibrant Downtown Toronto! Completely New Unit! (Sugar Wharf Condo By Menkes Development). 657 Interior sf & 116 sf Balcony Open Concept 1 + 1, Den Can Be Used As 2nd Bedroom, W/ Spacious Living Area And Unobstructed City View. Surrounded By Sugar Beach, Farm Boy, Loblaws, And LCBO. Future Direct Access to the Path and School, Making It Ideal for Living. This Is Truly Toronto's Largest Waterfront Community, Offers Abundant City Exposure and Various Amenities. Explore the Vibrant City Life and Lake View! Don't Miss Out.\nExtra info:\nBrand New Stainless Steel Appliances: Stove, Refrigerator, Microwave, Dishwasher. Washer, Dryer, and Window Coverings.\nHouse features:\nBeach, Lake/Pond",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Garage/Parking Type: Underground",
                "Heating Type: Forced Air"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/65891b653175d27c4d2f1318.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b68b7279b6e6cd5bd0f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b6c89e818472917f66b.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b6dca3a3a2fd8dadd36.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b6e4e2bfc746691ea56.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b6eeeb71821cb7162c8.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b6e0a9aec47a32e78c7.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65891b6f89e818472917f66c.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 2,
            "propertyArea": "500-599",
            "propertyTitle": "6207 - 14 YORK ST",
            "propertyAddress": "Toronto, Ontario, Canada, M5J2Z2",
            "propertyPrice": "$675,000",
            "propertyDescription": "Property Profile\nLuxurious 1 Bedroom Ice 2 Condo In Heart Of Downtown Toronto. Breathtaking Unobstructed View of Cn Tower, City Lake ! Open Functional Layout With Modern High End Appliances! High Speed Elevators, Direct Access To Underground Pathway, Next To Maple Leaf Sq. Scotia Bank Arena, Connects To Union Station, Go Train, Financial District, Theatre, Rogers Centre Cn Tower, Fine Dining, Lakefront, Super Market, Minutes to DVP/ Gardiner\nExtra info:\nFull Sized Locker Incl. Built In Fridge, Stove Microwave, Dishwasher, Stacked Washer/Dryer, 24 Hrs Concierge, Indoor Pool, Hot Tub, Spa, Yoga, Aerobic Studio & Party Rooms, World Class Amenities\nHouse features:\nClear View, Hospital",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $2,746"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6588ff259912fe391341842d.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff26f540667b2af0327f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2899cd602374ad1b01.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff283175d27c4d2f1234.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2889e818472917f5bf.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff28613a1e23490cad26.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff290a9aec47a32e7821.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff293175d27c4d2f1235.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 3,
            "propertyArea": "500-599",
            "propertyTitle": "1705 - 1328 BIRCHMOUNT RD",
            "propertyAddress": "Toronto, Ontario, Canada, M1R0B6",
            "propertyPrice": "$538,800",
            "propertyDescription": "Property Profile\nExcellent Location at Birchmount & Lawrence!! 9 Foot Ceilings, Stainless Steel Appliances, And The Best Layout In The Building. Complete With A Den That Can Easily Be Used As A 2nd Bedroom with Open Balcony & En-suite laundry. TTC At Doorstep, Minutes To Subway, Dvp, 401.Surrounded By Centennial College, the University Of Toronto,and Public & Catholic Schools. Landscaped Rooftop Terrace, Private Courtyard With Playground, Fitness Centre, Indoor Pool And Much More.\nExtra info:\nFridge, Stove, Washer/Dryer, Dishwasher, All Window Covers & Elf's, 1 Underground Parking.",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 1",
                "Garage/Parking Type: Underground",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $1,465.80"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6588ab02b7279b6e6cd5bb71.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab04a3bb036e92240ce9.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab05eeb71821cb7160fb.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab060a9aec47a32e770a.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab06d79c1b319f1dde48.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab0699cd602374ad19ec.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab06ad8aea7c97c7a4e1.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ab07d79c1b319f1dde49.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 4,
            "propertyArea": "1200-1399",
            "propertyTitle": "1604 - 88 CORPORATE DR",
            "propertyAddress": "Toronto, Ontario, M1H3G6",
            "propertyPrice": "$699,900",
            "propertyDescription": "Property Profile\nWelcome to a large, bright 2 bedroom + den condo, perfect for families or anyone looking to find a spacious home (approx 1,350 Sq Ft.!) The heart of this home is a big, open living and dining area where everyone can gather, eat, and relax. It's freshly painted with easy-to-clean laminate floors. The kitchen is ready for your cooking adventures, complete with modern stainless steel appliances and a cozy spot to enjoy meals. Each bedroom is roomy and comfortable. The main bedroom has a large closet for all your things and its own 4 Pc Ensuite bathroom for privacy. The second bedroom has plenty of space too. The den with a door and large windows and can be a third bedroom or an office, whatever you need. Filled with natural light with great unobstructed South-East views! What's else is special? This condo comes with not one but TWO parking spots - and a HUGE storage locker (located on 15th floor) - it's almost the size of a bedroom itself. Make sure to check it out!\nExtra info:\nLive close to shopping, the highway, restaurants, and movie theaters, making life convenient and fun. The building amazing amenities- indoor and outdoor pools, a gym, and a party room & more, offering plenty of ways to enjoy your days!\nHouse features:\nClear View, Hospital",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 2",
                "Garage/Parking Type: Underground",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $2,291.90"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "2"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "2 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6588ff483175d27c4d2f1248.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4ac58e2e6e7a3a3267.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4cf540667b2af03298.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4e3175d27c4d2f1250.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4ff540667b2af0329a.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4ff6b6ba2f0377c20a.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4fd79c1b319f1ddf63.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff4feeb71821cb716213.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 5,
            "propertyArea": "500-599",
            "propertyTitle": "503 - 20 BRIN DR",
            "propertyAddress": "Toronto, Ontario, Canada, M8X0B2",
            "propertyPrice": "$529,888",
            "propertyDescription": "Property Profile\nAmazing spacious Etobicoke unit in a newly built condo with a gorgeous unobstructed panoramic view of the Humber River and trees further than the eye can see. 9ft smooth ceilings, Engineered hardwood floors, mirror sliding doors, Beautiful kitchen w/ quartz counters & S/S appliances. Bedroom has walk-in closet and large window. Close to Royal York subway, transit, Stockyard Shopping District, James Garden Humber Trail & all Amenities.\nExtra info:\nComes fully loaded and Includes High Speed Internet with your maintenance fees; Stainless Steel Kitchen Appliances, Washer & Dryer. 24hr security, party room and gym",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 1",
                "Garage/Parking Type: Underground",
                "Heating Type: Heat Pump",
                "Annual Property Taxes: $1,928"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/658856c6418a25392d6bd95f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c8f540667b2af02e7f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c8f6b6ba2f0377bf3c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c8d79c1b319f1ddb30.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c84e2bfc746691e730.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c9d79c1b319f1ddb31.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c9f540667b2af02e80.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c9d79c1b319f1ddb32.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 6,
            "propertyArea": "500-599",
            "propertyTitle": "1909 - 19 BATHURST ST ST",
            "propertyAddress": "Toronto, Ontario, Canada, M5V0N2",
            "propertyPrice": "$635,000",
            "propertyDescription": "Property Profile\nWelcome to newer Lakefront Condos by reputable Concord-Adex built on historical West Block site. This Bright 1Br + Den Offers Spectacular City View! Designer Modern Gourmet Kitchen With Integrated B/I S/S Appliances, Quartz Countertop & Marble Backsplash. Marble Surround 4Pcs Bathroom. The Building Houses Over 23,000Sf Of High-End Amenities. At Is Doorstep Lies The Masterfully Restored 50,000Sf Loblaws Flagship Supermarket & 87,000Sf Of Essential Retail. Steps To Shoppers, The Lake, Restaurants, Transit, Shopping, LCBO, Entertainment, Parks, Schools & More!\nExtra info:\nFridge, Stove, Built-In Dishwasher, Stainless Steel Microwave, Stainless Steel Range Hood Fan, Front Load Washer & Dryer, All Electric Light Fixtures & Window Coverings.\nHouse features:\nClear View, Lake Access",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Garage/Parking Type: Underground, Visitor Parking",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $2,178.72"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/658856fb0a9aec47a32e74dd.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856fd3175d27c4d2f0e25.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856fe3175d27c4d2f0e27.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856ffeeb71821cb715ec5.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856ff9912fe391341801c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856ff418a25392d6bd971.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65885700cefb162ef3cf1baa.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65885700f540667b2af02e97.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 7,
            "propertyTitle": "7 DOLAN LANE",
            "propertyAddress": "Richmond Hill, Ontario, Canada, L4B0G4",
            "propertyPrice": "$1,750,000",
            "propertyDescription": "Property Profile\nThe Only Townhouses In The Prestigious Bayview Hill! Rarely found 4 bedrooms, 5 washrooms, and 2-car garage townhouse. Bright and spacious. 9' Ceilings. Many upgrades include pot lights, iron picket stairs, gas cooktop, waterfall countertop, frameless shower door, and custom-made blackout curtains. Prime Location in Richmond Hill, Close To 404/407, Go Station, Yrt, Groceries, Parks, Community Centres. Zoned for Bayview Hill E.S. & Bayview S.S.\nExtra info:\nFridge, Gas Cooktop, Oven, Range Hood, Dishwasher, Washer, Dryer. All existing elfs and window coverings.",
            "propertyFeatures": [
                "House Style: Attached/Townhouse",
                "Total Parking Spaces: 4",
                "Garage/Parking Type: Attached garage",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $8,359.89"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "5"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "4"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6587e69c99cd602374ad13ab.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e69f0a9aec47a32e71a7.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a2cefb162ef3cf198c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a54e2bfc746691e54e.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a6418a25392d6bd774.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a6c58e2e6e7a3a2c14.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a64e2bfc746691e550.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a70a9aec47a32e71b3.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 8,
            "propertyArea": "500-599",
            "propertyTitle": "6207 - 14 YORK ST",
            "propertyAddress": "Toronto, Ontario, Canada, M5J2Z2",
            "propertyPrice": "$675,000",
            "propertyDescription": "Property Profile\nLuxurious 1 Bedroom Ice 2 Condo In Heart Of Downtown Toronto. Breathtaking Unobstructed View of Cn Tower, City Lake ! Open Functional Layout With Modern High End Appliances! High Speed Elevators, Direct Access To Underground Pathway, Next To Maple Leaf Sq. Scotia Bank Arena, Connects To Union Station, Go Train, Financial District, Theatre, Rogers Centre Cn Tower, Fine Dining, Lakefront, Super Market, Minutes to DVP/ Gardiner\nExtra info:\nFull Sized Locker Incl. Built In Fridge, Stove Microwave, Dishwasher, Stacked Washer/Dryer, 24 Hrs Concierge, Indoor Pool, Hot Tub, Spa, Yoga, Aerobic Studio & Party Rooms, World Class Amenities\nHouse features:\nClear View, Hospital",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $2,746"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6588ff259912fe391341842d.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff26f540667b2af0327f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2899cd602374ad1b01.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff283175d27c4d2f1234.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2889e818472917f5bf.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff28613a1e23490cad26.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff290a9aec47a32e7821.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff293175d27c4d2f1235.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 9,
            "propertyArea": "500-599",
            "propertyTitle": "503 - 20 BRIN DR",
            "propertyAddress": "Toronto, Ontario, Canada, M8X0B2",
            "propertyPrice": "$529,888",
            "propertyDescription": "Property Profile\nAmazing spacious Etobicoke unit in a newly built condo with a gorgeous unobstructed panoramic view of the Humber River and trees further than the eye can see. 9ft smooth ceilings, Engineered hardwood floors, mirror sliding doors, Beautiful kitchen w/ quartz counters & S/S appliances. Bedroom has walk-in closet and large window. Close to Royal York subway, transit, Stockyard Shopping District, James Garden Humber Trail & all Amenities.\nExtra info:\nComes fully loaded and Includes High Speed Internet with your maintenance fees; Stainless Steel Kitchen Appliances, Washer & Dryer. 24hr security, party room and gym",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 1",
                "Garage/Parking Type: Underground",
                "Heating Type: Heat Pump",
                "Annual Property Taxes: $1,928"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/658856c6418a25392d6bd95f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c8f540667b2af02e7f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c8f6b6ba2f0377bf3c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c8d79c1b319f1ddb30.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c84e2bfc746691e730.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c9d79c1b319f1ddb31.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c9f540667b2af02e80.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856c9d79c1b319f1ddb32.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 10,
            "propertyArea": "500-599",
            "propertyTitle": "1909 - 19 BATHURST ST ST",
            "propertyAddress": "Toronto, Ontario, Canada, M5V0N2",
            "propertyPrice": "$635,000",
            "propertyDescription": "Property Profile\nWelcome to newer Lakefront Condos by reputable Concord-Adex built on historical West Block site. This Bright 1Br + Den Offers Spectacular City View! Designer Modern Gourmet Kitchen With Integrated B/I S/S Appliances, Quartz Countertop & Marble Backsplash. Marble Surround 4Pcs Bathroom. The Building Houses Over 23,000Sf Of High-End Amenities. At Is Doorstep Lies The Masterfully Restored 50,000Sf Loblaws Flagship Supermarket & 87,000Sf Of Essential Retail. Steps To Shoppers, The Lake, Restaurants, Transit, Shopping, LCBO, Entertainment, Parks, Schools & More!\nExtra info:\nFridge, Stove, Built-In Dishwasher, Stainless Steel Microwave, Stainless Steel Range Hood Fan, Front Load Washer & Dryer, All Electric Light Fixtures & Window Coverings.\nHouse features:\nClear View, Lake Access",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Garage/Parking Type: Underground, Visitor Parking",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $2,178.72"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/658856fb0a9aec47a32e74dd.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856fd3175d27c4d2f0e25.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856fe3175d27c4d2f0e27.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856ffeeb71821cb715ec5.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856ff9912fe391341801c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/658856ff418a25392d6bd971.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65885700cefb162ef3cf1baa.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65885700f540667b2af02e97.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 11,
            "propertyTitle": "7 DOLAN LANE",
            "propertyAddress": "Richmond Hill, Ontario, Canada, L4B0G4",
            "propertyPrice": "$1,750,000",
            "propertyDescription": "Property Profile\nThe Only Townhouses In The Prestigious Bayview Hill! Rarely found 4 bedrooms, 5 washrooms, and 2-car garage townhouse. Bright and spacious. 9' Ceilings. Many upgrades include pot lights, iron picket stairs, gas cooktop, waterfall countertop, frameless shower door, and custom-made blackout curtains. Prime Location in Richmond Hill, Close To 404/407, Go Station, Yrt, Groceries, Parks, Community Centres. Zoned for Bayview Hill E.S. & Bayview S.S.\nExtra info:\nFridge, Gas Cooktop, Oven, Range Hood, Dishwasher, Washer, Dryer. All existing elfs and window coverings.",
            "propertyFeatures": [
                "House Style: Attached/Townhouse",
                "Total Parking Spaces: 4",
                "Garage/Parking Type: Attached garage",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $8,359.89"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "5"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "4"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6587e69c99cd602374ad13ab.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e69f0a9aec47a32e71a7.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a2cefb162ef3cf198c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a54e2bfc746691e54e.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a6418a25392d6bd774.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a6c58e2e6e7a3a2c14.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a64e2bfc746691e550.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587e6a70a9aec47a32e71b3.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 12,
            "propertyArea": "700-799",
            "propertyTitle": "5-10 - 5915 YONGE STREET AVE",
            "propertyAddress": "Toronto, Ontario, Canada, M2M3T9",
            "propertyPrice": "$720,000",
            "propertyDescription": "Property Profile\nM2M Square is one of the most highly anticipated pre-construction projects in the GTA, situated within the vibrant Newtown community at Yonge and Finch. 748sq/f +98 sq/f 2+1 bedroom with 2 bathroom!!!\nExtra info:\nGood size den with ceiling light, can be used as 3nd bedroom; Face to south, filled with sunshine; big balcony with nice view.",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Garage/Parking Type: Underground",
                "Heating Type: Forced Air"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "2"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "2 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6588ff2b613a1e23490cad27.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2c3175d27c4d2f1237.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2c9912fe3913418433.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2cd79c1b319f1ddf50.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2cf540667b2af03283.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2d613a1e23490cad29.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2df540667b2af03284.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6588ff2d3175d27c4d2f1238.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 13,
            "propertyArea": "600-699",
            "propertyTitle": "901 - 17 BATHURST ST",
            "propertyAddress": "Toronto, Ontario, M5V0N1",
            "propertyPrice": "$649,900",
            "propertyDescription": "Property Profile\nDon't Miss This Gorgeous 1+1 Bedroom Is Located In One Of Most Recent Luxurious Buildings at Downtown Toronto's Concord City Place. Den with Glass Sliding Door Is a 2nd Bedroom Now. Modern Designed Kitchen and Spa-like Bathroom. Marble Tile Flooring & Tub/Shower Surround 4 Piece Bathroom. Wood Finished Trims and Doors Throughout, Quartz Countertops, Wide Engineered Wood Flooring. Over 23,000Sf Of Hotel Worthy Amenities include 24-Hr Concierge, Guest Suites,Party Lounge,Dining Room,Guest Suites, Yoga Centre, Pool, Sauna,Cardio Room,Library or Reading Room,Outdoor Patio,Meeting Room Boardroom,Fitness Centre,Dog Spa,Barbecue Facility,Cafe Juice Bar,Kids Playground,Movie Theatre. Steps To Lake, Financial District, Parks, Shopping, Restaurants, Entertainment District, Parks, Schools, Sports Arenas & More! Easy Access To Hwy/Ttc.\nExtra info:\n23,000 sqft. of Upscale Amenities. 24 Hours Concierge and Visitors Parkings Are Free and Paid. Lots of Modern Finishes Throughout.",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Garage/Parking Type: Underground",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $2,252.01"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1 + 1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/6587adfc99cd602374ad11fc.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adfd418a25392d6bd66b.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adfe4e2bfc746691e447.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adff9912fe3913417ad5.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adff99cd602374ad11fe.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adff613a1e23490ca398.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adff3175d27c4d2f08e1.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/6587adff613a1e23490ca399.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 14,
            "propertyTitle": "1118 - 270 DUFFERIN ST",
            "propertyAddress": "Toronto, Ontario, Canada, M6K1Z6",
            "propertyPrice": "$550,000",
            "propertyDescription": "Property Profile\nBrand New, Never Lived-In 1Bed+Study Unit at Long-Awaited XO Condos At King St W & Dufferin! Amazingly Located Directly On Public Transit, 504 King St Streetcar, 29 Dufferin Bus And Has Stunning Amenities: Indoor & Outdoor Lounges, \"Think Tank\" Room, Spin Room, Rooftop Terrace, Concierge, Media Room And Much Much More! Come Home To A Place That Supports A Work-Life Balance.\nExtra info:\nBrand New Appliances: Stove, Microwave With Hood Fan, Integrated Refrigerator, Integrated Dishwasher And Stacked Washer & Dryer.\nHouse features:\nPublic Trans",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Heating Type: Forced Air"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "1"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "1"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/65875a48b7279b6e6cd5b310.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a48eeb71821cb715887.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a49c58e2e6e7a3a28f1.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a494e2bfc746691e226.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4ad79c1b319f1dd393.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4aad8aea7c97c79e10.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4a89e818472917ec73.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4a99cd602374ad0f5a.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 15,
            "propertyArea": "600-699",
            "propertyTitle": "3001 - 1926 LAKESHORE BLVD W",
            "propertyAddress": "Toronto, Ontario, Canada, M6S1A1",
            "propertyPrice": "$789,900",
            "propertyDescription": "Property Profile\nThe Mirabella Condos Offers One Of The Last Opportunities To Live Exclusively Near A Lake. One Bedroom Plus Den In Desired High Park And Lake Ontario Area. Excellent Layout With Large Den And Two Bathrooms. Large Den Can Be Used As A Second Bedroom. Stunning High Park View, And Plenty Of Natural Light. Open Concept Living With Walk Out To Balcony From Living Area With The Unobstructed Views Of High Park And Toronto. Excellent Location With Only Two Minutes Away From Gardiner Expressway, Walk To The Lake, High Park, Bike Trails, Restaurants, Stores All Within Walking Distance. World Class Amenities Include Gym, Pool, Sauna, Furnished Guest Suites, Barbeque Area, Outdoor Terrace, Working And Socializing Rooms, Security And 24 Hours Concierge Service.\nHouse features:\nClear View, Lake Access",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 1",
                "Garage/Parking Type: Other",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $3,073.99"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "2"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "2"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/65875a059912fe39134177f6.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a0699cd602374ad0f41.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a06cefb162ef3cf15fd.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a073175d27c4d2f0620.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a07d79c1b319f1dd37a.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a073175d27c4d2f0621.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a079912fe39134177f7.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a07f540667b2af02693.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 16,
            "propertyArea": "1200-1399",
            "propertyTitle": "306 - 5 ROWNTREE RD",
            "propertyAddress": "Toronto, Ontario, Canada, M9V5G9",
            "propertyPrice": "$499,900",
            "propertyDescription": "Property Profile\nBeautiful layout, very spacious, luxurious living on Humber River. Very clean unit overlooking front ravine. Big wrap around balcony. Ensuite laundry. 2 bedrooms & 2 full baths. Close to all amenities; Schools; York University, Major Hwy's, Library, Quick & convenient access to 400, 407, 401, York U, Humber College, Pearson Int'l Airport, shopping, parks & Finch LRT (due to open early 2024) Outdoor/Indoor Pool. Bbq Area, 4 Tennis Courts & Squash Court, Hiking & Biking Trail, All utilities plus cable included in maintenance fee.\nExtra info:\nAll Elf's, all window coverings, all appliances, fridge, stove, B/I dishwasher, washer/dryer.\nHouse features:\nHospital, Library",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 1",
                "Garage/Parking Type: Underground, Visitor Parking",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $1,205.95"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "2"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "2"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/65875a4cca3a3a2fd8dad4a0.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4ecefb162ef3cf1619.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4e9912fe3913417811.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4ef540667b2af026af.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4eb7279b6e6cd5b314.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4ec58e2e6e7a3a28f5.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4e99cd602374ad0f5d.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65875a4feeb71821cb71588a.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 17,
            "propertyTitle": "128 ALBRIGHT RD",
            "propertyAddress": "Brampton, Ontario, L6X5E6",
            "propertyPrice": "$849,000",
            "propertyDescription": "Property Profile\nTwo-story freehold townhouse situated in a highly desirable neighborhood. The residence features a double-door entry leading to a generous foyer, as well as a sliding door that opens to an extensive backyard. The home is thoughtfully designed with a distinct living room. Hardwood on the main floor Conveniently located, this property is in close proximity to both public and private schools, shopping plazas, parks, public transit, and the Go station. Nestled within the tranquil Fletcher's Creek Village community, this townhouse offers an unparalleled living experience.\nExtra info:\nFridge, Stove, Dishwasher, Washer, Dryer, CAC",
            "propertyFeatures": [
                "House Style: Attached/Townhouse",
                "Total Parking Spaces: 3",
                "Garage/Parking Type: Attached garage",
                "Heating Type: Forced Air",
                "Annual Property Taxes: $4,011"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "3"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "3"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/65883a429912fe3913417f1e.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a44d79c1b319f1dda33.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a44613a1e23490ca7d9.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a44c58e2e6e7a3a2e7f.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a4489e818472917f1d2.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a45b7279b6e6cd5b88d.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a453175d27c4d2f0d15.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883a45f540667b2af02d8e.jpeg?height=7969.000118747354"
            ]
        },
        {
            "id": 18,
            "propertyArea": "1000-1199",
            "propertyTitle": "6 - 232 BIRCH ST",
            "propertyAddress": "Campbell River, British Columbia, Canada, V9W2S3",
            "propertyPrice": "$415,000",
            "propertyDescription": "Property Profile\nThis 2 bed, 2 bath home has a covered entrance, modern colours, brand new stainless steel appliances, brand new electric fireplace, a glass partition in the dining area & trendy wooden beams in the living room. Updates include newer windows, new pvc all weather shed, new kitchen countertop, baseboard heaters, blinds, light fixtures, laminate flooring & both bathrooms have been transformed. There is in-floor heating on the main floor, storage under the stairs +5 appliances are included. It is rare when you can garden your front entry & enjoy your low maintenance, private fenced backyard with a patio & raised garden beds. The hospital, shopping & walking paths along the ocean are just down the road. If you are looking for the first place to call home, want a great investment property, downsizing, but desire the freedom to garden & keep your dog or cat, this could be the perfect home for you! Bonus: each unit has 2 open parking spaces & access to FREE RV parking at the end of the lane.\nExtra info:\nNew Shed, Fresh Modern Paint Colours, Room to Garden *For Additional Property Details Click The Brochure Icon Below*",
            "propertyFeatures": [
                "House Style: Apartment/Condo",
                "Total Parking Spaces: 2",
                "Heating Type: Baseboard",
                "Annual Property Taxes: $3,146"
            ],
            "features": [
                {
                    "id": 1,
                    "icon": bathroom,
                    "content": "2"
                },
                {
                    "id": 2,
                    "icon": bed,
                    "content": "2"
                },
                {
                    "id": 3,
                    "icon": villa,
                    "content": "Villa"
                }
            ],
            "propertyImages": [
                "https://storage.sub-ca.incomrealestate.com/65883acec58e2e6e7a3a2e9d.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883acbeeb71821cb715e35.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883acc0a9aec47a32e7454.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883accc58e2e6e7a3a2e9c.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883acc89e818472917f1ef.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883accb7279b6e6cd5b8ab.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883acca3bb036e92240a32.jpeg?height=7969.000118747354",
                "https://storage.sub-ca.incomrealestate.com/65883acdf6b6ba2f0377bedf.jpeg?height=7969.000118747354"
            ]
        }
    ]
}

export const testimonialsDetails = {
    title: 'What Our Clients Say',
    description: 'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.',
    testimonialsList: [
        {
            id: 1,
            rating: Array(5).fill(stareRating),
            title: 'Exceptional Service!',
            desc: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
            userName: 'Wade Warren',
            userAddress: 'USA, California',
            userImage: Profile1,
        },
        {
            id: 2,
            rating: Array(5).fill(stareRating),
            title: 'Efficient and Reliable',
            desc: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
            userName: 'Emelie Thomson',
            userAddress: 'USA, Florida',
            userImage: Profile2,
        },
        {
            id: 3,
            rating: Array(5).fill(stareRating),
            title: 'Trusted Advisors!',
            desc: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
            userName: 'John Mans',
            userAddress: 'USA, Nevada',
            userImage: Profile3,
        },
        {
            id: 4,
            rating: Array(5).fill(stareRating),
            title: 'Smooth Transaction!',
            desc: "We had a seamless experience with Estatein during the property transaction. Their attention to detail and communication were commendable. Highly satisfied!",
            userName: 'Sophie Carter',
            userAddress: 'USA, Texas',
            userImage: Profile1,
        },
        {
            id: 5,
            rating: Array(5).fill(stareRating),
            title: 'Responsive Team!',
            desc: "Estatein's team was quick to respond to our queries and concerns. Their proactive approach made the entire process stress-free. Great job!",
            userName: 'Andrew Davis',
            userAddress: 'USA, New York',
            userImage: Profile2,
        },
        {
            id: 6,
            rating: Array(5).fill(stareRating),
            title: 'Exceptional Negotiation Skills!',
            desc: "The negotiation skills of Estatein's team are exceptional. They negotiated a fantastic deal for us. Highly recommend their services!",
            userName: 'Olivia Parker',
            userAddress: 'USA, Illinois',
            userImage: Profile3,
        },
        {
            id: 7,
            rating: Array(5).fill(stareRating),
            title: 'Reliable Real Estate Partner',
            desc: "Estatein proved to be a reliable partner throughout our real estate journey. Their expertise and commitment set them apart. Thank you for the excellent service!",
            userName: 'Daniel Rodriguez',
            userAddress: 'USA, Arizona',
            userImage: Profile1,
        },
        {
            id: 8,
            rating: Array(5).fill(stareRating),
            title: 'Personalized Attention!',
            desc: "What stood out was Estatein's personalized approach. They truly understand their clients' needs and tailor their services accordingly. Impressed with the attention to detail!",
            userName: 'Isabella Garcia',
            userAddress: 'USA, Colorado',
            userImage: Profile2,
        },
        {
            id: 9,
            rating: Array(5).fill(stareRating),
            title: 'Timely Closing',
            desc: "Estatein ensured a timely closing for our property. Their efficiency and commitment to deadlines made the entire process smooth. Highly recommended for a hassle-free experience!",
            userName: 'Liam Smith',
            userAddress: 'USA, Washington',
            userImage: Profile3,
        },
        {
            id: 10,
            rating: Array(5).fill(stareRating),
            title: 'Professional and Trustworthy',
            desc: "Working with Estatein was a professional and trustworthy experience. Their integrity and transparency set them apart in the real estate industry. Satisfied with the results!",
            userName: 'Mia Johnson',
            userAddress: 'USA, Georgia',
            userImage: Profile1,
        },

    ]
}

export const FAQDetails = {
    title: 'Frequently Asked Questions',
    description: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
    faqList: [
        {
            id: 1,
            title: 'How do I search for properties on Estatein?',
            desc: 'Learn how to use our user-friendly search tools to find properties that match your criteria. Explore advanced search filters and tips for a seamless property search experience.',
        },
        {
            id: 2,
            title: 'What documents do I need to sell my property through Estatein?',
            desc: 'Find out about the necessary documentation for listing your property with us. We provide a comprehensive guide to ensure you have all the required paperwork for a successful property sale.',
        },
        {
            id: 3,
            title: 'How can I contact an Estatein agent?',
            desc: 'Discover the different ways you can get in touch with our experienced agents. Whether it\'s through phone, email, or in-person meetings, we offer multiple communication channels to connect you with our knowledgeable real estate professionals.',
        },
        {
            id: 4,
            title: 'What financing options are available for property buyers?',
            desc: 'Explore the various financing options available for property buyers on Estatein. From mortgage information to financing assistance programs, we provide valuable insights to help you make informed decisions.',
        },
        {
            id: 5,
            title: 'Can I schedule a property viewing with an Estatein agent?',
            desc: 'Learn about the process of scheduling property viewings with Estatein agents. We make it easy for you to explore homes and make informed decisions with the assistance of our dedicated real estate professionals.',
        },
        {
            id: 6,
            title: 'Are there any fees associated with using Estatein\'s services?',
            desc: 'Understand the fees and charges associated with using Estatein\'s services. We believe in transparency, and our FAQ section provides clarity on any costs related to buying, selling, or renting properties through our platform.',
        },
        {
            id: 7,
            title: 'What makes Estatein different from other real estate platforms?',
            desc: 'Discover the unique features and advantages that set Estatein apart from other real estate platforms. From cutting-edge technology to personalized services, we aim to provide an exceptional real estate experience for our users.',
        },
        {
            id: 8,
            title: 'How does Estatein ensure the security of user data?',
            desc: 'Learn about the robust security measures implemented by Estatein to safeguard user data. Our commitment to data protection ensures a secure and confidential experience for all users.',
        },
        {
            id: 9,
            title: 'Is there a mobile app for accessing Estatein on the go?',
            desc: 'Explore the convenience of accessing Estatein on your mobile device. Learn about our user-friendly mobile app that allows you to stay connected with the latest property listings and updates while on the go.',
        },
        {
            id: 10,
            title: 'What types of properties are listed on Estatein?',
            desc: 'Discover the diverse range of properties available on Estatein. From residential homes to commercial spaces, our platform offers a wide variety of real estate listings to suit different preferences and needs.',
        },
    ]

}

export const CTADetails = {
    title: 'Start Your Real Estate Journey Today',
    description: "Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance."

}

export const footerData = {
    pagesLinks: [
        { page: 'Home', pageLink: '/' },
        { page: 'About', pageLink: 'about' },
        { page: 'Properties', pageLink: 'properties' },
        { page: 'Services', pageLink: 'services' },
        { page: 'Contact', pageLink: 'contact' }
    ],
    copyright: {
        text1: '@2023 Estatein. All Rights Reserved. programmed by: AbdellahGX',
        text2: 'Terms & Conditions',
        socialMedia: [
            { id: 1, socialLink: 'https://www.facebook.com/profile.php?id=100053501469803', icon: facebook },
            { id: 2, socialLink: 'https://ae.linkedin.com/', icon: linkedin },
            { id: 3, socialLink: 'https://twitter.com/AXGflash', icon: twitter },
            { id: 4, socialLink: 'https://www.youtube.com/', icon: youtube },
        ]
    },
    links: [
        [
            {
                id: 1,
                content: 'Hero Section',
                link: 'hero_section'
            },
            {
                id: 2,
                content: 'Features',
                link: 'features'
            },
            {
                id: 3,
                content: 'Properties',
                link: 'properties'
            },
            {
                id: 4,
                content: 'Testimonials',
                link: 'testimonials'
            },
            {
                id: 5,
                content: "FAQ's",
                link: 'faq'
            },
        ],
        [
            {
                id: 1,
                content: 'Our Story',
                link: 'our_story',
            },
            {
                id: 2,
                content: 'Our Works',
                link: 'our_works'
            },
            {
                id: 3,
                content: 'How It Works',
                link: 'how_it_works'
            },
            {
                id: 4,
                content: 'Our Team',
                link: 'our_team'
            },
            {
                id: 5,
                content: "Our Clients",
                link: 'our_clients'
            },
        ],
        [
            {
                id: 1,
                content: 'Search & Filter',
                link: 'search_and_Filter'
            },
            {
                id: 2,
                content: 'Make it Happen',
                link: 'make_it_happen'
            },
        ],
        [
            {
                id: 1,
                content: 'Valuation Mastery',
                link: 'valuation_mastery'
            },
            {
                id: 2,
                content: 'Strategic Marketing',
                link: 'strategic_marketing'
            },
            {
                id: 3,
                content: 'Negotiation Wizardry',
                link: 'negotiation_wizardry'
            },
            {
                id: 4,
                content: 'Closing Success',
                link: 'closing_success'
            },
            {
                id: 5,
                content: "Property Management",
                link: 'property_management'
            },
        ],
        [
            {
                id: 1,
                content: 'Contact Form',
                link: 'contact_form'
            },
            {
                id: 2,
                content: 'Our Offices',
                link: 'our_offices'
            },
        ],
    ]
}

export const ourJourneyData = {
    title: 'Our Journey',
    description: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.",
    stats: [
        {
            id: 1,
            number: '200+',
            text: 'Happy Customers',
        },
        {
            id: 2,
            number: '10k+',
            text: 'Properties For Clients',
        },
        {
            id: 3,
            number: '16+',
            text: 'Years of Experience',
        },
    ],
}

export const ourValuesDate = {
    title: 'Our Values',
    description: 'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.',
    valuesList: [
        [
            {
                id: 1,
                icon: purpleStar,
                title: 'Trust',
                desc: 'Trust is the cornerstone of every successful real estate transaction.'
            },
            {
                id: 2,
                icon: hat,
                title: 'Excellence',
                desc: 'We set the bar high for ourselves. From the properties we list to the services we provide.'
            },
        ],
        [
            {
                id: 3,
                icon: people,
                title: 'Client-Centric',
                desc: 'Your dreams and needs are at the center of our universe. We listen, understand.'
            },
            {
                id: 4,
                icon: purpleStar,
                title: 'Our Commitment',
                desc: 'We are dedicated to providing you with the highest level of service, professionalism, and support.'
            }
        ]

    ]
}

export const ourAchievementsData = {
    title: 'Our Achievements',
    description: "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.",
    achievementsList: [
        {
            id: 1,
            title: '3+ Years of Excellence',
            desc: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
        },
        {
            id: 2,
            title: 'Happy Clients',
            desc: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.'
        },
        {
            id: 3,
            title: 'Industry Recognition',
            desc: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
        },
    ]
}

export const howItWorksData = {
    title: 'Navigating the Estatein Experience',
    description: "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.",
    howItWorksList: [
        {
            id: 1,
            title: 'Discover a World of Possibilities',
            desc: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.'
        },
        {
            id: 2,
            title: 'Narrowing Down Your Choices',
            desc: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
        },
        {
            id: 3,
            title: 'Personalized Guidance',
            desc: 'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.'
        },
        {
            id: 4,
            title: 'See It for Yourself',
            desc: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
        },
        {
            id: 5,
            title: 'Making Informed Decisions',
            desc: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice."
        },
        {
            id: 6,
            title: 'Getting the Best Deal',
            desc: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms."
        },
    ]
}


export const ourTeamData = {
    title: 'Meet the Estatein Team',
    description: 'At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.',
    ourTeamList: [
        {
            id: 1,
            personName: 'Max Mitchell',
            job: 'Founder',
            image: image1
        },
        {
            id: 2,
            personName: 'Sarah Johnson',
            job: 'Chief Real Estate Officer',
            image: image2
        },
        {
            id: 3,
            personName: 'David Brown',
            job: 'Head of Property Management',
            image: image3
        },
        {
            id: 4,
            personName: 'Michael Turner',
            job: 'Legal Counsel',
            image: image4
        },
    ]
}


export const ourClientsData = {
    title: 'Our Valued Clients',
    description: "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving",
    ourClientsList: [
        {
            id: 1,
            date: 'Since 2019',
            companyName: 'ABC Corporation',
            info: [
                { id: 1, icon: checkerboard, value: 'Commercial Real Estate', },
                { id: 2, icon: lightning, value: 'Luxury Home Development', }
            ],
            opinion: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
        },
        {
            id: 2,
            date: 'Since 2023',
            companyName: 'GreenTech Enterprises',
            info: [
                { id: 1, icon: checkerboard, value: 'Commercial Real Estate', },
                { id: 2, icon: lightning, value: 'Retail Space', }
            ],
            opinion: "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
        },
        {
            id: 3,
            date: 'Since 2021',
            companyName: 'Tech Innovations Inc.',
            info: [
                { id: 1, icon: checkerboard, value: 'Technology', },
                { id: 2, icon: lightning, value: 'Corporate Headquarters', }
            ],
            opinion: "Estatein played a crucial role in securing a modern corporate headquarters for us. Their attention to detail and understanding of tech infrastructure requirements set them apart.",
        },
        {
            id: 4,
            date: 'Since 2019',
            companyName: 'Global Finance Group',
            info: [
                { id: 1, icon: checkerboard, value: 'Finance', },
                { id: 2, icon: lightning, value: 'Office Space', }
            ],
            opinion: "We have been working with Estatein for several years, and their commitment to finding suitable office spaces for our teams globally has been consistently impressive.",
        },
        {
            id: 5,
            date: 'Since 2021',
            companyName: 'Innovate Solutions',
            info: [
                { id: 1, icon: checkerboard, value: 'Technology', },
                { id: 2, icon: lightning, value: 'Research and Development Facility', }
            ],
            opinion: "Estatein's support in establishing our state-of-the-art research and development facility was instrumental. They exceeded our expectations in every aspect.",
        },
        {
            id: 6,
            date: 'Since 2020',
            companyName: 'MedicalCare Group',
            info: [
                { id: 1, icon: checkerboard, value: 'Healthcare', },
                { id: 2, icon: lightning, value: 'Medical Clinics', }
            ],
            opinion: "Estatein's knowledge of healthcare real estate proved invaluable as they helped us find suitable locations for our medical clinics. Their understanding of compliance requirements was commendable.",
        },
        {
            id: 7,
            date: 'Since 2022',
            companyName: 'GreenEnergy Solutions',
            info: [
                { id: 1, icon: checkerboard, value: 'Renewable Energy', },
                { id: 2, icon: lightning, value: 'Facility Expansion', }
            ],
            opinion: "Estatein's assistance in expanding our renewable energy facilities was crucial to our mission. Their commitment to sustainable solutions aligns perfectly with our values.",
        },
        {
            id: 8,
            date: 'Since 2022',
            companyName: 'Education Innovators',
            info: [
                { id: 1, icon: checkerboard, value: 'Education', },
                { id: 2, icon: lightning, value: 'Campus Development', }
            ],
            opinion: "Estatein's support in developing our educational campuses has been outstanding. They understand the unique requirements of educational institutions and deliver results with precision.",
        },
        {
            id: 9,
            date: 'Since 2023',
            companyName: 'Artistic Studios',
            info: [
                { id: 1, icon: checkerboard, value: 'Artistic Studios', },
                { id: 2, icon: lightning, value: 'Arts and Entertainment', }
            ],
            opinion: "Estatein's expertise in identifying creative spaces for our artistic endeavors has been a game-changer. They have a keen eye for unique and inspiring locations.",
        },
        {
            id: 10,
            date: 'Since 2022',
            companyName: 'Fashion Trends Co.',
            info: [
                { id: 1, icon: checkerboard, value: 'Fashion', },
                { id: 2, icon: lightning, value: 'Showroom and Design Spaces', }
            ],
            opinion: "Our long-standing partnership with Estatein has been integral to our success in the fashion industry. Their ability to find stylish and functional showroom spaces is unparalleled.",
        },
    ]
}

export const servicesHeaderSectionData = {
    title: 'Elevate Your Real Estate Experience',
    description: 'Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.',
    id: 'valuation_mastery',
    servicesList: [
        {
            id: 1,
            icon: shop,
            link: '',
            page: '/properties',
            serviceTitle: 'Find Your Dream Home'
        },
        {
            id: 2,
            icon: money,
            link: 'negotiation_wizardry',
            page: '/services',
            serviceTitle: 'Unlock Property Value'
        },
        {
            id: 3,
            icon: building,
            link: 'property_management',
            page: '/services',
            serviceTitle: 'Effortless Property Management'
        },
        {
            id: 4,
            icon: sun,
            link: 'closing_success',
            page: '/services',
            serviceTitle: 'Smart Investments, Informed Decisions'
        },
    ]
}

export const valuesData = {
    title: 'Unlock Property Value',
    description: 'Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey',
    title2: 'Unlock the Value of Your Property Today',
    description2: 'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.',
    link: '/properties',
    valuesList: [
        {
            id: 1,
            icon: signal,
            ValueTitle: 'Valuation Mastery',
            desc: 'Discover the true worth of your property with our expert valuation services.'
        },
        {
            id: 2,
            icon: circularStatistics,
            ValueTitle: 'Strategic Marketing',
            desc: 'Selling a property requires more than just a listing; it demands a strategic marketing approach.'
        },
        {
            id: 3,
            icon: dataBase,
            ValueTitle: 'Negotiation Wizardry',
            desc: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.'
        },
        {
            id: 4,
            icon: magnifier,
            ValueTitle: 'Closing Success',
            desc: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.'
        },
    ],
}

export const managementFeaturesData = {
    title: 'Effortless Property Management',
    description: "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you",
    title2: 'Experience Effortless Property Management',
    description2: "Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.",
    link: '/properties',
    managementFeaturesList: [
        {
            id: 1,
            icon: chessBoardPlus,
            ValueTitle: 'Tenant Harmony',
            desc: 'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.'
        },
        {
            id: 2,
            icon: tags,
            ValueTitle: 'Maintenance Ease',
            desc: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.'
        },
        {
            id: 3,
            icon: magicStars,
            ValueTitle: 'Financial Peace of Mind',
            desc: 'Managing property finances can be complex. Our financial experts take care of rent collection'
        },
        {
            id: 4,
            icon: sun,
            ValueTitle: 'Legal Guardian',
            desc: 'Stay compliant with property laws and regulations effortlessly.'
        },
    ],
}


export const investmentsFeaturesData = {
    title: 'Smart Investments, Informed Decisions',
    description: "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",
    title2: 'Unlock Your Investment Potential',
    description2: 'Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.',
    link: '/properties',
    investmentsFeaturesList: [
        {
            id: 1,
            icon: signal,
            title: 'Market Insight',
            desc: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
        },
        {
            id: 2,
            icon: fire,
            title: 'ROI Assessment',
            desc: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
        },
        {
            id: 3,
            icon: lamp,
            title: 'Customized Strategies',
            desc: 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
        },
        {
            id: 4,
            icon: sun,
            title: 'Diversification Mastery',
            desc: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
        },
    ]

}

export const propertiesHeaderData = {
    title: 'Find Your Dream Property',
    description: 'Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey',
}


export const contactUsHeaderData = {
    title: 'Get in Touch with Estatein',
    description: "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
    headerList: [
        {
            id: 1,
            link: 'our_offices',
            icon: purpleMessage,
            title: 'info@estatein.com'
        },
        {
            id: 2,
            link: 'our_offices',
            icon: phone,
            title: 'info@estatein.com'
        },
        {
            id: 3,
            link: 'our_offices',
            icon: location,
            title: 'info@estatein.com'
        },
        {
            id: 4,
            link: 'our_offices',
            icon: miniLogo,
            links: [
                { id: 1, link: 'https://www.instagram.com/', title: 'Instagram' },
                { id: 2, link: 'https://www.linkedin.com/', title: 'LinkedIn' },
                { id: 3, link: 'https://www.facebook.com/', title: 'Facebook' },
            ]
        },
    ]

}

export const ourOfficesData = {
    title: 'Discover Our Office Locations',
    description: "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you",
    filter: [
        { id: 1, title: 'All', value: 'all' },
        { id: 2, title: 'Regional', value: 'regional' },
        { id: 3, title: 'International', value: 'international' },
    ],
    officesList: [
        {
            id: 1,
            type: 'Main Headquarters',
            value: 'international',
            title: '123 Estatein Plaza, City Center, Metropolis',
            desc: 'Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.',
            link: 'https://www.google.com/search?q=123EstateinPlazaCityCenterMetropolis',
            contact: [
                { id: 1, title: 'info@estatein.com', icon: whiteMessage },
                { id: 2, title: '+1 (123) 456-7890', icon: whitePhone },
                { id: 3, title: 'Metropolis', icon: whiteLocation },
            ]
        },
        {
            id: 2,
            type: 'Regional Offices',
            value: 'regional',
            title: '456 Urban Avenue, Downtown District, Metropolis',
            desc: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
            link: 'https://www.google.com/search?q=456UrbanAvenueDowntownDistrictMetropolis',
            contact: [
                { id: 1, title: 'info@restatein.com', icon: whiteMessage },
                { id: 2, title: '+1 (123) 628-7890', icon: whitePhone },
                { id: 3, title: 'Metropolis', icon: whiteLocation },
            ]
        },
    ]

}

export const estateinsWorldData = {
    title: "Explore Estatein's World",
    description: 'Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.'
}

export const contactFormData = {
    title: "Let's Connect",
    description: "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.",
    inputsList1: [
        { id: 1, type: 'text', placeholder: 'Enter First Name', label: 'First Name' },
        { id: 2, type: 'text', placeholder: 'Enter Last Name', label: 'Last Name' },
        { id: 3, type: 'email', placeholder: 'Enter your Email', label: 'Email' },
    ],
    inputsList2: [
        { id: 4, type: 'number', placeholder: 'Enter Phone Number', label: 'Phone' },
        {
            id: 5,
            type: 'select',
            placeholder: 'Select Inquiry Type',
            label: 'Inquiry Type',
            options: [
                { id: 1, value: 'property', text: 'Property Inquiry' },
                { id: 2, value: 'appointment', text: 'Appointment Request' },
                { id: 3, value: 'general', text: 'General Information Request' },
                { id: 4, value: 'mortgage', text: 'Mortgage Inquiry' },
            ]
        },
        {
            id: 6,
            type: 'select',
            placeholder: 'Select',
            label: 'How Did You Hear About Us?',
            options: [
                { id: 1, value: 'internet', text: 'Internet Search' },
                { id: 2, value: 'social_media', text: 'Social Media' },
                { id: 3, value: 'friend', text: 'From a Friend' },
                { id: 4, value: 'other', text: 'Other' },
            ]
        },
    ]
}

export const propertyContactFormData = {
    title: 'Inquire About Seaside Serenity Villa',
    description: 'Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.',
    inputsList: [
        {
            id: 1,
            label: 'First Name',
            placeholder: 'Enter First Name',
            type: 'text'
        },
        {
            id: 2,
            label: 'Last Name',
            placeholder: 'Enter Last Name',
            type: 'text'
        },
        {
            id: 3,
            label: 'Email',
            placeholder: 'Enter your Email',
            type: 'email'
        },
        {
            id: 4,
            label: 'Phone',
            placeholder: 'Enter Phone Number',
            type: 'number'
        },
    ]
}


export const pricingDetailsData = {
    title: 'Comprehensive Pricing Details',
    description: "At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision",
    note: 'The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.',
    additionalFees: {
        title: 'Additional Fees',
        list: [
            {
                id: 1,
                title: 'Property Transfer Tax',
                price: '$25,000',
                note: 'Based on the sale price and local regulations'
            },
            {
                id: 2,
                title: 'Legal Fees',
                price: '$3,000',
                note: 'Approximate cost for legal services, including title transfer'
            },
            {
                id: 3,
                title: 'Home Inspection',
                price: '$500',
                note: 'Recommended for due diligence'
            },
            {
                id: 4,
                title: 'Property Insurance',
                price: '$1,200',
                note: 'Annual cost for comprehensive property insurance'
            },
            {
                id: 5,
                title: 'Mortgage Fees',
                price: 'Varies',
                note: 'If applicable, consult with your lender for specific details'
            },
        ]
    },
    monthlyCosts: {
        title: 'Monthly Costs',
        list: [
            {
                id: 1,
                title: 'Property Taxes',
                price: '$1,250',
                note: 'Approximate monthly property tax based on the sale price and local rates'
            },
            {
                id: 2,
                title: "Homeowners' Association Fee",
                price: '$300',
                note: 'Monthly fee for common area maintenance and security'
            },
        ]
    },
    totalInitialCosts: {
        title: 'Total Initial Costs',
        list: [
            {
                id: 1,
                title: 'Listing Price',
                price: '$1,250,000',
            },
            {
                id: 2,
                title: 'Additional Fees',
                price: '$29,700',
                note: 'Property transfer tax, legal fees, inspection, insurance'
            },
            {
                id: 3,
                title: 'Down Payment',
                price: '$250,000',
                note: '20%'
            },
            {
                id: 4,
                title: 'Mortgage Amount',
                price: '$1,000,000',
                note: 'If applicable'
            },
        ]
    },
    monthlyExpenses: {
        title: 'Monthly Expenses',
        list: [
            {
                id: 1,
                title: 'Property Taxes',
                price: '$1,250',
            },
            {
                id: 2,
                title: "Homeowners' Association Fee",
                price: '$300',
                note: 'Property transfer tax, legal fees, inspection, insurance'
            },
            {
                id: 3,
                title: 'Mortgage Payment',
                price: 'Varies based on terms and interest rate',
                note: 'If applicable'
            },
            {
                id: 4,
                title: 'Property Insurance',
                price: '$100',
                note: 'Approximate monthly coste'
            },
        ]
    },
}
