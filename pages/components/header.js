import Link from 'next/link'
function Header({header}){
    return(
       < ><div className="header-container">
        <img src='https://www.ust.com/content/dam/ust/images/logos/ust-white-logo.svg' alt='logo' />
      </div>
      
      {/* <div className='container col-10'>  <Link href="/">
        <span className='btn btn-primary mt-2'>Home page</span>
    </Link></div> */}
    </>
      
    )
}
export default Header