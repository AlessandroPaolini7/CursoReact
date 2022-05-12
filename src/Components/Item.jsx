import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom';
import {Button } from 'react-bootstrap'

function Item({producto}) {

  return (

        
            <Card className="" style={{ width: '18rem' }}>
        <Card.Img variant="top" style={{width:'12rem', height:'20rem'}} src={producto.image} />
        <Card.Body>
            <Card.Title style={{height:'5rem'}}>{producto.name}</Card.Title>
            <Card.Text style={{fontSize:'1.3rem'}}><strong>
            ${producto.price}
            </strong></Card.Text>
            <Link to = {`/item/${producto.id}`}><Button id='buttonDetail' variant="dark">Ver detalle</Button></Link>
        </Card.Body>
        </Card>
  )
}

export default Item