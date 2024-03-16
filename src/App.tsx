import { useState } from 'react'
import TopBanner from './TopBanner'
import NoFusion from './NoFusion'
import MyClassic from './MyClassic'
import { useRef } from 'react'
function App() {
  let myClassicRef = useRef(null)
  let noFusionRef = useRef(null)
  return (
    <div>
      <TopBanner ref1 = {myClassicRef} ref2 = {noFusionRef}/>
      <MyClassic ref={myClassicRef}/>
      <NoFusion ref={noFusionRef}/>
      <div className='h-[900px]'></div>
    </div>
  )
}

export default App
