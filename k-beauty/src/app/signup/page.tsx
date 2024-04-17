import Button from '@/components/button/Button'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='container'>

            <div className='login-wrapper space-y-6 max-w-[554px] my-0 mx-auto' >
                <div className='inner-wrapper w-full'>
                    <div className='text-center login-text'>
                        <h1>REGISTER</h1>
                        <p>Please fill in the information below:</p>
                    </div>
                    <form>
                    <div className='mt-10'>
                        <input autoComplete='name' className='email-input' type="name" name="" id="" placeholder='First Name' />
                    </div>
                    <div className='mt-6'>
                        <input autoComplete='name' className='email-input' type="name" name="" id="" placeholder='Last Name' />
                    </div>
                    <div className='mt-6'>
                        <input autoComplete='email' className='email-input' type="email" name="" id="" placeholder='Email' />
                    </div>
                    <div className='mt-6'>
                        <input autoComplete='new-password' className='email-input' type="password" name="" id="" placeholder='Password' />
                    </div>
                    </form>
                    <div className='mt-6'>
                        <Link href='/'>
                            <Button type={'submit'} className={'btn w-full !p-4'}>
                                <p>
                                    CREATE MY ACCOUNT
                                </p>
                            </Button>
                        </Link>
                    </div>
                    <div className='text-center mt-6 text-[13px] tracking-widest'>
                        <span>
                            Already have a account? <Link href={'/login'}>
                                <span className='underline cursor-pointer'>Login</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
