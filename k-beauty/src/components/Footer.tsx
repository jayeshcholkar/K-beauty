import React from 'react'
import Button from './button/Button'
import Image from 'next/image'

function Footer() {
    return (
        <div>
            <div className='footer-wrapper'>
                <div className='container'>
                    <div className='footer-section'>
                        <div style={{ gridColumn: 'span 4' }}>
                            <div className='max-w-[324px]'>
                                <h1>
                                    About the shop
                                </h1>
                                <span>
                                    Auguste The Label is a boutique Australianbrand dreamt up by Byron Bay native Ebony Eagles.
                                </span>
                                {/* icons */}
                                <div className='flex gap-3 mt-5 cursor-pointer'>
                                    <Image src={'/icons/facebook.svg'} alt='' height={24} width={24} />
                                    <Image src={'/icons/instagram.svg'} alt='' height={24} width={24} />
                                    <Image src={'/icons/youtube.svg'} alt='' height={24} width={24} />
                                </div>
                            </div>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <h1>
                                CUSTOMER CARE
                            </h1>
                            <p>
                                Contact us
                            </p>
                            <p>
                                FAQ
                            </p>
                            <p>
                                The KULT
                            </p>
                            <p>
                                Beauty Dictionary
                            </p>
                            <p>
                                Skincare 101
                            </p>
                            <p>
                                Skin Konsult
                            </p>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <h1>
                                ABOUT
                            </h1>
                            <p>
                                Our Story
                            </p>
                            <p>
                                Kanvas Scoop
                            </p>
                            <p>
                                Shipping & Returns
                            </p>
                            <p>
                                Terms of Use
                            </p>
                            <p>
                                Careers / Affiliates
                            </p>
                        </div>
                        <div style={{ gridColumn: 'span 2' }}>
                            <h1>
                                JOIN
                            </h1>
                            <span>
                                Join us and we'll love you forever ♡
                            </span>
                            <input className='email-input flex placeholder:text-[14px]' type="email" placeholder='Enter your email address' />
                            <Button className='btn mt-5 w-full'>
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>
                    © Copy Right K-Beauty
                </p>
            </div>
        </div>
    )
}

export default Footer
