import { useEffect, useState } from 'react'
import TopBanner from './TopBanner'
import NoFusion from './NoFusion'
import MyClassic from './MyClassic'
import WordLinker from './WordLinker'
import Contact from './Contact'
import { useRef } from 'react'
import Alert from '@mui/material/Alert';
import "./App.css"
function App() {
  let myClassicRef = useRef(null)
  let noFusionRef = useRef(null)
  let wordLinkerRef = useRef(null)
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
      <MyClassic ref={myClassicRef} setShowAlert={setShowAlert} />
      <div className={`fixed top-16 z-50 transition duration-[1s] ease-out ${showAlert ? "-translate-x-0" : "-translate-x-full"}`}>
        <Alert severity="info">Still working on it</Alert>
      </div>
      <NoFusion ref={noFusionRef} setShowAlert={setShowAlert} />
      <WordLinker ref={wordLinkerRef} setShowAlert={setShowAlert} />
      <Contact />
    </div>
  )
}

export default App
