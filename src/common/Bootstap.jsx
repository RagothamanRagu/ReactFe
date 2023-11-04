import React, { useState } from "react"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Boostrap() {
    const [title, settitle] = useState([
        {
            title: "Flower",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        },
        {
            title: "animal",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        },
        {
            title: "river",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        },
        {
            title: "nature",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        },
        {
            title: "love",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        },
        {
            title: "love forever",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg",
        },
        {
            title: "Ragu",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
        },
        {
            title: "sai",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
        },
        {
            title: "suresh",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
        },
        {
            title: "saran",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
        },
        {
            title: "rohit",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
        },
        {
            title: "dhoni",
            img: "https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg"
        }
    ])

    return (

        <div className="row">

            {title.map((dd, i) => (

                <div className="col-3" key={i}>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>{dd.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>

            ))}

        </div>

    );


}







