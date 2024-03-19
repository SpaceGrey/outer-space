import { useEffect, useState } from 'react'
import TopBanner from './TopBanner'
import NoFusion from './NoFusion'
import MyClassic from './MyClassic'
import WordLinker from './WordLinker'
import Contact from './Contact'
import { useRef } from 'react'
import Alert from '@mui/material/Alert';
import ExplainPage from './ExplainPage'
import "./App.css"
function App() {
  let myClassicRef = useRef(null)
  let noFusionRef = useRef(null)
  let wordLinkerRef = useRef(null)
  const [showOverlay,setOverlay] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 2000)
    }

  }, [showAlert])
  return (
    <div>
      <TopBanner ref1={myClassicRef} ref2={noFusionRef} ref3={wordLinkerRef} />
      <MyClassic ref={myClassicRef} setShowAlert={setShowAlert} setOverlay={setOverlay} />
      <div className={`fixed top-16 z-50 transition duration-[1s] ease-out ${showAlert ? "-translate-x-0" : "-translate-x-full"}`}>
        <Alert severity="info">Still working on it</Alert>
      </div>
      <NoFusion ref={noFusionRef} setShowAlert={setShowAlert} />
      <WordLinker ref={wordLinkerRef} setShowAlert={setShowAlert} />
      <Contact />
      {showOverlay && <div className={`fixed top-0 left-0 z-50 transition-all ${showOverlay ? "opacity-100" : "opacity-0"}`}>
      <ExplainPage cancel={()=>{setOverlay(false)}}/>
      </div>}
    </div>
  )
}

export default App
