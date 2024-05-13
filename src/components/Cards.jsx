import React from 'react'
import '../App.css'

function Cards() {
  return (
    <>
    <div className="bg-dark text-center text-light" style={{height:"700px"}}>
      <h1 className='p-5'>OUR SERVICES</h1>
      <div className="cardGroup p-3">
        <div className="cards">
        <h1><i className="fa-solid fa-house-lock"></i></h1>
        <h3>HOME SECURITY</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, enim impedit placeat corrupti nisi ex, blanditiis itaque atque fuga voluptatum praesentium. Facere excepturi perferendis sint architecto quo autem deserunt est!</p>
         <button className="btn btn-warning">Read More</button>
        </div>
        <div className="cards">
        <h1><i className="fa-solid fa-house-fire"></i></h1>
        <h3>OFFICE SECURITY</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, enim impedit placeat corrupti nisi ex, blanditiis itaque atque fuga voluptatum praesentium. Facere excepturi perferendis sint architecto quo autem deserunt est!</p>
         <button className="btn btn-warning">Read More</button>
        </div>
        <div className="cards">
        <h1><i className="fa-solid fa-person-military-pointing"></i></h1>
        <h3>BODYGUARD GROUP</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, enim impedit placeat corrupti nisi ex, blanditiis itaque atque fuga voluptatum praesentium. Facere excepturi perferendis sint architecto quo autem deserunt est!</p>
         <button className="btn btn-warning">Read More</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default Cards