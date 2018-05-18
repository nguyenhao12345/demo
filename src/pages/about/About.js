import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Container, Row, Col} from "reactstrap";

class About extends Component {
    render() {

        return (
            <div className="backround-login">


            <Container>
                
                <Row className="mr-top">
                        <Col xs="6" sm="4"></Col>
                        <Col xs="6" sm="4" className="background">
                            <CardGroup>

                            <Card >
                                    <div className="icon-center">
                                    <img id="profile-img" alt ="" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                                    </div>
                                    <CardBody>
                                        <div className="name">
                                        <h2 >Sign In</h2>
                                        </div>
                                        <form>
                                            <div className="form-group">
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon color-icon-user"><i className="glyphicon glyphicon-user" aria-hidden="true"></i></span>
                                                        <input type="text" className="form-control border-style" name="username" id="username" placeholder="Username" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="cols-sm-10">
                                                    <div className="input-group">
                                                        <span className="input-group-addon color-icon-user"><i className="glyphicon glyphicon-lock" aria-hidden="true"></i></span>
                                                        <input type="password" className="form-control border-style" name="username" id="username" placeholder="Password" />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block login-button" type="submit"> Login</button>
                                            <div className="checkbox login-options">
                                                <label><input type="checkbox" /> Remember Me</label>
                                                <label className="mr-r"><a className="login-forgot">Forgot Password?</a></label>
                                            </div>
                                            
                                        </form>
                                    
                                    </CardBody>
                                    <Col sm="4"></Col>
                                </Card>
                            </CardGroup>
                       
                            
                        </Col>
                    </Row>
                    <div className="text-center">
                    <hr className="line"/>
                    <h4>Don't have a account?</h4>
                    <h3>Register here</h3>
                    <h4>designed by freepik.com</h4>
                    </div>
                </Container>


            </div>




              

               
        );
    }
}

export default About;
