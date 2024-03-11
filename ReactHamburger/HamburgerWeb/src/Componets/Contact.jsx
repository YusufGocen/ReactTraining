import React from 'react'
import '../Style/contact.css'
import ContactImage from '../Picture/contact.avif'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='Left'>
        <img src={ContactImage} alt="" />
      </div>
      <div className='right'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad SoyAd</label>
          <input type="text" name="" id=""  placeholder='Ad Soyad Girin'/>
          <label>Email</label>
          <input type="email" name="email" id=""  placeholder='Email  Girin'/>
          <label>Mesajınız</label>
          <textarea rows={5}  placeholder='Mesajınızı Girin'></textarea>
          <button>Gönderin</button>
        </form>
      </div>
    </div>
  )
}

export default Contact