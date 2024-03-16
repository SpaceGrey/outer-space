import appIcon from '/src/assets/mypod-icon.png';
import appStore from '/src/assets/AppStore.svg';
import { FaChevronRight } from "react-icons/fa6";
import demoVideo from '/src/assets/demo-screen.mp4';
import myPod1 from '/src/assets/mypod-1.png';
import myPod2 from '/src/assets/mypod-2.png';
import { useState, useEffect } from 'react';
import background from '/src/assets/cover-flow-background.png';
function MyClassic() {
    const [placeholder,setPlaceholder] = useState(myPod1);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(prevSeconds =>  prevSeconds + 1);
        }, 100);
    
        return () => clearInterval(interval);
      }, []);
    
      useEffect(() => {
        if (seconds == 73){
            setPlaceholder(myPod2)
        }
        if (seconds == 121){
            setPlaceholder(myPod1)
        }
        if (seconds==133){
            setSeconds(0)
        }
      }, [seconds]);
    return (
        <div className="text-gray-900 mt-20 flex bg-gradient-to-r from-stone-300 to-stone-400 items-center">
            <div className='flex-auto ml-10'>
                <div className='flex'>
                    <img src={appIcon} alt="No Fusion" className='w-10 h-10 flex-0 mr-3  rounded-md shadow-md' />
                    <h1 className="text-4xl font-bold mb-4">My Classic</h1>
                </div>
                <p className='text-2xl mb-10'>Bring back iPod to iPhone</p>
                <div className='flex text-gray-600 items-center'>
                    <img src={appStore} alt="app store" className='w-30' />
                    <p className='ml-10 flex items-center'>Learn More <FaChevronRight /></p>
                </div>
            </div>
            <div className='flex-1 relative items-center'>
                <img src={placeholder} alt="my pod" className=' relative w-[60%] z-10' />
                <img src={background} alt="background" className='absolute top-[20%] -left-[20%] transform scale-[170%] opacity-50 z-0'/>
                <video className='absolute top-[11.5%] w-[47%] left-[6.5%] z-20' autoPlay loop muted>
                    <source src={demoVideo} type='video/mp4' />
                </video>
            </div>
        </div>);
}

export default MyClassic;