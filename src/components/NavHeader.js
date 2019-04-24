import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from "react-bootstrap/Nav"
import {Route, NavLink, HashRouter} from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import "../styles/NavHeader.css"
import Home from "./Home";
import Productivity from "./Productivity";
import Entertainment from "./Entertainment";
import Security from "./Security";
import Utility from "./Utility";
import Image from "react-bootstrap/Image";
import 'font-awesome/css/font-awesome.min.css';





 
class NavHeader extends Component {
	render() {
    return (
    <HashRouter> 
        <Navbar sticky="top" className="justify-content-start">
            <Navbar.Brand href="/">
                <NavLink to="/">
                    <img
                        src={require('./nav_logo.png')}
                        width="120"
                        height="60"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </NavLink>
            </Navbar.Brand>
            <Nav className="justify-conntent-center" variant="pills" defaultActiveKey="/home">
                <LinkContainer to ="/productivity">
                    <Nav.Item> 
                        <Nav.Link href="/productivity">Productivity</Nav.Link>
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/entertainment">
                    <Nav.Item>
                        <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/security">
                    <Nav.Item>
                      <Nav.Link href="/security">Security</Nav.Link>
                    </Nav.Item>
                </LinkContainer>
                <LinkContainer to="/utility">
                    <Nav.Item>
                      <Nav.Link href="/utility">Utility</Nav.Link>
                    </Nav.Item>
                </LinkContainer>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Item>
                <Nav.Link href="https://github.com/" target="_blank"><i className="fa fa-github"></i></Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        <Image src={require("./header_image1.png")} className="header-image" fluid="true"/>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/productivity" component={Productivity}/>
                <Route path="/entertainment" component={Entertainment}/>
                <Route exact path="/security" component={Security}/>
                <Route path="/utility" component={Utility}/>
            </div>
    </HashRouter>    
    );
  }
}
 
export default NavHeader;
                

