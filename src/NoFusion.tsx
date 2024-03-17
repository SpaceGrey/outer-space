import { useState, useEffect } from 'react';
import icon from '/src/assets/NoFusion.png';
import image from '/src/assets/NoFusion1.png';
import image1 from '/src/assets/NoFusion2.png';
import appStore from '/src/assets/AppStore.svg';
import { FaChevronRight } from "react-icons/fa6";
import { forwardRef } from 'react';
const NoFusion = forwardRef(
function NoFusion(props:any, ref:any) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    function getOffset(multiplier: number) {
        return {
            transform: `translateY(${-scrollY * multiplier}px)`,
        }
    }
    const handleClick = () => {
        // 在新标签中打开指定网页
        window.open('https://apps.apple.com/us/app/no-fusion/id6444706244', '_blank');
      };
      function learnMore(){
        console.log(props)
        props.setShowAlert(true);
    }
    return (
        <div ref = {ref} className="flex bg-gradient-to-r from-neutral-900 to-neutral-950 items-center relative z-0 py-10">
            <div className='h-[50vw]'></div>
            <div className=' flex-auto text-white ml-10 mr '>
                <div className='flex my-10'>
                    <img src={icon} alt="No Fusion" className='w-10 h-10 flex-0 mr-3  rounded-md shadow-md' />
                    <p className="text-4xl font-bold mb-4">No Fusion</p>
                </div>
                <p className="text-2xl mb-2">Remove the over-sharpen of iPhone camera</p>
                <p className="text-2xl mb-6">Shoot RAW and Live Photo at the same time</p>
                <div className='flex text-gray-300 items-center'>
                    <img onClick={handleClick} src={appStore} alt="app store" className='w-[8rem]' />
                    <p className='ml-10 flex items-center' onClick={learnMore}>Learn More <FaChevronRight /></p>
                </div>
            </div>
            <div className='w-1/4 relative transform translate-y-1/3 ml-5 filter drop-shadow-md'>
                <img src={image1} alt='No Fusion'
                    style={getOffset(0.2)} />
            </div>
            <div className='w-1/4 relative transform -translate-y-1/3 mx-5 filter drop-shadow-md'>
                <img src={image} alt='No Fusion'
                    style={getOffset(-0.2)} />

            </div>
        </div>);
});

export default NoFusion;