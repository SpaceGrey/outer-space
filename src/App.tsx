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
  const [alert, setAlert] = useState("")
  const [showAlert, setShowAlert] = useState(false)
  useEffect(() => {
    if(alert != ""){
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
      setAlert("")
    }, 2000)
  }
  },[alert])
  return (
      <div>
      <TopBanner ref1 = {myClassicRef} ref2 = {noFusionRef} ref3 = {wordLinkerRef}/>
      <MyClassic ref={myClassicRef} setAlert = {setAlert}/>
      <Alert severity="info" className={`alert ${showAlert ? '' : 'hidden'}`}>{alert}</Alert>
      <NoFusion ref={noFusionRef} setAlert = {setAlert}/>
      <WordLinker ref={wordLinkerRef} setAlert = {setAlert}/>
      <Contact/>
    </div>
  )
}

export default App
