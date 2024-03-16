import { useState } from 'react'
import TopBanner from './TopBanner'
import NoFusion from './NoFusion'
import MyClassic from './MyClassic'
function App() {
  return (
    <div>
      <TopBanner/>
      <MyClassic/>
      <NoFusion/>
      <div className='h-[900px]'></div>
    </div>
  )
}

export default App
