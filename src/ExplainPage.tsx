import cheatCode from '/src/assets/cheat-code.png';
import console from '/src/assets/console.png';
import { FaXmark } from "react-icons/fa6";
function ExplainPage(props: any) {
    const cancel = props.cancel;
    return (
        <div className='fixed flex w-[100vw] h-[100vh] justify-center items-center bg-black z-[100] bg-opacity-50 backdrop-blur-lg'>
            <div className=' bg-white rounded-3xl w-4/5 h-4/5 flex items-center justify-center z-[100] relative'>
                <div className='absolute top-8 right-8'>
                    <FaXmark className='text-gray-500 text-3xl' onClick={cancel} />
                </div>
                <div className='flex items-center h-full p-10'>
                    <div className='flex flex-col h-full'>
                        <p className='sm:text-lg md:text-xl mb-10 font-semibold text-wrap'>Because Apple thinks my app is too similar to iPod, I have to use some camouflage</p>
                        <div className='flex-auto'></div>
                        <div className='sm:text-md md:text-lg mb-3'>
                            <span className="font-bold">Step 1: </span>
                            <span>Download the game console</span>
                        </div>
                        <div className='sm:text-md md:text-lg mb-2 text-wrap'>
                            <span className="font-bold">Step 2: </span>
                            <span>Enter the </span>
                            <img src={cheatCode} alt="up up down down left right left right B A" className='h-8 inline' />
                        </div>
                        <div className='sm:text-md md:text-lg mb-1 flex items-center'>
                            <span className="font-bold">Step 3:&nbsp;</span>
                            <span> Enjoy</span>
                            <span className='text-3xl ml-2'>😉</span>
                        </div>
                        <div className='flex-auto'></div>
                        <div className='flex-auto'></div>
                        <div className='flex justify-center'>
                            <a href="https://apps.apple.com/app/my-classic/id6443811423" target='_blank' onClick={cancel} className='bg-gradient-to-b from-sky-400 to-sky-500 text-white font-bold text-xl px-5 py-2 rounded-lg shadow-md'>Go to App Store</a>
                        </div>
                    </div>
                    <img src={console} alt="console" className='hidden md:inline md: w-1/4' />
                </div>

            </div>
        </div>
    );
}

export default ExplainPage;