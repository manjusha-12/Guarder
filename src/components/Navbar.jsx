import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <>
       <div className="navbar bg-dark d-flex justify-content-evenly">
        <div className="row">
            <div className="col-6 mt-3">
            <h6>
              <i className="fa-solid fa-location-dot text-info"></i>
              <a href="#" style={{textDecoration:"none",color:"white"}}>Eureka, California</a>
            </h6>
            </div>
            <div className="col-6 mt-3">
            <h6 className='ms-5'>
              <i className="fa-solid fa-phone text-info"></i>
              <a href="#" style={{textDecoration:"none",color:"white"}}>+91 678457865</a>
            </h6>
            </div>
           
        </div>
        </div> 
       <div>
       <nav className="navbar bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="#">
      <h1>
        <img src="https://static.vecteezy.com/system/resources/previews/000/425/563/original/vector-shield-icon.jpg" alt="guard" width="30" height="24"/>
        Guarder
      </h1>
    </a>
  </div>
</nav>
    
       </div>
         
    </>
  )
}

export default Navbar