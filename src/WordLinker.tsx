import { forwardRef, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import testflight from '/src/assets/testflight.png';
import wordLinker2 from '/src/assets/wordlinker-1.png';
import wordLinker1 from '/src/assets/wordlinker-2.png';
import wordLinker3 from '/src/assets/wordlinker-3.png';
import wordLinkerIcon from '/src/assets/word-linker-icon.jpg';
const WordLinker = forwardRef(function WordLinker(props:any,ref:any) {
    const wordLinkers = [wordLinker1, wordLinker2, wordLinker3];
    const [selected, setSelected] = useState(wordLinker1);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }
    , []);
    function learnMore(){
        console.log(props)
        props.setAlert("Still working on it");
    }
    useEffect(() => {
        if (seconds == 4) {
            setSelected(wordLinker2)
        }
        if (seconds == 8) {
            setSelected(wordLinker3)
        }
        if (seconds == 12) {
            setSelected(wordLinker1)
            setSeconds(0)
        }
    }, [seconds]);
    return (
        <div ref = {ref} className="flex items-center relative z-10 bg-gradient-to-r from-cyan-50 to-white py-10">
            <div className="flex-col h-[40vh] flex-auto ml-20 justify-center">
                <div className="flex">
                    <img src={wordLinkerIcon} alt="icon" className="w-10 h-10 mr-3 rounded-lg" />
                    <h1 className="text-4xl font-bold mb-3">Word Linker</h1>
                </div>
                <p className="text-3xl mb-10">Life is your best notebook</p>
                <div className='flex text-gray-600 items-center'>
                    <img src={testflight} alt="app store" className="w-[9rem]" />
                    <div onClick={learnMore} className='ml-10 flex items-center'>Learn More <FaChevronRight /></div>
                </div>
                <div className="flex-auto"></div>
            </div>
            <div className="w-1/4 mr-20 relative">
                <div>
                    {
                        wordLinkers.map((image, index) => (
                            <p key={index} className={`text-9xl font-bold text-stone-300
                        absolute  z-20 bottom-[10%]
                        transition duration-[2s] ease-in-out opacity-${image == selected ? 1 : 0} -translate-x-[${image == selected ? "110%" : "90%"}] blur-${image == selected ? "0" : "lg"}`}>{
                                    wordLinker1 == image ? "Scan" : wordLinker2 == image ? "Learn" : "Review"
                                }</p>
                        ))
                    }
                </div>
                {
                    wordLinkers.map((image, index) => (
                        <img key={index} src={image} alt="Word Linker" className={`absolute z-10
                    transition duration-[2s] ease-in-out opacity-${image == selected ? 1 : 0}`} />
                    ))
                }
                <img src={wordLinker1} alt="Scan" className="opacity-0" />
            </div>
        </div>
    );
})

export default WordLinker;