import React,{useState} from 'react'
import {Card} from 'react-bootstrap'
// import logo from "../Images/testing.jpeg";
import { Rating } from 'react-simple-star-rating'
import CardsCSS from "./cards.module.css"
import { BsBag } from "react-icons/bs";

export default function Cards({title,price,img}) {
    const [rating, setRating] = useState(0);
    const handleRating = (rate) => {
        setRating(rate)
        // other logic
      }
    

    return (
        <>
            <Card className={CardsCSS.card}>
                <div className={CardsCSS.options}>
                        <div className={CardsCSS.addCart} title='Add to Cart'>
                            <BsBag />
                        </div>
                    <Card.Img variant="top" src={img} style={{ width: '100%',height:'100%' }} />
                     <div className={CardsCSS.quickview}>QuickView</div>   
                </div>
                
                <Card.Body>
                    <Card.Title className={CardsCSS.title}>{title}</Card.Title>
                    <Rating onClick={handleRating} ratingValue={rating} size="12px"/>
                    <Card.Text className={CardsCSS.price}>
                        {price}
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    )
}
