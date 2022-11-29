// function ProductList({ products }) {
//     return (
//       <>
//         <h1>List of products</h1>
//         {products.map(product => {
//           return (
//             <div key={product.price}>
//               <h2>
//                 {product.id} {product.title} {product.price}
//               </h2>
//               <hr />
//             </div>
//           )
//         })}
//       </>
//     )
//   }
  
//   export default ProductList
  
//   export async function getStaticProps() {
//     console.log('Generating / Regenerating ProductList')
//     const response = await fetch('http://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
  
//     return {
//       props: {
//         products: data
//       },
//       revalidate: 30
//     }
//   }
  


import Footer from '../components/footer'
import Header from '../components/header'
import Link from 'next/link'
const UsersPage = (props) => {
    return (
        <div>
            <Header></Header>

            <div className='container col-10 mt-2 '>
                <Link href="/">
                    <span className='btn btn-dark mt-2'>Back to Home page</span>
                </Link>
                <div className="jumbotron mb-2 mt-4">
                    <h4>Incremental Static Regeneration</h4>
                    
                </div>
                   

 
            <div className='custom-table mb-5 mb-2'>
                <table className='  table-striped  table table-bordered text-center col-5'>
                <thead className="thead-dark">
                    <tr className="bg-info">
                        <th>User ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.users.map((user) => (
                            <tr>
                                <td>
                                    <Link href={`users/${user.id}`} key={user.id}>
                                      
                                    <button type="button" class="btn btn-dark  btn-sm">{user.id}</button>   
                                    </Link>
                                </td>
                                <td>  {user.firstName}</td>
                                <td>  {user.lastName}</td>
                                <td>  {user.age}</td>
                                <td>  {user.email}</td>

                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
                {/* {props.data.users.map(user =>
                    <li key={user.id}>{user.firstName} {user.lastName}</li>
                )
                }  */}
                 
                </div>
                <br/><br/>
            <Footer></Footer>
        </div>
    )
}

export const getStaticProps = async () => {
     const data = await (await fetch("http://dummyjson.com/users")).json()
    return {
        props: {
            data,
        },
    };
}
export default UsersPage;





 