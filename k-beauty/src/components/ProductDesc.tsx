import Image from 'next/image'
import React from 'react'
import Button from './button/Button'

function ProductDesc() {
    return (
        <div className='product-desc-section'>
            <div className='container'>
                <div className='product-desc-container'>
                    <div className='text-wrapper'>
                        {/* text */}
                        <div className='max-w-[524px]'>
                            <h6 style={{ fontSize: '10.67px', letterSpacing: '0.53px' }}>
                                ISNTREE
                            </h6>
                            <h5 style={{ fontSize: '15.64px', letterSpacing: '0.78px', lineHeight: '22.75px', marginTop: '15px' }}>
                                SUN PROTECTION MADE SIMPLE
                            </h5>
                            <h1 style={{ fontSize: "10.67px", lineHeight: '19.91px', letterSpacing: '0.53px', marginTop: '12px' }}>
                                Isntree’s range of broad spectrum sun protection products are lightweight and suitable for daily use. Not only do they help control skin shine, but also keep skin feeling cool and comfortable. These suncreens also contain hyaluronic acid which helps deliver deep hydration and strengthen the skin’s moisture barrier. Available in a variety of formulations to suit every skin type.
                            </h1>
                            <Button className='btn mt-[42px]'>
                                FIND OUT MORE
                            </Button>
                        </div>
                    </div>
                    <div className='desc-image-container'>
                        <Image src={'/rectangle-5-copy-1.png'} alt='' width={683} height={440} />
                    </div>
                </div>
                {/* second */}
                <div style={{ flexDirection: "row-reverse" }} className='product-desc-container'>
                    <div className='text-wrapper flex justify-end'>
                        {/* text */}
                        <div className='max-w-[524px]'>
                            <h6 style={{ fontSize: '10.67px', letterSpacing: '0.53px' }}>
                                HARUHARU WONDER
                            </h6>
                            <h5 style={{ fontSize: '15.64px', letterSpacing: '0.78px', lineHeight: '22.75px', marginTop: '15px' }}>
                                FOR THAT ‘GLOW FROM WITHIN’
                            </h5>
                            <h1 style={{ fontSize: "10.67px", lineHeight: '19.91px', letterSpacing: '0.53px', marginTop: '12px' }}>
                                Wondering how to achieve that radiant, healthy looking  ‘glass skin’? Say hello to HaruHaru Wonder’s popular Black Rice Hyaluronic Toner. A multi-purpose essence and toner that uses a patented Ultra Deep Technology to deliver skin nourishing ingredients within the skin’s layers to reveal deeply hydrated skin and nourished skin. Bonus- It is Vegan, cruelty free and contains 95% natural ingredients!                         </h1>
                            <Button className='btn mt-[42px]'>
                                FIND OUT MORE
                            </Button>
                        </div>
                    </div>
                    <div style={{ marginLeft: "-84px", marginRight : 0}} className='desc-image-container'>
                        <Image src={'/rectangle-5-copy-2.png'} alt='' width={683} height={440} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDesc
