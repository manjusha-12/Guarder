import React from 'react'
import '../App.css'

function Content() {
  return (
    <div className='content w-100'>
        <div className="row">
            <div className="bodyContent col-6 text-center">
                <h1>
                    YOUR SAFETY 
                    <span className='text-warning'>OUR RESPONSIBILITY</span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam excepturi eligendi dolore omnis aut ab reiciendis nulla optio iusto. Officiis cum dolorum corporis facere velit eligendi ad consequuntur eos fugiat?</p>
                 <button className='btn btn-warning'>Read More</button>
                 <button className='btn btn-dark'>Get A Quote</button>
            </div>
            <div className="col-6"></div>
        </div>
    </div>
  )
}

export default Content