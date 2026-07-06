import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Header.jsx'
import Product from './Product.jsx'
import {products} from './Data.jsx';
import './css/Product.css';
import nike from './images/nike.png'
import nba from './images/nba.jpg'
import Category from './Category.jsx'
import LeftNavbar from './LeftNavbar.jsx'

function App() {

  return (
    <>
      <Header  img={nba}/>
      <Category  img={nike}/>
      <hr></hr>
      <div className='product-main'>
        {
          products?.map((product) => (
            <Product key={product.id} product={product}/>
          ))
        }
      </div>
    </>
  )
}

export default App
