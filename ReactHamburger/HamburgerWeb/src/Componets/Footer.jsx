import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Footer.css'
import Logo from '../Picture/logo.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Yerli from '../Picture/yerliuretim.png'
import Helal from '../Picture/helalsertifika.png'

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='block'>
            <div className='logo'>
                <img className='logo' src={Logo} alt="" />
            </div>
            <div className='desc'>
                <h2>Burger House</h2>
                <Link className='Hakkımızda' to="/About">Hakkımızda</Link>
                <h5>Franchise Başvuru</h5>
                <h5>Kariyer</h5>
            </div>
            <div className='iletişim'>
                <h2>İletişim</h2>
                <h5>Bayrampaşa / İstanbul</h5>
                <h5>444 0 444</h5>
            </div>
            <div>
                <h2>Sosyal Medya</h2>
                <div className='social'>
                <InstagramIcon/>
                <FacebookIcon/>
                <XIcon/>
                <YouTubeIcon/>             
                </div>               
            </div>
        </div>
        <div className='haklar'>
            <p>Tüm Hakları Saklıdır / Burger House</p>
        </div>
        <div>
            <img className='üretim'  src={Yerli} alt="" />
            <img className='üretim' src={Helal} alt="" />
        </div>
       
    </div>
  )
}

export default Footer