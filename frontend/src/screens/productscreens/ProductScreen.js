import React, {useState, useEffect} from 'react'
import{Row, Col, Image, ListGroup , Card , Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../../components/Rating'
import axios from 'axios'
import {Link} from 'react-router-dom'
//import Product from '../../components/Product'

const ProductScreen = ({match}) => {


  const [product , setProduct] = useState([]) 



const getProducts = async() =>{
  const req = await axios.get(`http://localhost:5000/api/products/${match.params.id}`)
   const data = await req.data;
   console.log(data)
   setProduct(data)
}



useEffect(() =>{
  getProducts()
}, [match])


  return (
    <>
      <Link className="btn btn-light my-3" to="/">Go Back</Link>
   <Row>
     <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
     </Col>
     <Col md={3}>
         <ListGroup variant="flush">
           <ListGroup.Item>
             <h2>{product.name}</h2>
           </ListGroup.Item>
           <ListGroup.Item>
             <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
           </ListGroup.Item>
           <ListGroup.Item>
             price: {product.price}
           </ListGroup.Item>
           <ListGroup.Item>
             price: {product.description}
           </ListGroup.Item>
         </ListGroup>
     </Col>
     <Col md={3}>
        <Card>
          <ListGroup> 
            <ListGroupItem>
              <Row>
                <Col>
                Price:
                </Col>
                <Col>
                <strong>${product.price}</strong>
                </Col>
                </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>
                Status:
                </Col>
                <Col>
                <strong>{product.countInStock > 0 ? 'In Stock' : 'Not available at the moment'}</strong>
                </Col>
                </Row>
            </ListGroupItem>
          </ListGroup>

          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>
                <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Go to cart</Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
  </Col>
   </Row>
    </>
  )
}

export default ProductScreen
