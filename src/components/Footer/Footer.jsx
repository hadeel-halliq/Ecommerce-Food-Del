import './Footer.css'
import { assets } from '../../assets/assets'
export default function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.logo}/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit rerum voluptates ipsum cupiditate pariatur culpa unde sunt fugiat harum? Quis quasi dolor qui dignissimos ipsa accusantium ducimus aperiam molestias unde?</p>
            <div className='footer-social-icon'>
                <img src={assets.facebook_icon}/>
                <img src={assets.twitter_icon}/>
                <img src={assets.linkedin_icon}/>
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
            <h2>GEt IN TOUCH</h2>
            <ul>
                <li>+963 998 046 636</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}
