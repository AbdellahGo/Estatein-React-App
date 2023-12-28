import { money, sun, building, shop, bed, bathroom, villa, Profile1, Profile2, Profile3, stareRating, facebook, twitter, linkedin, youtube } from '../assets'

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
            serviceTitle: 'Find Your Dream Home'
        },
        {
            id: 2,
            icon: money,
            serviceTitle: 'Unlock Property Value'
        },
        {
            id: 3,
            icon: building,
            serviceTitle: 'Effortless Property Management'
        },
        {
            id: 4,
            icon: sun,
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
        {page: 'Home', pageLink: '/'},
        {page: 'About', pageLink: 'about'},
        {page: 'Properties', pageLink: 'properties'},
        {page: 'Services', pageLink: 'services'},
        {page: 'Contact', pageLink: 'contact'}
    ],
    copyright: {
        text1: '@2023 Estatein. All Rights Reserved. programmed by: AbdellahGX',
        text2: 'Terms & Conditions',
        socialMedia: [
            {id: 1, socialLink: 'https://www.facebook.com/profile.php?id=100053501469803', icon: facebook},
            {id: 2, socialLink: 'https://ae.linkedin.com/', icon: linkedin},
            {id: 3, socialLink: 'https://twitter.com/AXGflash', icon: twitter},
            {id: 4, socialLink: 'https://www.youtube.com/', icon: youtube},
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
                link: 'our_story'
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
                content: 'Portfolio',
                link: 'portfolio'
            },
            {
                id: 2,
                content: 'Categories',
                link: 'categories'
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