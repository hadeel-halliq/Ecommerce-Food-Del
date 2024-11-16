import './AppDownload.css'
import { assets } from '../../assets/assets'

export default function AppDownload() {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br/> Tomato App</p>
      <div className='app-downlaod-platforms'>
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  )
}
