
import Link from 'next/link'

const UserPage = (props) => {
  console.log("props", props);
  return (

    <div>
      <header className="header-container">
        <img src='https://www.ust.com/content/dam/ust/images/logos/ust-white-logo.svg' alt='logo' />
      </header>
      <div className='container-sm col-8 mt-5'>

        <Link href="/">
          Back to Home page
        </Link>
        {/* <div >{JSON.stringify(Users)} </div>  */}

        <div className="jumbotron mb-5">

          <h3 className="mt-3">SSR Server-side Rendering</h3>
          {/* <p> Server-side rendering means using a server to generate HTML from JavaScript modules in response to a URL request. That’s in contrast to client-side rendering, which uses the browser to create HTML using the DOM.
          </p> */}
          {/* <h4>Pros</h4>
          <ul>
            <li>It enables pages to load faster which provides a better user experience.</li>
            <li>It plays an important role in SEO (search engine optimization) and correctly indexes webpages. This happens because Google favors web pages with faster load time.</li>
            <li>It provides body to the HTML pages for all server ships.</li>
          </ul>
          <h4>cons</h4>
          <ul>
            <li>Slower page transitions</li>
            <li><b>Vulnerability:</b> SSR sites are harder to keep secure because they have a bigger surface to attack than CSR sites. This is however not an issue if you or your developers know what they’re doing.</li>
            <li><b>Complex caching: </b>configuring your cache is usually more complex on SSR sites than CSR sites.</li>
            <li>Server cost: </li>

          </ul> */}
          {/* <h4>Explanation</h4>
          <p><b>Why we need server side rendering, </b>First thing it is fast. In SSR user cannot see the data(Api keys , Headers) in the NetworkTabwhere as in the Cleint side rendering, user can see the data. So evering thing is exposed in the network tab when we are working on the CSR. In SSR it is not possible. </p> */}
          <div className="alert alert-primary" role="alert">
            <b>export async function getServerSideProps(){<br />
            }</b>

          </div>
        </div>
      </div>


      {/* {
                props.data.users.map(user=>
                    
                    <li key={user.id}>{user.firstName}</li>
                    )
             } */}

      <div className='container col-8 custom-table'>
        <table className=' table-striped table table-bordered text-center '>
          <thead className="thead-dark">
            <tr className="bg-info">
              <th>User ID</th>
              <th>User Name</th>
            </tr>
          </thead>
          <tbody>
            {props.data.users.map((user) => (
              <tr>
                <td>
                  {/* <Link href={`/pokemon/${user.id}`}>   */}
                  {user.id}
                  {/* </Link> */}
                </td>
                <td>{user.firstName}</td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const data = await (await fetch("http://dummyjson.com/users")).json()
  return {
    props: {
      data,
    },
  };
};
export default UserPage