import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
 
class CustomFooter extends Component {
  render() {
    return (
    <Navbar fixed="bottom">
      <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
          	<Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
      </Nav>
    </Navbar>
    );
  }
}
 
export default CustomFooter;