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
                            <p>
                                <a className="btnbeni" href="/en/benefits/benefits-environment">Environment</a>
                            </p>
                        </div>
                        <div className="wrapperbeni2">
                            <p>
                                <a className="btnbeni2" href="/en/benefits/benefits-governments">GOVERNMENTS</a>
                            </p>
                        </div>
                        <img className="imgbeni" sizes="(min-width:1200px) 1170px, (min-width:768px) 1170px, (min-width:575px) 751px, 100vw" src="/beni2.png" alt="TRS win4 - Circular Economy Circle Actions" typeof="foaf:Image" />
                        <div className="wrapperbeni3">
                            <p>
                                <a className="btnbeni44" href="/en/benefits/benefits-goods-manufacturers-and-compounders">GOODS MANUFACTURERS<br />AND COMPOUNDERS</a>
                            </p>
                        </div>
                        <div className="wrapperbeni5">
                            <p>
                                <a className="btnbeni55" href="/en/benefits/benefits-tyre-recyclers-tyrexol-and-recycling-partners">TYRE RECYLERS<br />tyrexol<sup>TM</sup> RECYCLING<br />PARTNERS </a>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
        <Footer history={props.history} />
    </>)

}