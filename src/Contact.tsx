import photo from '/src/assets/photo.jpg';
import linkin from '/src/assets/linkin.svg';
import xhs from '/src/assets/xhs.svg';
import bili from '/src/assets/bili.svg';
import mail from    '/src/assets/mail.svg';
import twitter from '/src/assets/twitter.svg';
import { CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
function Contact() {
    const { t } = useTranslation();
    const flex:CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return ( 
    <div className="py-16 bg-gradient-to-br from-slate-300 to-slate-50">
        <div className="max-w-5xl mx-auto" style={flex}>
            <div className='flex flex-col sm:flex-row items-center justify-center'>
        <img src={photo} alt="photo" className='h-16 rounded-full shadow-md m-5' />
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">{t('hangzhou_swift')}</h2>
        </div>
        <div className='flex flex-nowrap justify-center gap-4 mt-4 pb-12 overflow-x-auto'>
            <a href='https://twitter.com/Wangpeiyi23' target='_blank'><img src={twitter} alt="twitter" className='h-12 mx-2 transition duration-300 ease-in-out transform hover:scale-110'/></a>
           <a href='https://www.linkedin.com/in/peiyi-wang23/' target='_blank'><img src={linkin} alt="linkin" className='h-12 mx-2 transition duration-300 ease-in-out transform hover:scale-110'/></a>
            <a href='https://www.xiaohongshu.com/user/profile/5ddf818d000000000100176c' target='_blank'><img src={xhs} alt="xhs" className='h-12 mx-2 transition duration-300 ease-in-out transform hover:scale-110'/></a>
            <a href='https://space.bilibili.com/13003762' target='_blank'><img src={bili} alt="bili" className='h-12 mx-2 transition duration-300 ease-in-out transform hover:scale-110'/></a>
            <a href='mailto:wangpeiyi0223@gmail.com'><img src={mail} alt="mail" className='h-12 mx-2 transition duration-300 ease-in-out transform hover:scale-110'/></a>
        </div>
        <a className='text-sm text-gray-500' href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2024043127号</a>
        </div>
    </div> );
}

export default Contact;
