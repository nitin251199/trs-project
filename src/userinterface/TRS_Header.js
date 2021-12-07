import React from 'react'

export const TRS_Header = (props) => {
    return (
        <div>

            <nav className="navbar">
                <div className="navbar-container">
                    <span className="navbar-brand" style={{ float: 'left' }} >
                        <img src="/logo-trs.svg" alt="TRS - Tyre Recycling Solutions" />
                    </span>
                    <div className="contact-links">
                        <span className="btn-primary" role="button" aria-pressed="true">
                            USE Tyrexol
                            <sup>TM</sup> POWDER
                        </span>
                        &nbsp;&nbsp;
                        <span onClick={()=>props.history.push('/trs-register')} className="btn-primary">
                            BECOME A RECYCLING PARTNER
                        </span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#trs-menu" aria-controls="trs-menu" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="navbar-collapse" id="trs-menu">
                        <ul className="menu">
                            <li className="nav-item" style={{ padding: '0.75rem 0.7em', color: '#003764', fontWeight: 800, cursor: 'pointer' }}>
                                <span onClick={() => props.history.push('/trs-tech')}>Technology</span>
                            </li>
                            <li className="nav-item" style={{ padding: '0.75rem 0.7em', color: '#003764', fontWeight: 800, cursor: 'pointer' }}>
                                <span >Products</span>
                            </li>
                            <li className="nav-item" style={{ padding: '0.75rem 0.7em', color: '#003764', fontWeight: 800, cursor: 'pointer' }}>
                                <span onClick={() => props.history.push('/trs-intelligence')}>Intelligent Compounding</span>
                            </li>
                            <li className="nav-item" style={{ padding: '0.75rem 0.7em', color: '#003764', fontWeight: 800, cursor: 'pointer' }}>
                                <span >Benefits</span>
                            </li>
                            <li className="nav-item" style={{ padding: '0.75rem 0.7em', color: '#003764', fontWeight: 800, cursor: 'pointer' }}>
                                <span >Company</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </div>
    )
}
