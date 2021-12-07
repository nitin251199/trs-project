import React from 'react'
import Header from './header'
import Footer from './footer'
import './TRS_expertise.css'
import { TRS_Header } from './TRS_Header'

const TRS_expertise = (props) => {
    return (
        <div>

            <Header history={props.history} />


            <section className="section-banner">
                <div id="carouselHomepage" className="carousel-slide" data-ride="carousel" data-interval="8000">
                    <div className="carousel-inner">
                        <article className="carousel-item">
                            <img className="img-fluid" src="/expertise1.jpg" alt="" typeof="foaf:Image" />
                            <div className="container-1">
                                <div className="carousel-caption-container">
                                    <div className="row-1">
                                        <div className="col-1">
                                            <h1>YOUR PARTNER FOR&nbsp; <br />SMART SOLUTIONS</h1>
                                            <p>
                                                Fusing sustainability and smart solutions&nbsp; with optimal quality standards and high marketability, for a positive ecological footprint.
                                            </p>
                                            <p>
                                                {/* <img alt="trs Intelligent Compounding" data-entity-type="file" data-entity-uuid="bc7ce280-0317-4811-a91e-6846605bdc2f" src="/sites/default/files/inline-images/trs-intelligent-compounding.png" /> */}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>


            <section className="section-content-exp">
                <div className="container-2">
                    <div className="row-2">
                        <article className="col-2">
                            <h1>OUR TECHNOLOGY&nbsp;<br />TOOLBOX</h1>
                            <p>
                                TRS can produce different grades of TyreXol™ by varying the feedstock, the grinding technology, the particle size and the treatment of the rubber particles.
                            </p>
                            <p>
                                The end application technical and commercial requirements will dictate which technology to use.
                            </p>
                        </article>
                    </div>
                </div>
                <div className="container-2">
                    <div className="row-2">
                        <article className="col-img-full">
                            <img className="img-exp" src="/exp1.jpg" alt="Feedstock" typeof="foaf:Image" />
                        </article>
                        <article className="col-img-full">
                            <img className="img-exp" src="/exp2.jpg" alt="Grinding Technology" typeof="foaf:Image" />
                        </article>
                    </div>
                    <div className="row-1">
                        <article className="col-img-full">
                            <img className="img-exp" src="/exp3.jpg" typeof="foaf:Image" />
                        </article>
                        <article className="col-img-full">
                            <img className="img-exp" src="/exp4.jpg" typeof="foaf:Image" />
                        </article>
                    </div>
                </div>
            </section>


            <section className="section-content-biodevulc">
                <div className="container-3">
                    <article>
                        <div id="biodevulc-1" className="row-3">
                            <div className="col-3-img-content">
                                <img className="img-fluid-exp" src="/exp-bio-1.jpg" alt="trs BioDevulc" />
                            </div>
                            <div className="col-3">
                                <h1>PRODUCT TECHNOLOGY</h1>
                                <p>
                                    A game-changing biochemical process for surface devulcanization of the rubber powder - TyreXol™ CWD.
                                </p>
                                <div className="row-3">
                                    <div className="col-3-1">
                                        <img alt="Vulcanized rubber" src="/exp-bio-2.png" />
                                    </div>
                                    <div className="col-3-1">
                                        <img alt="De-vulcanized rubber" src="/exp-bio-3.png" />
                                    </div>
                                </div>
                                <p>
                                    <img alt="trs BioDevulc" height="22" src="/exp-bio-4.png" width="181" />
                                </p>
                                <p>
                                    &nbsp;
                                </p>
                            </div>
                            <div className="biodevulc-powder-img">
                                <img className="img-fluid-exp" src="/exp-bio-5.jpg" alt="trs BioDevulc" typeof="foaf:Image" />
                            </div>
                        </div>
                    </article>
                </div>
            </section>


            <section className="section-teaser-exp">
                <div className="container-4">
                    <div className="row-4">
                        <article className="col-4">
                            <a href="/en/products/use-tyrexol">
                                <img className="img-fluid" src="/high-exp-1.jpg" alt="" typeof="foaf:Image" naptha_cursor="text" />
                            </a>
                            <h1>High standard<br />quality control</h1>
                            <p>
                                Our products and production processes conform to strict standards synonymous with Swiss quality and precision around the world. We drive both quality control and assurance to meet the stringent product requirements our clients demand.
                            </p>
                            <footer>
                                <a className="btn-outline-secondary" href="/en/products/use-tyrexol">USE Tyrexol™ POWDER</a>
                            </footer>
                        </article>
                        <article className="col-4">
                            <a href="/en/intelligent-compounding/market-applications">
                                <img className="img-fluid" src="/high-exp-2.png" alt="" typeof="foaf:Image" />
                            </a>
                            <h1>Compounding into innovative materials</h1>
                            <p>
                                TRS doesn’t stop at the powder. We work with our partners and customers to use TyreXol<sup>TM</sup> powders in innovative and valuable downstream applications.
                            </p>
                            <footer>
                                <a className="btn-outline-secondary" href="/en/intelligent-compounding/market-applications">Markets Applications</a>
                            </footer>
                        </article>
                    </div>
                </div>
            </section>


            <Footer history={props.history} />


        </div>
    )
}

export default TRS_expertise;