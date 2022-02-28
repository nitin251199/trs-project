import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './benefits.css'
import Header from "./header";
import Footer from "./footer";


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



export default function Benefits(props) {

    return (<>
        <Header history={props.history} />
        <div>
            <img src="/beni1.jpg" className="beniimage" width='100%' alt="" />
        </div>

        <section id="section-benefits" className="sectionbenefits">
            <div className="containerbenefits">
                <div className="rowbeni">
                    <article className="colbeni">
                        <h1>WIN</h1>
                        <h2>Circular Economy<br />Circle of Actions</h2>
                        <p>The mission of TRS is to drive the tyre recycling value chain, in partnership with public and private stakeholders, towards a profitable and sustainable circular economy. TRS solutions create value through cost-efficient eco-technologies, unique compounding intelligence and a partnership approach.&nbsp;</p>
                    </article>
                    <article className="colbeni2">
                        <div className="floatbeni">
                            <h3>PEP:<br />PERFORMANCE<br />ECOLOGY<br />PRICE</h3>
                        </div>
                    </article>
                </div>
                <div className="rowbeni2">
                    <article className="colbeni3">
                        <div className="wrapperbeni">
                            <span>
                                <p className="btn-outline-secondary" >Environment</p>
                            </span>
                        </div>
                        <div className="wrapperbeni2">
                            <span>
                                <p className="btn-outline-secondary" >GOVERNMENTS</p>
                            </span>
                        </div>
                        <img className="fluid-img"  src="/beni2.png" alt="TRS win4 - Circular Economy Circle Actions" />
                        <div className="wrapperbeni3">
                            <span>
                                <p className="btn-outline-secondary" >GOODS MANUFACTURERS<br />AND COMPOUNDERS</p>
                            </span>
                        </div>
                        <div className="wrapperbeni5">
                            <span>
                                <p className="btn-outline-secondary" >TYRE RECYLERS<br />tyrexol<sup>TM</sup> RECYCLING<br />PARTNERS </p>
                            </span>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <Footer history={props.history} />
    </>)

}