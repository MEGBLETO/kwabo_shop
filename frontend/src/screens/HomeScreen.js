import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {


  
  
  const [products , setProducts] = useState([]) 
  
  const getProducts = async() =>{
    const req = await axios.get(`http://localhost:5000/api/products`)
    const data = await req.data;
    setProducts(data)
    console.log(products)
  }
  


useEffect(() =>{
  getProducts()
},[])


  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product=>(
          <Col key={product._id} sm={12} md={6} lg={4}>
         <Product  product={product}/>
          </Col>
       ))}
      </Row>
    </> 
  )
}

export default HomeScreen
