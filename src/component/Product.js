import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Style from './Style';

export default function Product() {
   let details=[{Title:"Heart",Text:"New Heart Available",Image:"images/heart.jpg",Price:"40,000,000",Star:4},{Star:3,Title:"Kidney",Image:"images/kidney.jpg",Text:"Latest kidney is ready to our show if anybody want come fast.",Price:"70,000,000"}];
  return(
    <div className='container'>
        <div className='row'>
    {details.map(
        (obj)=>{
            return(
                <div className='col-md-3 m-3'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={obj.Image} />
                    <Card.Body>
                    <Card.Title>{obj.Title}</Card.Title>
                    <Card.Text>
                    {obj.Text}
                    </Card.Text>
                    <Style Props={obj.Star}/>
                    <Button variant="primary">{obj.Price}</Button>
                    </Card.Body>
                    </Card>
                    </div>
            )
        }
    )}
    </div>
    </div>
  )
}
