//Zeke 2023

import React from "react";
import Navbar from "./Navbar";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

//As instructed: h3 component styled with default generated css file (app.css)
export default class LoginForm extends React.Component {
    render() { //UserName and Password input fields
    return ( //putting LoginForm in center of page as instructed
            <div className='container' class="body"> 
                <br></br>
                <Navbar />

                <div class="row">
                    <div class="center">
                        <div className="card w-75">
                            <h3 className="container-fluid">Log In</h3>
                            <br></br>
                            <div className="form-control">
                                <Form>
                                    <Form.Group className="mb-3" controlId="formUserName">
                                        <Form.Label>UserName</Form.Label>
                                        <Form.Control type="username" placeholder="Enter User Name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Login
                                    </Button>
                                </Form>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
            </div>
        ); //end of return
    } //end of render  
} //end of export