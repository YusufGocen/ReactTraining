import React from 'react'
import MenuCard from './MenuCard'
import { Data } from '../Menu/Burger'
import '../Style/Menu.css'

const Menu = () => {
  return (
    <div className='Menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
        {Data.map((MenuItem,key)=>{
          return(          
            <MenuCard key={key} 
            name={MenuItem.Name}
            İmage={MenuItem.İmage}
            content={MenuItem.content}
            Price={MenuItem.Price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu