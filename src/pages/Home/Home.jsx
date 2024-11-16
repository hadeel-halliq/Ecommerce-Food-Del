import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import './Home.css'
import FoodDispaly from '../../components/FoodDisplay/FoodDispaly'
import { useState } from 'react'
import AppDownload from '../../components/ِAppDownload/AppDownload'

export default function Home() {
  
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDispaly category={category}/>
      <AppDownload/>
    </div>
  )
}

