function ProductList({ products }) {
    return (
      <>
        <h1>List of products</h1>
        {products.map(product => {
          return (
            <div key={product.id}>
              <h2>
                {product.id} {product.title} {product.price}
              </h2>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
  
  export default ProductList
  
  export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList')
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
  
    return {
      props: {
        products: data
      },
      revalidate: 30
    }
  }
  