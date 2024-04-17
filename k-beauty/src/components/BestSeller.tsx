"use client"
import Image from 'next/image'
import React from 'react'
import { productsData } from '../../data/product'
import Button from './button/Button'
import Link from 'next/link'

interface BestSellerProps {
    title: string;
    productsData: {
        id: number;
        name: string;
        rating: number;
        price: string;
        review: number;
        image: string;
    }[]
  }

const BestSeller : React.FC<BestSellerProps> = ({title}) => {
    return (
        <div>
            <div className='container'>
                <div>
                    <h1 className='best-seller-h1'>
                        {title || "BEST SELLERS"}
                    </h1>
                </div>
                <div className='products-list'>
                    {productsData.map((product) => {
                        return (
                            <div key={product.id}>
                                <Link href={`/details/${product.id}`}>
                                    <div className='product-card'>
                                        <Image className='product-image' src={product.image} alt='' width={100}
                                            height={100}
                                            style={{ objectFit: 'contain', width: 'auto' }} />
                                    </div>
                                    <div>
                                        <h1 className='product-name'>
                                            {product.name}
                                        </h1>
                                        <div className='review-rating'>
                                            <Image src={'/rating.svg'} alt='' height={100} width={100} />
                                            <p>{`(${product.review})`}</p>
                                        </div>
                                        <p className='text-center'>
                                            $ {product.price}
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className='text-center mt-16'>
                    <Button className={"!px-10 btn"}>
                        VIEW ALL PRODUCTS
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BestSeller
