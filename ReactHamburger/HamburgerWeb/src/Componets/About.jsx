import React from 'react'
import AboutImage from '../Picture/About.avif'
import '../Style/About.css'

const About = () => {
  return (
    <div className='about'>
       <div className='aboutTop' style={{backgroundImage:`url(${AboutImage})`}}></div>
      <div className='Desc'>
          <h1>Burger House</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nisi. Ipsam iure eligendi, architecto veritatis aliquid ipsum optio eius nam animi sint exercitationem nostrum quo quisquam atque doloribus deleniti deserunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aliquid, facilis corrupti voluptate cupiditate a est nobis rem quasi omnis molestiae ullam ipsam deserunt voluptatum consequatur, pariatur atque, reiciendis fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat explicabo nesciunt dolore sit saepe veniam voluptatum corporis voluptas accusamus eaque ipsam repellendus, incidunt quibusdam hic aut quia ea rerum. Praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt aspernatur corporis quibusdam sequi quis odit. Mollitia dolores rerum blanditiis voluptatum tempora minus esse dolore facere ducimus, illo laborum! Aliquam, facere?</p>
          <h4>Uygun Fiyat</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate unde temporibus vel quam odit ab enim. Exercitationem accusamus nam architecto. Iure ipsa accusamus fugiat autem eveniet molestiae recusandae vitae illo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quaerat provident esse qui tenetur eligendi porro aperiam iusto reiciendis, voluptatibus minus magni dignissimos veritatis totam illum harum adipisci expedita placeat.</p>
          <h4>Yerli Üretim</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, ipsa officiis quo amet assumenda esse aperiam praesentium similique eligendi necessitatibus dignissimos illum hic impedit nulla inventore nemo sint. Consequuntur, illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam placeat dolorum temporibus fuga quia in itaque amet magnam repellendus ipsa laudantium iste aut nam repudiandae, est autem, excepturi incidunt minus.</p>
      </div>
    </div>
  )
}

export default About