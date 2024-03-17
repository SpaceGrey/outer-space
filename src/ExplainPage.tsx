import { CSSProperties } from 'react';
import cheatCode from '/src/assets/cheat-code.png';
import console from '/src/assets/console.png';
import { FaXmark } from "react-icons/fa6";
function ExplainPage(props:any) {
    const spacer = {
      flex: "1 1 0px"
    }
    const flex:CSSProperties = {
        margin: "0 10px",
        display: "flex",
        flexDirection: "column",
        height: "60%",

    }
    const cancel = props.cancel;
    return ( 
        <div className='fixed flex w-full h-full justify-center items-center bg-black z-[100] bg-opacity-50 backdrop-blur-lg'>
        <div className=' bg-white rounded-3xl w-4/5 h-4/5 flex items-center justify-center z-[100] relative'>
            <div className='absolute top-8 right-8'>
            <FaXmark className='text-gray-500 text-3xl' onClick={cancel}/>
            </div>
            <div className='flex items-center h-4/5'>
            <div style={flex}>
            <h1 className='text-xl mb-10 font-semibold'>Because Apple thinks my app is too similar to iPod, I have to use some camouflage</h1>
            <div className='text-lg mb-3'>
            <span className="font-bold">Step 1: </span>
            <span>Download the game console</span>
            </div>
            <div className='text-lg mb-2'>
            <span className="font-bold">Step 2: </span>
            <span>Enter the </span>
            <img src={cheatCode} alt="up up down down left right left right B A" className='h-8 inline' />
            </div>
            <div className='text-lg mb-1 flex items-center'>
            <span className="font-bold">Step 3:&nbsp;</span>
            <span> Enjoy</span>
            <span className='text-3xl ml-2'>😉</span>
            </div>
            <div style={spacer}> </div>
            <div className='flex justify-center'>
            <a href = "https://apps.apple.com/app/my-classic/id6443811423" target='_blank' onClick={cancel} className='bg-gradient-to-b from-sky-400 to-sky-500 text-white font-bold text-xl px-5 py-2 rounded-lg shadow-md'>Go to App Store</a>
            </div>
            </div>
            <img src={console} alt="console" className='w-1/4'/>
            </div>

</div>
        </div>
    );
}

export default ExplainPage;