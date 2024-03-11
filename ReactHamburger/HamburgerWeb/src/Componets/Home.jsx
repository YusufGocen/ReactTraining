import React from "react";
import {Link} from 'react-router-dom'
import '../Style/Home.css'
import Card1 from '../Picture/card1.jpg'
import Card2 from '../Picture/card2.webp'
import Card3 from '../Picture/decoration.avif'
import Card4 from '../Picture/decoration2.avif'
import Card5 from '../Picture/decoration3.avif'
import Card6 from '../Picture/decoration4.avif'

function Home() {
  return ( 
    <div>

      <div className="MainPage">
          <div className="order">
          <Link to="/menu">
              <button className="order-button">Online Sipariş</button>
            </Link>
          </div>
      </div>
  
     

      <div className="Decoration">
        <h1 className="DecorationTitle">Burger House</h1>
        <div className="Design">
          <img className="Card4" src={Card4} alt="" />
          <img className="Card5" src={Card5} alt="" />
        </div>
        <div className="Design">
          <img className="Card5" src={Card6} alt="" />
          <img className="Card4" src={Card3} alt="" />
        </div>
      </div>
    </div>
   );
}

export default Home;