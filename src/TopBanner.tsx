import * as React from 'react';
import { useState, useEffect } from 'react';
function TopBanner() {
    return ( <>
    <div className = "flex py-3 bg-slate-100 fixed top-0 w-full" >
        <span className='satisfy-regular text-slate-700 px-5 text-xl'>Outer Space</span>
        <div className="text-black flex-auto text-center">My Classic</div>
        <div className="text-black flex-auto text-center">No Fusion</div>
        <div className="text-black flex-auto text-center">Word Linker</div>
    </div>
    </>);
}

export default TopBanner;