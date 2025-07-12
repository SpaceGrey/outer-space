import { forwardRef, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import appStore from '/src/assets/AppStore.svg';
import wordLinker2 from '/src/assets/wordlinker-1.png';
import wordLinker1 from '/src/assets/wordlinker-2.png';
import wordLinker3 from '/src/assets/wordlinker-3.png';
import wordLinkerIcon from '/src/assets/word-linker-icon.jpg';
import { useTranslation } from 'react-i18next';
const WordLinker = forwardRef(function WordLinker(props:any,ref:any) {
    const { t } = useTranslation();
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
        props.setShowAlert(true);
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
        <div ref = {ref} className="bg-gradient-to-r from-cyan-50 to-white relative z-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center px-4">
            <div className="flex-col sm:h-[40vh] flex-auto ml-10 justify-center">
                <div className="flex mr-auto">
                    <img src={wordLinkerIcon} alt="icon" className="w-10 h-10 mr-3 rounded-lg" />
                    <h1 className="text-3xl sm:text-4xl font-bold mb-3">{t('word_linker')}</h1>
                </div>
                <p className="text-gray-600 text-lg sm:text-2xl mb-10">{t('life_notebook')}</p>
                <div className='flex text-gray-600 items-center'>
                    <a href="https://apps.apple.com/cn/app/id6463197638" target="_blank">
                    <img src={appStore} alt="app store" className="w-[8rem]" />
                    </a>
                    <div onClick={learnMore} className='ml-10 flex items-center cursor-pointer'>{t('learn_more')} <FaChevronRight className="ml-1 align-middle" /></div>
                </div>
            </div>
            <div className="flex justify-center sm:justify-end w-full max-w-sm mx-auto mt-6 sm:mt-0">
            <div className="sm:mr-10 relative w-full max-w-sm">
                <div>
                    {
                        wordLinkers.map((image, index) => (
                            <p key={index} className={`hidden sm:block text-7xl md:text-9xl font-bold text-stone-300
                        absolute  z-20 bottom-[10%]
                        transition duration-[2s] ease-in-out opacity-${image == selected ? 1 : 0} 
                        ${image == selected ? "sm:-translate-x-[110%] -translate-x-[60%] " : "sm:-translate-x-[90%] -translate-x-[40%]"} 
                        ${image == selected ? "blur-0" : "blur-lg"}`}>{
                                    wordLinker1 == image ? t('scan') : wordLinker2 == image ? t('learn') : t('review')
                                }</p>
                        ))
                    }
                </div>
                {
                    wordLinkers.map((image, index) => (
                        <img key={index} src={image} alt="Word Linker" className={`absolute z-10 w-full h-auto object-contain
                    transition duration-[2s] ease-in-out opacity-${image == selected ? 1 : 0}`} />
                    ))
                }
                <img src={wordLinker1} alt="Scan" className="opacity-0 w-full h-auto" />
            </div>
            </div>
        </div>
        </div>
    );
})

export default WordLinker;