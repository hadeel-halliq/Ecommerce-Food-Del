import { useContext } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../Context/StoreContext'
// import { useState } from 'react'

export default function FoodItem({id,name,price,description,image}) {

  // const [itemCount, setItemCount] = useState(0)
  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img src={image} className='food-item-img'/>
        {/* {
          itemCount  === 0
          ? <img className='add' src={assets.add_icon_white} onClick={() => setItemCount(pre => pre +1 )}/>
          : <div className='food-item-counter'>
            <img src={assets.remove_icon_red} onClick={()=> setItemCount(pre => pre - 1)}/>
            <p>{itemCount}</p>
            <img src={assets.add_icon_green} onClick={() => setItemCount(pre => pre + 1)}/>
          </div>
        } */}
        { !cartItems[id]
          ? <img className='add' src={assets.add_icon_white} onClick={() => addToCart(id)}/>
          : <div className='food-item-counter'>
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)}/>
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} onClick={() => addToCart(id)}/>
            </div>
        }
      </div>
      <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

// 1:40