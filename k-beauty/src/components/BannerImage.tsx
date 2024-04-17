import Image from 'next/image'
import React from 'react'

const BannerImage = () => {
    return (
        <div className='bg-img hero-section'>
            <div className='hero-items'>
                <div className='hero-images'>
                    <Image src={'/Banner.svg'} alt={''} width={100} height={100} />
                </div>
                <div className='hero-content'>
                    <div className='container'>
                        <div className='max-w-[550px] p-2.5'>
                            <h6 style={{ fontSize: '10.64px', letterSpacing: '0.53px' }}>
                                DR. CEURACLE
                            </h6>
                            <h5 style={{ fontSize: '15.64px', letterSpacing: '0.78px' }}>
                                Discover Dr. Ceuracle’s Vegan Kombucha Line
                            </h5>
                            <h1 style={{ fontSize: "11px", lineHeight: '19.91px', letterSpacing: '0.78px', textTransform: 'uppercase' }} className='mt-3'>
                                Vegan Product Line formulated with Kombucha Extract and Tea Complex to detoxify, refine dull looking skin , detoxify and provide deep hydration.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerImage
