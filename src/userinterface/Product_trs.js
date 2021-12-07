import React, { useEffect } from 'react'
import Slider from 'react-slick'
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getData, ServerURL } from '../FetchNodeService';
import { Grid, AppBar, Toolbar } from '@material-ui/core'
// import SetProductComponent from './productHoc';
import Header from './header';
import { Card } from '@material-ui/core';

import "./Product_trs.css"
import Footer from './footer';

export const Product_trs = (props) => {
    const [status, setStatus] = useState(false)
    const [productStyle, setProductStyle] = useState({
        width: 300,
        height: 400,
        padding: 20,
        margin: 25,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.8s ease',
        corsor: "pointer",



    });
    const [ProductImages, setProductImages] = useState([])

    const onchangeStyle = (event) => {
        setProductStyle((prev) => ({ ...prev, transform: "scale(1.05)" }))
    }

    const onRemoveStyle = (event) => {
        setProductStyle((prev) => ({ ...prev, border: null, transform: "none" }))
        setStatus(null)
    }
    const fetchAllProduct = async () => {
        var result = await getData('product/fetchallproduct')
        setProductImages(result.data)


    }

    useEffect(function () {
        fetchAllProduct()
    }, [])
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        autoplay: true,
        slidesToShow: 1,
    };

    const displaPic = () => {
        return ProductImages.map((item) => {
            return (
                <Card style={productStyle} elevation="3" onMouseLeave={(event) => onRemoveStyle(event)} onMouseEnter={(event) => onchangeStyle(event)}>

                    <div onMouseEnter={(event) => onchangeStyle(event)} onMouseLeave={(event) => onRemoveStyle(event)}>
                        <img src={`${ServerURL}/images/${item.picture}`} width="300" height='325' style={{ display: 'inline-block', borderRadius: 25 }} /></div>
                    <div style={{ display: 'flex', justifyContent: "space-evenly", marginTop: 11, textTransform: "capitalize", fontSize: 18 }}>
                        {item.productname}
                    </div>





                </Card>
            )

        })


    }
    return (
        <div>

            <Header history={props.history} />

            <div>
                <Slider {...settings}>
                    <div>
                        <img src="/product1.jpg" width='100%' alt="" />
                    </div>
                    <div>
                        <img src="/product2.jpg" width='100%' alt="" />
                    </div>

                </Slider>

            </div>





            <section class="section1">
                <div class="container2">
                    <div class="row3">
                        <article class="article4">
                            <h1>THE RIGHT PRODUCT<br />FOR YOUR MARKET</h1>
                            <p>Through our extensive technical and operational knowhow we deliver powders and smart compounding solutions which can fulfill your customer and market requirements.</p>
                            <p><a class="but" href="/en/intelligent-compounding" title="Intelligent Compounding">Intelligent compounding</a></p>
                        </article>
                        <article class="article5">
                            <img class="picture"  src="/material.jpg" alt="THE RIGHT PRODUCT FOR YOUR MARKET" />
                        </article>
                    </div>
                </div>
            </section>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", flexWrap: "wrap", padding: 10 }}>
                {displaPic()}
            </div>


            <Footer history={props.history} />
        </div>
    )
}
