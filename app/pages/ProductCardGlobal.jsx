import React from 'react'
import fetchDataFromApi from '@/utils/api'
import ProductCard from '@/components/ProductCard'

function ProductCardGlobal({ products }) {
  
    
    return (
        <> 
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </>
    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetchDataFromApi("/api/products");
    const products = res.json();
    console.log(products);
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        products,
      },
    }
  }


export default ProductCardGlobal