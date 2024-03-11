import React from "react";
import '../Style/Menu.css'
function MenuCard({name,İmage,content,Price}) {
    return ( 
      <div className="MenuItem">
         <div style={{backgroundImage:`url(${İmage})`}}>
          
         </div>
         <h1>{name}</h1>
         <h5>{content}</h5>
         <p>{Price} TL</p>
      </div>
     );
  }
  
  export default MenuCard;