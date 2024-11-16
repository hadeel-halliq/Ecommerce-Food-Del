import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


export default function FoodDispaly ({category}) {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-dispaly'>
      <h2>Top diehes near you</h2>
      <div className='food-dispaly-list'>
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category){
             return <FoodItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} description={item.description} category={item.category}/>
          }
        })}
      </div>
    </div>
  )
}


