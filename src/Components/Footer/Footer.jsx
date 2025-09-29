import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.webp"
import instagram_icon from "../../assets/instagram.png"
import facebook_icon from "../../assets/facebook.png"
import whatsapp_icon from "../../assets/whatsapp.png"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" height="40px" />
            <p>Shopify</p>
        </div>
        <ul className='footer-links'>
           <li>About</li>
           <li>Products</li>
           <li>Offices</li>
           <li>Company</li>
           <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
<div className="footer-icon-container">
<img src={instagram_icon} alt="" height="30px" />
</div>
<div className="footer-icon-container">
<img src={facebook_icon} alt="" height="30px"  />
</div>
<div className="footer-icon-container">
<img src={whatsapp_icon} alt=""  height="30px" />
</div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2025 - All Right Reserved</p>
        </div>
        <div className='foot-info'>
             <p>Makeup  Dresses For Girls  T-Shirts  Sandals  Headphones  Babydolls  Blazers For Men  Handbags  Ladies Watches  Bags  Sport Shoes  Reebok Shoes  Puma Shoes  Boxers  Wallets  Tops  Earrings  Fastrack Watches  Kurtis  Nike  Smart Watches  Titan Watches  Designer Blouse  Gowns  Rings  Cricket Shoes  Forever 21  Eye Makeup  Photo Frames  Punjabi Suits  Bikini  Myntra Fashion Show  Lipstick  Saree  Watches  Dresses  Lehenga  Nike Shoes  Goggles  Bras  Suit  Chinos  Shoes  Adidas Shoes  Woodland Shoes  Jewellery  Designers Sarees</p>
        </div>
    </div>
  )
}

export default Footer;