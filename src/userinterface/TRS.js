import React, { useEffect } from 'react'
import { Grid, AppBar, Toolbar } from '@material-ui/core'
import './TRS.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TRS_Header } from './TRS_Header';
import Header from './header';
import Footer from './footer';
import "aos/dist/aos.css"
import Aos from 'aos';

export const TRS = (props) => {

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

    useEffect(function(){

        Aos.init({
            duration:400
          });
    },[])


    return (
        <div>
            <Header history={props.history} />

            <div>
                <Slider {...settings}>
                    <div>
                        <img src="/slider1.jpg" width='100%' alt="" />
                    </div>
                    <div>
                        <img src="/slider2.jpg" width='100%' alt="" />
                    </div>
                    <div>
                        <img src="/slider3.jpg" width='100%' alt="" />
                    </div>
                    <div>
                        <img src="/slider4.jpg" width='100%' alt="" />
                    </div>
                </Slider>
            </div>


            <section className="section-content">
                <div className="section-container">
                    <div className="row">
                        <article className="col-lg-4">
                            <header>
                                <h1>Benefits<br />for all!</h1>
                                <h3>Be part of the virtuous circle</h3>
                            </header>
                            <h2>Tyre Recycling Solutions</h2>
                            <p>TRS proprietary technologies give Recyclers optimal value creating opportunities. Gain market value and tap new profit channels together as our Partner. Increase your profitability by partnering with TRS.</p>
                            <footer>
                                <span className="btn-outline-secondary" onClick={()=>props.history.push('/technology')}>Technology</span>
                            </footer>
                        </article>
                        <article className="col-img-special">
                            <img className="img-fluid" src="/p6.jpg" alt=""/>
                        </article>
                        <article className="col-lg-4">
                            <header>
                                &nbsp;
                            </header>
                            <h2>Compounding Solutions</h2>
                            <p>Engineered to deliver groundbreaking compounding applications, TyreXol™ is a versatile, sustainable and cost effective recycled Rubber Powder. TyreXol™&nbsp;activated powders customised by our Formulation Experts provide cutting edge performance to polymer products in multiple market segments.</p>
                            <footer>
                                <span className="btn-outline-secondary">Market Applications</span>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>



            <section className="section-content-2">
                <div className="section-container-fluid">
                    <div className="section-row" >
                        <article className="col-md-6">
                            <h1>Circle of actions</h1>
                            <h2>Everybody wins</h2>
                            <p>TRS drives the tyre recycling value chain, in partnership with public&nbsp;
                                <br />and private stakeholders, towards a profitable and sustainable circular economy. TRS solutions create value through cost-efficient eco-technologies, unique compounding intelligence and a partnership approach. Join us.</p>
                            <footer>
                                <span className="btn-outline-secondary" onClick={()=>props.history.push('/benefits')}>BENEFITS</span>
                            </footer>
                        </article>
                        <article className="img-content">
                            <span>
                                <img className="img-fluid-d-block" src="/p7.jpg" alt=""/>
                            </span>
                        </article>
                    </div>
                </div>
            </section>


            <section className="section-content-3">
                <div className="section-container-fluid-2">
                    <div className="section-row-2">
                        <article  className="img-content-2">
                            <img className="img-fluid-d-block-2" src="/p8.jpg" alt=""/>
                        </article>
                        <article className="section-col">
                            <h1>Innovation at each step</h1>
                            <h2>
                                <img alt="TRS Intelligent Compounding" src="/p9.png" />
                            </h2>
                            <p>TRS Intelligent Compounding© provides optimal sustainable innovation to Partners through tailored smart solutions. By unlocking application domains through Swiss engineering, biotechnology and applied science, TRS is a driving force for higher-quality rubber and application specific compounds.</p>
                            <footer>
                                <span className="btn-outline-secondary" onClick={()=>props.history.push('/intelligent-compounding')}>Intelligent Compounding</span>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>


            <Footer history={props.history} />

        </div>
    )
}


