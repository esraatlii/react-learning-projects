import React from 'react'

function Product({product}) {
  const {id,title,price,description,image} = product;

  return (
    <div className='product'>
        <img src={image} width={350} height={350}/>
        <div className='title'>{title}</div>
        <div className='description'>{description}</div>
        <div className='price'>{price} ₺ </div>
        <div>
            <button>
                Satın Al
                <div class="arrow-wrapper">
                    <div class="arrow"></div>
                </div>
            </button>
        </div>
    </div>
  )
}

export default Product