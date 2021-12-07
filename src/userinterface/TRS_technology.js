import React from 'react'
import Footer from './footer'
import Header from './header'
import { TRS_Header } from './TRS_Header'
import './TRS_technology.css'

const TRS_technology = (props) => {
    return (
        <div>
            <div>
                <Header history={props.history} />
            </div>

            <div >

                <div className="carousal-container">
                    <div className="carousal-caption" style={{ marginLeft: 60 }}>
                        <h1>Turning<br />trash into<br />cash</h1>
                        <p>With half the world’s used tyres stockpiled annually, valorisation through recycling remains marginal, limited by a lack of eco-viable and economically lucrative solutions - <strong>until now</strong>.</p>
                        <p>
                            <img alt="Less Than 20% Recylced" src="./p10.png" />
                        </p>
                    </div>
                </div>
                <img src="/p9.jpg" alt="" width="100%" />

            </div>


            <section class="my-section-content">
                <div class="my-section-container">
                    <div class="my-row">
                        <spanrticle class="my-col">
                            <h2>CAR AND TRUCK TYRES</h2>
                            <h1>100% RECYCLED<br />INTEGRATED SOLUTIONS</h1>
                            <p>&nbsp;</p>
                        </spanrticle>
                    </div>
                    <div class="my-row">
                        <spanrticle class="col-process">
                            <div>
                                <img alt="trs WaterPulse" src="/p11.png" />
                            </div>
                            <div>
                                <img alt="Mechanical Grinding" src="/p12.png" />
                            </div>
                        </spanrticle>
                    </div>
                </div>
            </section>


            <section class="section-content-blue">
                <div class="section-container-blue">
                    <div class="row-list-technology">
                        <div class="col-list-technology">
                            <img class="fluid-img" src="/trs-cut1.png" alt="" />
                            <h3>trs <strong>T-Cut<sup>TM</sup></strong></h3>
                            <p>
                                A proprietary tyre cutting process splits tyres into 3 flat parts, optimizing storage and logistics up to 50%, and is the prime first step to total recycling.
                            </p>
                        </div>
                        <div class="col-list-technology">
                            <img class="fluid-img" src="/trs-waterpulse1.png" alt="" />
                            <h3>trs <strong>Water Pulse<sup>TM</sup></strong></h3>
                            <p>
                                A proprietary and highly specialized water-jet system pulverizes tyre tread into fine powder, free from steel and synthetic fibres.Heat- and chemical-free jet milling ensures highest quality powder outputs between 0 and 1mm.
                            </p>
                        </div>
                        <div class="col-list-technology">
                            <img class="fluid-img" src="/trs-mechanical-grinding.png" alt="" />
                            <h3><strong>Mechanical Grinding</strong></h3>
                            <p>
                                Ambient grinding of tyre sidewalls and carcass designed for high quality standard TyreXol<sup>TM</sup> powder.
                            </p>
                        </div>
                        <div class="col-list-technology">
                            <img class="fluid-img" src="/trs-activated-powder.png" alt="" />
                            <h3>trs <strong>Activated Powder</strong></h3>
                            <p>
                                Top-of-the-range rubber powder, treated and transformed using trs BioDevulc™ or trs Chemical Activation technologies primed for TRS Intelligent Compounding©.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section class="section-content-end">
                <spanrticle class="section-container-end">
                    <div class="row-end">
                        <div class="col-end">
                            <h1>SETTING UP FACTORIES</h1>
                            <p>
                                As a Recycling Partner producing TyreXol™, you enter a prime circular value chain supported by our comprehensive lineup of proprietary solutions turning your stockpiles into profits.
                            </p>
                            <p>
                                TRS ‘solutions can be part of a greenfield project or be added to an existing tyre recycling facility.
                            </p>
                            <p>
                                <span class="btn-outline-secondary">Become a Recycling Partner</span>
                            </p>
                        </div>
                    </div>
                    <div class="row-end">
                        <div class="col-img">
                            <img class="fluid-img" src="/setting-up.jpg" alt="" style={{ marginTop: 40 }} />
                        </div>
                    </div>
                </spanrticle>
            </section>


            <Footer history={props.history} />

        </div>
    )
}

export default TRS_technology
