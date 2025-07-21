import { useState, useEffect } from 'react';
import icon from '/src/assets/NoFusion.jpg';
import image from '/src/assets/NoFusion1.png';
import image1 from '/src/assets/NoFusion2.png';
import appStore from '/src/assets/AppStore.svg';
import { FaChevronRight } from "react-icons/fa6";
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
const NoFusion = forwardRef(
function NoFusion(_props:any, ref:any) {
    const { t } = useTranslation();
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
    return (
        <div ref = {ref} className="bg-gradient-to-r from-neutral-900 to-neutral-950 relative z-0 py-10">
        <div className="max-w-7xl mx-auto flex items-center flex-wrap-reverse sm:flex-nowrap px-4">
            <div className='h-[50vw] lg:h-[30vh] xl:h-[25vh]'></div>
            <div className='relative z-10 flex-auto text-white ml-10 mr'>
                <div className='flex my-10'>
                    <img src={icon} alt="No Fusion" className='w-10 h-10 flex-0 mr-3 rounded-[23%] filter drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]' />
                    <p className="text-3xl sm:text-4xl font-bold mb-4">{t('no_fusion')}</p>
                </div>
                <p className="text-gray-300 text-lg sm:text-2xl mb-2">{t('remove_oversharpen')}</p>
                <p className="text-gray-300 text-lg sm:text-2xl mb-6">{t('shoot_raw_live')}</p>
                <div className='flex text-gray-300 items-center'>
                    <img onClick={handleClick} src={appStore} alt="app store" className='w-[8rem]' />
                    <a href="https://nofusion.app" target="_blank" rel="noopener noreferrer" className='ml-10 flex items-center cursor-pointer'>{t('learn_more')} <FaChevronRight className="ml-1 align-middle" /></a>
                </div>
            </div>
            <div className='hidden md:inline w-1/4 relative transform translate-y-1/3 ml-5 filter drop-shadow-md'>
                <img src={image1} alt='No Fusion'
                    className='rounded-[20%]'
                    style={getOffset(0.2)} />
            </div>
            <div className='sm:w-1/4 relative transform -translate-y-1/3 mx-5 filter drop-shadow-md'>
                <img src={image} alt='No Fusion'
                    className='rounded-[20%]'
                    style={getOffset(-0.2)} />

            </div>
        </div>
        </div>);
});

export default NoFusion;