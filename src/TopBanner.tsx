
function TopBanner(props:any) {
    const click1=()=>{
        props.ref1.current.scrollIntoView({ behavior: 'smooth' });
    }
    const click2=()=>{
        props.ref2.current.scrollIntoView({ behavior: 'smooth' });
    }
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // 平滑滚动效果
        });
      };
    return ( <>
    <div className = "flex bg-slate-100 fixed top-0 w-full z-50 bg-opacity-80 backdrop-blur-md" >
        <span onClick={scrollToTop} className='satisfy-regular text-slate-700 px-5 text-xl py-3'>Outer Space</span>
        <button onClick={click1} className="text-black flex-auto text-center py-3 hover:bg-slate-200 hover:bg-opacity-40">My Classic</button>
        <div  onClick={click2} className="text-black flex-auto text-center py-3 hover:bg-slate-200 hover:bg-opacity-40">No Fusion</div>
        <div className="text-black flex-auto text-center py-3 hover:bg-slate-200">Word Linker</div>
    </div>
    </>);
}

export default TopBanner;