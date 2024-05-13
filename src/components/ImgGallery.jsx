import React from 'react'
import '../App.css'

function ImgGallery() {
  return (
    <div className='container text-center'>
      <h1 className='p-5'>OUR GUARDS</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident asperiores consequuntur amet iste. Eos temporibus similique provident aliquam odit minus repudiandae. Aspernatur est dolore harum praesentium id aperiam enim tempore!</p>
      <div className="row ImgGroup">
        <div className="col-4 img border border-3">
          <img className='img-fluid' src="https://smartsecuritypros.com/wp-content/uploads/2020/01/armed-residential-security-guard-1-920x1024.png" alt="" />
          <h2>Martin Anderson</h2>
          <h3>supervisor</h3>
        </div>
        <div className="col-4 img border border-3">
          <img className='img-fluid' src="http://images.unsplash.com/photo-1618371690240-e0d46eead4b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mnx8c2VjdXJpdHklMjBndWFyZHN8fDB8fHx8MTYyNTQzMjAzOQ&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
          <h2>Denny Butler</h2>
          <h3>supervisor</h3>

        </div>
        <div className="col-4 img border border-3">
          <img className='img-fluid' src="https://st.depositphotos.com/1479672/2348/i/950/depositphotos_23483767-stock-photo-security-guard.jpg" alt="" />
         <h2>Nathan Mcpherson</h2>
          <h3>supervisor</h3>

        </div>
      </div>
      <div className='p-5'><button className='btn btn-warning'>VIEW ALL</button></div>
    </div>
  )
}

export default ImgGallery