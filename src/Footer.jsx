import React from 'react'
import './App.css'

function Footer() {
  return (
    <>
    <div className="footer p-5">
      <div className="row container">
        <div className="col-3 p-5">
          <h2>Guarder</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. emporibus, eligendi. Perferendis rem hsandae.</p>
        </div>
        <div className="col-2 p-5">
          <h2>Links</h2>
          <p>
           <h6> <a className='link' href="">Guards</a></h6>
           <h6> <a className='link' href="">Website</a></h6>
           <h6> <a className='link' href="">Help</a></h6>
          </p>
        </div>
        <div className="col-4 p-5">
          <h2>Contact</h2>
          <p>
          <h6>
              <i className="fa-solid fa-location-dot text-info"></i>
              <a className='link' href="#">Eureka, California</a>
            </h6>
           <h6>
           <i className="fa-solid fa-phone text-info"></i>
              <a className='link' href="#">+91 678457865</a>
           </h6>
            <h6>
            <i className="fa-solid fa-envelope text-info"></i>
            <a className='link' href="">demo@gmail.com</a>
            </h6>
          </p>
        </div>
        <div className="col-3 p-5">
          <h2>Newsletter</h2>
          <div className='form-floating mb-3'>    
  <input type="email" className="form-control text-dark" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<button className='btn btn-warning'>Subscribe</button>
<div className='d-flex'>
             
            <div className="icons d-flex justify-content-between mt-3">
              <a className='ms-2' href="" style={{textDecoration:"none",color:"black"}} target='_blank'>
                <i className='fa-brands fa-twitter'></i>
              </a>
              <a className='ms-2' href="" style={{textDecoration:"none",color:"black"}} target='_blank'>
                <i className='fa-brands fa-facebook'></i>
              </a>
              <a className='ms-2' href="" style={{textDecoration:"none",color:"black"}} target='_blank'>
                <i className='fa-brands fa-instagram'></i>
              </a>
              <a className='ms-2' href="" style={{textDecoration:"none",color:"black"}} target='_blank'>
                <i className='fa-brands fa-github'></i>
              </a>
              <a className='ms-2' href="" style={{textDecoration:"none",color:"black"}} target='_blank'>
                <i className='fa-brands fa-whatsapp'></i>
              </a>
              <a className='ms-2' href="" style={{textDecoration:"none",color:"black"}} target='_blank'>
                <i className='fa-brands fa-linkedin'></i>
              </a>
            </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer