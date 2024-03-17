import photo from '/src/assets/photo.jpg';
import linkin from '/src/assets/linkin.svg';
import xhs from '/src/assets/xhs.svg';
import bili from '/src/assets/bili.svg';
import mail from    '/src/assets/mail.svg';
import twitter from '/src/assets/twitter.svg';
import { CSSProperties } from 'react';
function Contact() {
    const flex:CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
    return ( 
    <div style = {flex} className="py-[5rem] bg-gradient-to-br from-slate-300 to-slate-50">
            <div className='flex items-center'>
        <img src={photo} alt="photo" className=' h-16 rounded-full shadow-md  m-5' />
        <h1 className="flex-initial text-center text-3xl font-semibold">Contact Me</h1>
        </div>
        <div className='flex mt-4 pb-[200px]'>
            <a href='https://twitter.com/Wangpeiyi23' target='_blank'><img src={twitter} alt="twitter" className='h-12 m-3 transition duration-300 ease-in-out transform hover:scale-110'/></a>
           <a href='https://www.linkedin.com/in/peiyi-wang23/' target='_blank'><img src={linkin} alt="linkin" className='h-12 m-3 transition duration-300 ease-in-out transform hover:scale-110'/></a>
            <a href='https://www.xiaohongshu.com/user/profile/5ddf818d000000000100176c' target='_blank'><img src={xhs} alt="xhs" className='h-12 m-3 transition duration-300 ease-in-out transform hover:scale-110'/></a>
            <a href='https://space.bilibili.com/13003762' target='_blank'><img src={bili} alt="bili" className='h-12 m-3 transition duration-300 ease-in-out transform hover:scale-110'/></a>
            <a href='mailto:wangpeiyi0223@gmail.com'><img src={mail} alt="mail" className='h-12 m-3 transition duration-300 ease-in-out transform hover:scale-110'/></a>
        </div>
        <a className='text-sm text-gray-500' href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2024043127号</a>
    </div> );
}

export default Contact;
