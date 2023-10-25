import './footer.css'

const Footer = () => {
    return (
        <div id="footer">
         <div id="footerWrap">
         <span>BeautyPlus &copy; </span>
             <div className='socials'>
                <img src='./instagram.png'/>
                <span>@Beautyplus Dental Services</span>
             </div>
             <div className='socials'>
                <img src='./phone.png'/>
                <span>08100810775 || 08118222768</span>
             </div>
             <div className='socials'>
                <img src='./whatsapp.png' />
                <span id ="whatsappNo">08102665253</span>
             </div>
         </div>
        </div>
    )
}

export default Footer