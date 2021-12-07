import React from 'react'
import { Grid, AppBar, Toolbar } from '@material-ui/core'
import './TRS.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Header from './header';
import "./TRS_intelligent.css"
import { TRS_Header } from './TRS_Header';
import Header from './header';
import Footer from './footer';
export const TRS_Intelligent_compund = (props) => {




    return (
        <div>
           <Header history={props.history} />

            <div>
                <div>
                    <img src="/slideshow1.jpg " width="100%" />
                </div>
                <div className="container-caption">
                    <div className="carousel-captions">
                        <div className="carousel-captions2">
                            <div className="columbn"><h1>TRS KNOW-HOW</h1><h2>YOUR PARTNER FOR SMART SOLUTIONS</h2><p>TRS is a primary source for new material innovation, modifying, revitalising, and even replacing materials with activated rubber powders.&nbsp;</p><p>TRS harnesses gateway technologies and deep compounding experience to develop customised products catered to your specific field of application.</p><p>
                                <img alt="trs Intelligent Compounding"  src="/p9.png" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section-teaser">
                <div className="mycontainer">
                    <div className="myrow">
                        <article className="col33">
                            <a href="/en/intelligent-compounding/our-expertise">
                                <img className="imgfluid" src="/smartintelligent2.jpg" alt="" />
                            </a>
                            <h1>CREATING PERFORMING MATERIALS</h1>
                            <h2>OUR EXPERTISE</h2>
                            <p>TyreXol<sup>TM</sup> is what you get if you mix Swiss ingenuity in engineering, biotechnology and application expertise together and apply them to tyre recycling. We work closely with our partners to develop solutions that are adapted to local market needs and conditions.</p>
                            <footer> <a className="btn-outline-secondary" href="/en/intelligent-compounding/our-expertise">Our expertise</a>
                            </footer>
                        </article>
                        <article className="col44">
                            <a href="/en/intelligent-compounding/market-applications">
                                <img className="imgfluid" src="/smartintelligent3.jpg" alt="" typeof="foaf:Image" />
                            </a><h1>The proof is<br />in the powders</h1><h2>INNOVATIVE. VERSATILE. ECOLOGICALLY SOUND.</h2><p>New materials enhanced with TyreXol™ can be applied to boost functionality and performance across a wide range of industries, from building and construction, to automotive and transportation, footwear, 3D printing, and beyond.</p>
                            <footer> <span className="btn-outline-secondary" >Markets Applications</span>
                            </footer> </article>
                    </div>
                </div>
            </section>


            <Footer history={props.history} />

        </div>
    )
}


