import BestSeller from '@/components/BestSeller'
import ProductDetails from '@/components/ProductDetails'
import { productsData } from '../../../../data/product'
import React from 'react'

const page = (props: React.JSX.IntrinsicAttributes & { params: { id: string } }) => {
  return (
    <div>
      <ProductDetails {...props}/>
      <BestSeller productsData={productsData} title={"YOU MAY ALSO LIKE"}/>
    </div>
  )
}

export default page
