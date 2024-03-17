import appIcon from '/src/assets/mypod-icon.png';
import appStore from '/src/assets/AppStore.svg';
import { FaChevronRight } from "react-icons/fa6";
import demoVideo from '/src/assets/demo-screen.mp4';
import myPod1 from '/src/assets/mypod-1.png';
import myPod2 from '/src/assets/mypod-2.png';
import myPod3 from '/src/assets/mypod-3.png';
import { useState, useEffect } from 'react';
import ExplainPage from './ExplainPage';
import background from '/src/assets/cover-flow-background.png';
import { forwardRef } from 'react';
const MyClassic = forwardRef(function MyClassic(props:any, ref:any) {
    const [placeholder, setPlaceholder] = useState(myPod1);
    const backgrounds = [myPod1, myPod2, myPod3];
    const [seconds, setSeconds] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    },[]);
    useEffect(() => {
        if (seconds == 4) {
            setPlaceholder(myPod2)
        }
        if (seconds == 8) {
            setPlaceholder(myPod3)
        }
        if (seconds == 12) {
            setPlaceholder(myPod1)
            setSeconds(0)
        }
    }, [seconds]);
    function learnMore(){
        console.log(props)
        props.setShowAlert(true);
    }
    return (
        <div ref={ref} className="text-gray-900 py-10 mt-10 flex bg-gradient-to-r relative from-stone-300 to-stone-400 items-center truncate z-10">
            {showOverlay && <ExplainPage cancel={()=>{setShowOverlay(false)}}/>}
            <div className='h-[45vw]'></div>
            <div className='flex-auto ml-20'>
                <div className='flex'>
                    <img src={appIcon} alt="No Fusion" className='w-10 h-10 flex-0 mr-3  rounded-md shadow-md' />
                    <h1 className="text-4xl font-bold mb-4">My Classic</h1>
                </div>
                <p className='text-2xl mb-10'>Bring back iPod to iPhone</p>
                <div className='flex text-gray-600 items-center'>
                    <img onClick={()=>{setShowOverlay(true)}} src={appStore} alt="app store" className='w-[8rem]' />
                    <p className='ml-10 flex items-center' onClick={learnMore}>Learn More <FaChevronRight /></p>
                </div>
            </div>
            <div className='flex-1 relative items-center'>
                <img src={myPod3} alt="my pod" className=' relative w-[60%] z-10 opacity-1 filter drop-shadow-md' />

                    {backgrounds.map((image, index) => (
                    <img key={index} src={image} alt="my pod" className={`absolute w-[60%] z-10 top-0 
                    transition duration-[2s] ease-in-out opacity-${image == placeholder ? 1 : 0}`} />
                    ))}
                <img src={background} alt="background" className={`
            absolute top-[20%] -left-[20%] truncate transform z-0
            transition duration-[2s] ease-in-out ${isVisible ? 'opacity-50' : 'opacity-0'}
            ${isVisible ? 'scale-[180%]' : 'scale-[100%]'}`}/>
                <video className='absolute top-[11.5%] w-[47%] left-[6.5%] z-20' autoPlay loop muted>
                    <source src={demoVideo} type='video/mp4' />
                </video>
            </div>
        </div>);
});

export default MyClassic;