import BestSeller from '@/components/BestSeller'
import BlogSection from '@/components/BlogSection'
import ProductDesc from '@/components/ProductDesc'
import ProductSuggestions from '@/components/ProductSuggestions'
import { productsData } from '../../data/product'
import React from 'react'

const home = () => {
  return (
    <div>
      <ProductDesc/>
      <BestSeller productsData={productsData} title={''}/>
      <BlogSection/>
      <ProductSuggestions/>
    </div>
  )
}

export default home
