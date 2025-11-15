import React from 'react'
import Hero from '../Components/Home/Hero'
import Shop from '../Components/Home/Shop'
import MayAlsoLike from '../Components/Home/MayAlsoLike'
import Loader from '../Components/Reusable/Loader'

function Home() {
  return (<>
{/* <Loader/> */}
  <div className=""><Hero/></div>
  <div className=""><Shop/></div>
  <div className=""><MayAlsoLike/></div>
  
  
  
  </>
  )
}

export default Home