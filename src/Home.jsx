import React from 'react'
import Navbar from './components/Navbar'
import Div from './components/Div'
import Cards from './components/Cards'
import Form from './components/Form'
import ImgGallery from './components/ImgGallery'
import Content from './components/Content'


function Home() {
  return (
    <>
       <Navbar/>
       <Content/>
       <Div/>
       <Cards/>
       <ImgGallery/> 
       <Form/>
    </>
  )
}

export default Home