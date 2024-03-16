import { useState, useEffect } from 'react';
import icon from '/src/assets/NoFusion.png';
import image from '/src/assets/NoFusion1.png';
import image1 from '/src/assets/NoFusion2.png';
import appStore from '/src/assets/AppStore.svg';
import { FaChevronRight } from "react-icons/fa6";
function NoFusion() {
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
    return (
        <div className="flex bg-gradient-to-r from-neutral-900 to-neutral-950 items-center">
            <div className=' flex-auto text-white ml-10 mr '>
                <div className='flex my-10'>
                    <img src={icon} alt="No Fusion" className='w-10 h-10 flex-0 mr-3  rounded-md shadow-md' />
                    <p className="text-4xl font-bold mb-4">No Fusion</p>
                </div>
                <p className="text-lg mb-2">Remove the over-sharpen of iPhone camera</p>
                <p className="text-lg mb-6">The only camera can shoot RAW and Live Photo at the same time</p>
                <div className='flex text-gray-300 items-center'>
                    <img src={appStore} alt="app store" className='w-30' />
                    <p className='ml-10 flex items-center'>Learn More <FaChevronRight /></p>
                </div>
            </div>
            <div className='w-1/5 relative transform translate-y-1/3 mx-5 filter drop-shadow-md'>
                <img src={image1} alt='No Fusion'
                    style={getOffset(0.2)} />
            </div>
            <div className='w-1/5 relative transform -translate-y-1/3 mx-5 filter drop-shadow-md'>
                <img src={image} alt='No Fusion'
                    style={getOffset(-0.2)} />

            </div>
        </div>);
}

export default NoFusion;