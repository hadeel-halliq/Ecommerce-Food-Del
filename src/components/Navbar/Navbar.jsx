import './Navbar.css'
import { assets } from '../../assets/assets'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

export default function Navbar ({setShowLogin}) {

    const [menu, setMenu] = useState("Home")
    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'><img  src={assets.logo} className='logo'/></Link>
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("Home")} className={menu === "Home"? "active": ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("Menu")} className={menu === "Menu"? "active": ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("Mobile-Up")} className={menu === "Mobile-Up"? "active": ""}>Mobile-Up</a>
        <a href='#footer' onClick={() => setMenu("Contact Us")} className={menu === "Contact Us"? "active": ""}>Contact Us</a>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon}/>
        <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} className='basket_icon' /></Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}


