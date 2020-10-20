import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Helmet } from 'react-helmet';
import ContactForm from '../misc/ContactForm';

export default class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Home | ZestyDoug</title>
                </Helmet>
                <div className="center-text">
                    <img src={require("../../assets/images/misc/link-framed.png")} alt="twitch logo" className="xmedium responsive center" />
                    <h1 className="no-padding no-margin">Welcome to ZestyDoug's Gaming page</h1>
                    <p>Follow me on some socials while I build out this site.</p>
                </div>
                <br/>
                <Grid fluid>
                    <Row center="xs" className="s-margin-b">
                        <Col sm={12} md={3}>
                            <a rel="noopener noreferrer" href="https://www.twitch.tv/zestydoug" target="_blank">
                                <div className="social-icon">
                                    <img src={require("../../assets/images/icons/twitch.png")} alt="twitch logo" className="small-fit responsive center" />
                                    <br/>
                                    <h3>Twitch</h3>
                                </div>
                            </a> 
                        </Col>
                    </Row>
                    <Row center="xs">
                        <Col sm={12} md={3}>
                            <a rel="noopener noreferrer" href="https://www.instagram.com/zestydoug" target="_blank">
                                <div className="social-icon">
                                    <img src={require("../../assets/images/icons/instagram.png")} alt="instagram logo" className="small-fit responsive center" />
                                    <br/>
                                    <h3>Instagram</h3>
                                </div>
                            </a> 
                        </Col>
                        <Col sm={12} md={3}>
                            <a rel="noopener noreferrer" href="https://www.facebook.com/ZestyDoug" target="_blank">
                                <div className="social-icon">
                                    <img src={require("../../assets/images/icons/facebook.png")} alt="facebook logo" className="small-fit responsive center" />
                                    <br/>
                                    <h3>Facebook</h3>
                                </div>
                            </a>
                        </Col>
                        <Col sm={12} md={3}>
                            <a rel="noopener noreferrer" href="https://twitter.com/ZestyDoug" target="_blank">
                                <div className="social-icon">
                                    <img src={require("../../assets/images/icons/twitter.png")} alt="twitter logo" className="small-fit responsive center" />
                                    <br/>
                                    <h3>Twitter</h3>
                                </div>  
                            </a>
                        </Col>
                        <Col sm={12} md={3}>
                            <a rel="noopener noreferrer" href="https://www.youtube.com/channel/UCzot0zQk0wh1eXlTx897huQ" target="_blank">
                                <div className="social-icon">
                                    <img src={require("../../assets/images/icons/youtube.png")} alt="youtube logo" className="small-fit responsive center" />
                                    <br/>
                                    <h3>YouTube</h3>
                                </div>
                            </a> 
                        </Col>
                    </Row>
                </Grid>
                {/* <br/>
                <h1>Contact</h1>
                <ContactForm /> */}
            </div>
        )
    }
}
