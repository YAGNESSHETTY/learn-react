import { RestaurantCard } from "./RestaurantCard"
// import { restaurants } from "../utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
export const Body = () => {
    let [resList , setResList] = useState([]) ;
    let [filterResList , setFilterResList] = useState([]) ;
    let [searchText , setSearchText] = useState("") ;

    useEffect( () => {
        fetchData() ;
    } , []) ;

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        ) ;

        const json = await data.json() ;
        console.log(json)  ;
        let newResList = (json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) ;
        setResList(newResList) ;
        setFilterResList(newResList) ;

    } ;

    if(resList.length === 0){
        return <Shimmer/>;
    }
 
    return (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                    onChange={ (e)=>{
                        setSearchText(e.target.value) ;
                    } }>
                    </input>
                    <button onClick={ ()=>{
                        const filteredRes = resList.filter( (res)=>{
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
                        }) ;
                        setFilterResList(filteredRes) ;
                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    console.log(resList);
                    const newReslist = resList.filter((res)=> res.info.avgRating > 4) ;
                    setFilterResList(newReslist) ;
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {
                    filterResList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData = {restaurant}/> )
                }
            </div>
        </div>
    )
}