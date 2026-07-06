// Category.jsx
import React from 'react'
import './css/Category.css'

function Category({img}) {
  return (
    <div className='category'>
        <div className="category-content">
            <div className='nike-logo'>
                <img src={img} width={78} height={68} alt="Nike Logo" />
            </div>
            <a href="#">
                <h5>Yeni</h5>
                <p>Erkek</p>
                <p>Kadın</p>
                <p>Çocuk</p>
                <p>Spor</p>
            </a>
        </div>
    </div>
  )
}

export default Category