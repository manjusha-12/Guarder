import React from 'react'

function Div() {
  return (
    <>
      <div className="container row m-5 p-5 w-100">
        <div className="col-6">
         <img className='img-fluid' src="https://i.pinimg.com/originals/57/16/b3/5716b3b3c1c1a3f55cf2ec59287fc58f.jpg" alt="" />
        </div>
        <div className="col-6 mt-5">
            <h1>WHO ARE WE?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est doloremque voluptate pariatur ullam consequuntur, aspernatur optio iure expedita sint iste similique odio architecto hic impedit ab vero ex animi ipsum.</p>
            <button className="btn btn-warning">READ MORE</button>   
        </div>
      </div>
    </>
  )
}

export default Div