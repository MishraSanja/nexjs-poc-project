function ProductList({ products }) {
    return (
      <>
        <h1>List of products</h1>
       
         
             
              <h2>
                {products.id} {products.title} {products.price}
              </h2>
              <hr />
          
          
      </>
    )
  }
  
  export default ProductList
  
  export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList')
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
  
    return {
      props: {
        products: data
      },
      revalidate: 30
    }
  }
  