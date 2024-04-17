"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide, SwiperRef  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { productsData } from '../../data/product'
import Button from '@/components/button/Button';
import { useRouter } from 'next/navigation';

const ProductDetails = ({ params }: { params: { id: string } }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperRef | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const router = useRouter()
    const handleQuantity = (type: string) => {
        if (type == "increase") setQuantity(prev => prev + 1)
        else setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
    }
    // const {id} = productsData[parseInt(params.id) - 1]
    // console.log(id)
    const productsDetails = productsData.filter(item => item.id == parseInt(params.id))[0]
    if (!productsDetails) router.back()
    return (
        <>
            <div className='mt-16 border-b pb-6 p-2.5'>
                <div className='container'>
                    <div className='swiper-wrapper2'>
                        <Swiper
                            // onSwiper={setThumbsSwiper}
                            // loop={true}
                            spaceBetween={10}
                            slidesPerView={2}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Image src="/product1.png" alt='' height={107} width={73} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/product2.png" alt='' height={107} width={73} />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            // loop={true}
                            spaceBetween={10}
                            // direction='vertical'
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <Image className='!w-[700px]' alt='' src="/product1.png" height={762} width={496} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image className='!w-[700px]' alt='' src="/product2.png" height={762} width={496} />
                            </SwiperSlide>
                        </Swiper>
                        <div className='w-full max-w-[400px] product-description'>
                            <p className='product-brand'>A'PIEU</p>
                            <h1 className='product-title mt-5'>
                                {productsDetails.name}
                            </h1>
                            <div className='review-rating mt-4 !justify-start'>
                                <Image src={'/rating.svg'} alt='' height={100} width={100} />
                                <p>{`(${productsDetails.review} reviews)`}</p>
                            </div>
                            <p className='product-price mt-4'>
                                $ {productsDetails.price}
                            </p>
                            <div className='quantity flex justify-center items-center p-5 mt-4'>
                                <Image onClick={() => handleQuantity("decrease")} src={'/vector.svg'} height={20} width={20} alt='' />
                                <input min={1} readOnly value={quantity} className='text-center' type="text" />
                                <Image onClick={() => handleQuantity("increase")} src={'/plus.svg'} height={20} width={20} alt='' />
                            </div>
                            <div>
                                <div className='add-cart'>
                                    <p>
                                        ADD TO CART ${productsDetails.price}
                                    </p>
                                </div>
                                <div className='text-center mt-5 max-w-[400px] border-b pb-10'>
                                    <Button className={"!px-10 btn w-full"}>
                                        BUY IT NOW
                                    </Button>
                                    <div className='flex gap-2 mt-5 text-[12px] cursor-pointer'>
                                        <Image alt='' src={'/heart2.svg'} height={16} width={16} />
                                        <p>ADD TO WISHLIST</p>
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-[400px]'>
                                <div className='product-shipping'>
                                    <p>Free UAE Shipping on orders above AED 100.</p>
                                </div>
                                <div className='product-shipping2'>
                                    <p>Usually ships within 3-5 days</p>
                                </div>
                            </div>
                            <div className='product-details mt-7'>
                                <h1 className='mt-6'>PRODUCT DETAILS</h1>
                                <p className='mt-4'>Isntree’s range of broad spectrum sun protection products are lightweight and suitable for daily use. Not only do they help control skin shine, but also keep skin feeling cool and comfortable. These suncreens also contain hyaluronic acid which helps deliver deep hydration and strengthen the skin’s moisture barrier. Available in a variety of formulations to suit every skin type. </p>
                                <p className='mt-4'>Isntree’s range of broad spectrum sun protection products are lightweight and suitable for daily use. Not only do they help control skin shine, but also keep skin feeling cool and comfortable. These suncreens also contain hyaluronic acid which helps deliver deep hydration and strengthen the skin’s moisture barrier. Available in a variety of formulations to suit every skin type.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
