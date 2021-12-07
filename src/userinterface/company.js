import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './company.css'
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

export default function Company(props) {

    return (
        <>
            <Header history={props.history} />
            <div>
                <Slider {...settings}>
                    <div>
                        <img src="/company1.jpg" width='100%' alt="" />
                    </div>
                    <div>
                        <img src="/company2.jpg" width='100%' alt="" />
                    </div>

                </Slider>

            </div>

            <section id="section-about" class="sectionOne">
                <div class="containerr">
                    <h1>About Us</h1>
                    <p>
                        <br />Tyre Recycling Solutions SA (TRS) was founded in 2013 in Switzerland with the aim of enabling sustainable recycling of the materials contained in scrap tyres. TRS has developed Swiss proprietary technologies to process scrap tyres and deliver output products with significant value-in-use.</p>
                    <p>
                        &nbsp;</p>
                    <h2>Powered by SWISS TECHNOLOGIES</h2>
                    <p>Creator of a circular economy solution, we are a technology developer and integrator. We have developed a toolbox of technologies and know-how to implement the best available process. The cornerstones of our toolbox are rubber powder functionalization technologies, powder chemical coating treatment, a unique water milling technology and intelligent compounding.</p>
                    <p>TRS implements technologies and processes into tyre recycler operations, enabling them to become a supplier of a unique specialty chemical – TyreXol™ rubber powders. TRS relies on in-house Intelligence Compounding© to commercialize TyreXol™ rubber powders in specific market applications.</p>
                    <p>At the center of a transformation, we solve a hazardous waste issue, creating value for existing players of the recycling chain, providing cost-efficient new materials and unique compounding solutions.</p>
                    <p>&nbsp;</p>
                    <h2>Our Office and Formulation Laboratory</h2>
                    <p>Tyre Recycling Solutions SA<br />Zone Industrielle (Z.I.) Le Trési 9A, 1028 Préverenges, Switzerland</p>
                    <p>&nbsp;</p>
                    <h2>Our Production site</h2>
                    <p>Tyre Recycling Solutions SA<br />Chemin des Cerisiers 27, 1462 Yvonand, Switzerland<br />&nbsp;</p>
                </div>
            </section>

            <section id="sectionteam" class="sectionteam">
                <div class="container2">
                    <h1>Our team</h1>
                    <h2>OUR ASSETS ARE<br />OUR EXPERIENCE<br />AND CREATIVITY</h2>
                    <div class="row1">

                        <article class="col1">
                            <div class="imgw">
                                <img class="imgd" src='/img1.png' width="208" height="208" alt="C, CEO" typeof="foaf:Image" />
                            </div>
                            <h1> CEO</h1>
                            <h2>Staffan Ahlgren</h2>
                        </article>


                        <article class="col1">
                            <div class="imgw">
                                <img class="imgd" src='/img4.png' width="208" height="208" alt="Didier Dietrich, CTO" typeof="foaf:Image" />
                            </div>
                            <h1> CTO</h1>
                            <h2>Didier Dietrich</h2>
                        </article>
                    </div>
                </div>
            </section>


            <section id="section-partner" class="sectionthree">
                <div class="container4">
                    <h1>Our partners</h1>
                    <h2>They work with us</h2>
                    <div class="row2">
                        <article class="col6">
                            <div class="imge">
                                <img class="imgg" src="/t1.jpg" width="230" height="100" alt="Tibio" typeof="foaf:Image" />
                            </div>
                        </article>
                        <article class="col-6 col-md-4 col-lg-3">
                            <div class="img-wrapper">
                                <img class="img-fluid d-block" src="/ham.jpg" width="751" height="167" alt="Hammelmann" typeof="foaf:Image" />
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <Footer history={props.history} />
        </>
    )
}