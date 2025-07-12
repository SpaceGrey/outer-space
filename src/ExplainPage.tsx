import cheatCode from '/src/assets/cheat-code.png';
import console from '/src/assets/console.png';
import { FaXmark } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
function ExplainPage(props: any) {
    const { t } = useTranslation();
    const cancel = props.cancel;
    return (
        <div className='fixed flex w-[100vw] h-[100vh] justify-center items-center bg-black z-[100] bg-opacity-50 backdrop-blur-lg'>
            <div className=' bg-white rounded-3xl w-4/5 h-4/5 flex items-center justify-center z-[100] relative'>
                <div className='absolute top-8 right-8'>
                    <FaXmark className='text-gray-500 text-3xl' onClick={cancel} />
                </div>
                <div className='flex flex-col items-center h-full p-10 w-full justify-between'>
                    {/* 标题 */}
                    <p className='sm:text-lg md:text-xl mb-10 font-semibold text-wrap text-center'>{t('explain_because')}</p>

                    {/* 步骤 + 图片 */}
                    <div className='flex flex-col md:flex-row items-center justify-center w-full flex-1'>
                        <div className='flex flex-col md:items-start items-center md:mr-10'>
                            <div className='sm:text-md md:text-lg mb-3'>
                                <span className="font-bold">{t('step1')} </span>
                                <span>{t('download_console')}</span>
                            </div>
                            <div className='sm:text-md md:text-lg mb-2 text-wrap'>
                                <span className="font-bold">{t('step2')} </span>
                                <span>{t('enter_code')} </span>
                                <img src={cheatCode} alt="up up down down left right left right B A" className='h-8 inline' />
                            </div>
                            <div className='sm:text-md md:text-lg mb-1 flex items-center'>
                                <span className="font-bold">{t('step3')}&nbsp;</span>
                                <span> {t('enjoy')}</span>
                                <span className='text-3xl ml-2'>😉</span>
                            </div>
                        </div>
                        <img src={console} alt="console" className='hidden md:inline md:w-1/4 mt-6 md:mt-0 max-h-[50vh] object-contain' />
                    </div>

                    {/* 按钮 */}
                    <div className='flex justify-center w-full mt-6'>
                        <a href="https://apps.apple.com/app/my-classic/id6443811423" target='_blank' onClick={cancel} className='bg-gradient-to-b from-sky-400 to-sky-500 text-white font-bold text-xl px-5 py-2 rounded-lg shadow-md'>{t('go_app_store')}</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ExplainPage;