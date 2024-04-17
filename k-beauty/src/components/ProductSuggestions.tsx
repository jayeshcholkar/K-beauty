import Image from 'next/image'
import React from 'react'
import Button from './button/Button'
import { productsData } from '../../data/product'

function ProductSuggestions() {
    return (
        <div>
            <div className='container'>
                <div className='follow-text'>
                    <h2>
                        FOLLOW OUR JOURNEY
                    </h2>
                    <h1>
                        @KBEAUTYARABIA
                    </h1>
                </div>
                <div className='products-suggetion-list'>
                    {productsData.map((product) => {
                        return (
                            <div key={product.id}>
                                <div  className='product-suggetion-card'>
                                    <Image className='product-suggetion-image' src={product.image} alt='' width={100}
                                        height={100}
                                    />
                                    <div className='overlay-hover-effect'>
                                        <Image src={'/instagram.svg'} alt='' width={30}
                                            height={30} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default ProductSuggestions
