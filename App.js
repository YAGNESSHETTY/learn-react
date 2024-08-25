import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' alt='res-logo' src="data:image/jpeg;base64,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"/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const restaurants = [
    {
    "info": {
        "id": "830418",
        "name": "Indian Coffee House",
        "cloudinaryImageId": "2469fa88ee9b0b5d1366ba88f2a7fa7f",
        "locality": "Chhindwara City",
        "areaName": "Khajri Chowk",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Fast Food",
        "Beverages"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "106448",
        "avgRatingString": "4.6",
        "totalRatingsString": "50+",
        "sla": {
        "deliveryTime": 48,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-08-24 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/indian-coffee-house-city-khajri-chowk-chhindwara-830418",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "870899",
        "name": "Paras Mishthan",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/15/9de3a721-5e96-41d2-bb3e-3cbeff47fbd3_870899.jpg",
        "locality": "Nagarpalika Complex",
        "areaName": "Chhindwara City",
        "costForTwo": "₹150 for two",
        "cuisines": [
        "Beverages",
        "Sweets",
        "Snacks"
        ],
        "avgRating": 4,
        "veg": true,
        "parentId": "510613",
        "avgRatingString": "4.0",
        "totalRatingsString": "20+",
        "sla": {
        "deliveryTime": 51,
        "lastMileTravel": 11.2,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "11.2 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-08-24 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹59"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/paras-mishthan-nagarpalika-complex-chhindwara-city-chhindwara-870899",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "672945",
        "name": "Annu's Kitchen's Queen Of Paratha",
        "cloudinaryImageId": "dd519572ed1bed19de47e94186e743ea",
        "locality": "Teacher's Colony",
        "areaName": "Chhindwara City",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "402960",
        "avgRatingString": "4.6",
        "totalRatingsString": "50+",
        "sla": {
        "deliveryTime": 65,
        "lastMileTravel": 13.7,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "13.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-08-24 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/annus-kitchens-queen-of-paratha-teachers-colony-chhindwara-city-chhindwara-672945",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "549580",
        "name": "Fresh Meal's",
        "cloudinaryImageId": "v5e3atn9tmtgcca1onnr",
        "locality": "Teacher's Colony",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "North Indian",
        "South Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "15219",
        "avgRatingString": "4.3",
        "totalRatingsString": "50+",
        "sla": {
        "deliveryTime": 61,
        "lastMileTravel": 13.6,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "13.6 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-08-24 23:00:00",
        "opened": true
        },
        "badges": {
        
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/fresh-meals-teachers-colony-chhindwara-city-chhindwara-549580",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "509851",
        "name": "Magic Momo",
        "cloudinaryImageId": "dh0qsuqritnmbncwrni3",
        "locality": "Parasia Road",
        "areaName": "Prasia Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Momos",
        "Chinese"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "129345",
        "avgRatingString": "4.2",
        "totalRatingsString": "20+",
        "sla": {
        "deliveryTime": 66,
        "lastMileTravel": 12.3,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "12.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-08-24 22:30:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/magic-momo-parasia-road-prasia-road-chhindwara-509851",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "795047",
        "name": "New Radhey Shyam Choule Bhature Delhi Wala",
        "cloudinaryImageId": "0adf25c57357161b20c11281d8a443e6",
        "locality": "VIP Road",
        "areaName": "Mohan Nagar",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Snacks",
        "Chinese"
        ],
        "avgRating": 2.9,
        "veg": true,
        "parentId": "475337",
        "avgRatingString": "2.9",
        "totalRatingsString": "3",
        "sla": {
        "deliveryTime": 62,
        "lastMileTravel": 11.3,
        "serviceability": "SERVICEABLE",
        "slaString": "60-65 mins",
        "lastMileTravelString": "11.3 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-08-24 23:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
            {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
            }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            "badgeObject": [
                {
                "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
                }
            ]
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/new-radhey-shyam-choule-bhature-delhi-wala-vip-road-mohan-nagar-chhindwara-795047",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "912754",
        "name": "Urban Cafe",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
        "locality": "SOUTH CIVIL LINE",
        "areaName": "Chhindwara City",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Snacks",
        "Pizzas",
        "Pastas",
        "Fast Food",
        "Burgers",
        "Cafe"
        ],
        "avgRating": 3.4,
        "veg": true,
        "parentId": "1330",
        "avgRatingString": "3.4",
        "totalRatingsString": "2",
        "sla": {
        "deliveryTime": 66,
        "lastMileTravel": 11.4,
        "serviceability": "SERVICEABLE",
        "slaString": "65-70 mins",
        "lastMileTravelString": "11.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextOpenTimeMessage": "Opens next at 11 am, today"
        },
        "badges": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/urban-cafe-south-civil-line-chhindwara-city-chhindwara-912754",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    "info": {
        "id": "195429",
        "name": "Sanju Ka Dhaba",
        "cloudinaryImageId": "hjao7sorzggaeqito6au",
        "locality": "Vishnu Nagar",
        "areaName": "Prasia Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "North Indian",
        "South Indian",
        "Chinese"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "177443",
        "avgRatingString": "4.4",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 14,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "14.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextOpenTimeMessage": "Opens next at 11 am, today"
        },
        "badges": {
        
        },
        "type": "F",
        "badgesV2": {
        "entityBadges": {
            "imageBased": {
            
            },
            "textBased": {
            
            },
            "textExtendedBadges": {
            
            }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "orderabilityCommunication": {
        "title": {
            
        },
        "subTitle": {
            
        },
        "message": {
            
        },
        "customIcon": {
            
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
            
            },
            "video": {
            
            }
        }
        },
        "reviewsSummary": {
        
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
        
        },
        "externalRatings": {
        "aggregatedRating": {
            "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-22eb4437-7e69-4e94-b798-8b1d09f8a139"
    },
    "cta": {
        "link": "https://www.swiggy.com/restaurants/sanju-ka-dhaba-vishnu-nagar-prasia-road-chhindwara-195429",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const RestaurantCard = ({resData}) => {
    const {name , cloudinaryImageId , avgRating , cuisines } = resData.info ;
    const {deliveryTime} = resData.info.sla ;
    return (
        <div className='res-card'>
            <img className='res-logo' alt='res-logo' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating : {avgRating}</h4>
            <h4>Delivery Time : {deliveryTime}</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='Search'>Search</div>
            <div className='res-container'>
                {
                    restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/> )}
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root")) ;

root.render(<AppLayout/>) ;