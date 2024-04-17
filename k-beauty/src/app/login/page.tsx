"use client"
import Button from '@/components/button/Button'
import Link from 'next/link'
import React, { FormEvent } from 'react'
import { authUser, loginUser } from '@/utils/api'
import { useRouter, useParams, useSearchParams } from 'next/navigation'

const page = () => {
    let router = useRouter()
    let params = useSearchParams()
    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const emailInput = event.target.elements.email;
        const passwordInput = event.target.elements.Password;

        const username = emailInput.value;
        const password = passwordInput.value;

        try {
            await loginUser(username, password);
            params.get('redirect') ? router.push(`${params.get('redirect')}`) : router.push('/')
            console.log('Login successful', params)
            let res = await authUser()
            if (res.accessToken) router.push('/')
        } catch (error) {
            // Handle login error
            console.error('Login failed:', error);
        }
    };
    return (
        <div className='container'>
            <div className='login-wrapper space-y-6 max-w-[554px] my-0 mx-auto' >
                <div className='inner-wrapper w-full'>
                    <div className='text-center login-text'>
                        <h1>Login</h1>
                        <p>Please enter your email and password:</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='mt-10'>
                            <input itemID='email' autoComplete='email' className='email-input ' type="email" name="" id="email" placeholder='Email' />
                        </div>
                        <div className='mt-6 relative'>
                            <input itemID='password' autoComplete='password' className='email-input' type="password" name="" id="Password" placeholder='Password' />
                            <div className='absolute right-0 top-0 mt-[13px] mb-0 mr-2 text-[13px]'>
                                Forgot Password?
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Button type='submit' className={'btn w-full !p-4'}>
                                LOGIN
                            </Button>
                        </div>
                    </form>
                    <div className='text-center mt-6 text-[13px] tracking-widest'>
                        <span>
                            Don't have account? <Link href={'/signup'}>
                                <span className='underline cursor-pointer'>Create one</span>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

