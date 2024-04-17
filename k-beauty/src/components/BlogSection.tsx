import Image from 'next/image'
import React from 'react'
import { blogs } from '../../data/blogData'
import Button from './button/Button'

function BlogSection() {
    return (
        <div className='blog-section'>
            <div className='container'>
                <div className='text-center p-9 '>
                    <p className='text-[15px]'>
                        READ NOW
                    </p>
                    <h1 className='p-3 text-[22px]'>
                        ON THE KULT BLOG
                    </h1>
                </div>
                <div className='max-w-[912px] m-auto p-2'>
                    <div className='blog-image-container'>
                        {blogs.map((blog) => {
                            return (
                                <div key={blog.id} className='blog-card'>
                                    <Image className='blog-image object-cover m-auto' src={blog.image} alt='' height={158} width={278} />
                                    <h1 className='truncate m-auto max-w-[280px]'>
                                        {blog.heading}
                                    </h1>
                                    <p className='m-auto max-w-[280px]'>
                                        {blog.description}
                                    </p>
                                    <h2>
                                        Read more
                                    </h2>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='text-center mt-16 pb-12'>
                    <Button className={"!px-10 btn w-[206px]"}>
                        VIEW ALL BLOGS
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BlogSection
