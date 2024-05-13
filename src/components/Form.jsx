import React from 'react'

function Form() {
  return (
    <div className='text-center p-5 bg-dark'>
      <h1 className=' text-light'>Get In Touch</h1>
      <div className="row p-5">
        <div className="col-2"></div>
        <div className="col-8">
     <div className='form-floating mb-3'>    
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating mb-3">
  <input type="phone" className="form-control" id="floatingPhone" placeholder="Phone"/>
  <label htmlFor="floatingPhone">Phone</label>
</div>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div className="form-floating">
  <input type="text" className="form-control" id="floatingmsg" placeholder="Message"/>
  <label htmlFor="floatingmsg">Message</label>
</div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Form