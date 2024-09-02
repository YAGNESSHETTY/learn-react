import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({resData}) => {
    const {name , cloudinaryImageId , avgRating , cuisines } = resData?.info ;
    const {deliveryTime} = resData.info.sla ;
    return (
        <div className='res-card'>
            <img className='res-logo' alt='res-logo' src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating : {avgRating}</h4>
            <h4>Delivery Time : {deliveryTime}</h4>
        </div>
    )
}