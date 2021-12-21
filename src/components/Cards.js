import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'
import CardsCSS from "./cards.module.css"
import { BsBag } from "react-icons/bs";
import {FaRupeeSign} from "react-icons/fa"

export default function Cards({ title, price, img, rating }) {



    return (
        <>
            <Card className={CardsCSS.card}>
                <div className={CardsCSS.options}>
                    <div className={CardsCSS.addCart} title='Add to Cart'>
                        <BsBag />
                    </div>
                    <Card.Img variant="top" src={img} style={{ width: '100%', height: '100%' }} />
                    <div className={CardsCSS.quickview}>QuickView</div>
                </div>

                <Card.Body style={{ backgroundColor: "#f4f4f4" }}>
                    <Card.Title className={CardsCSS.title}>{title}</Card.Title>

                    <StarRatings
                        rating={rating}
                        starRatedColor="#fea31c"
                        numberOfStars={5}
                        name='rating'
                        starDimension="18px"
                        starSpacing="2px"
                    />
                    <Card.Text className={CardsCSS.price}>
                        <FaRupeeSign/> {price}
                    </Card.Text>

                </Card.Body>
            </Card>
        </>
    )
}
